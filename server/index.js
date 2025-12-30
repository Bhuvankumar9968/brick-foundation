import express from "express";
import Razorpay from "razorpay";
import cors from "cors";
import bodyParser from "body-parser";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

console.log(
  "Razorpay Key ID:",
  process.env.RAZORPAY_KEY_ID ? "Loaded" : "Missing"
);
console.log(
  "Razorpay Key Secret:",
  process.env.RAZORPAY_KEY_SECRET ? "Loaded" : "Missing"
);

// ✅ Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("Razorpay Donation API is running...");
});


// ============================================================
// 🧾 ONE-TIME PAYMENT — Create Order
// ============================================================
app.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  if (!amount) return res.status(400).send("Amount required");

  try {
    const options = {
      amount: amount * 100, // Convert to paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    console.error("Error creating Razorpay order:", err);
    res.status(500).send("Error creating order");
  }
});


// ============================================================
// 🔁 RECURRING PAYMENT — Create Subscription
// ============================================================

// Helper to get or create a 1000 INR monthly plan
async function getOrCreatePlan() {
  try {
    // 1. Try to fetch existing plans
    const plans = await razorpay.plans.all();

    // 2. Look for a plan with the specific characteristics
    const existingPlan = plans.items.find(p =>
      p.item.amount === 100000 && // 1000 INR in paise
      p.period === 'monthly' &&
      p.interval === 1
    );

    if (existingPlan) {
      return existingPlan.id;
    }

    // 3. If not found, create a new one
    const newPlan = await razorpay.plans.create({
      period: "monthly",
      interval: 1,
      item: {
        name: "NGO Donation - 1000/Month",
        amount: 100000,
        currency: "INR",
        description: "Monthly donation of ₹1000 to Brick Foundation"
      },
      notes: {
        purpose: "ngo_donation_subscription"
      }
    });

    console.log("✅ Created new plan:", newPlan.id);
    return newPlan.id;

  } catch (error) {
    console.error("Error in getOrCreatePlan:", error);
    throw error;
  }
}

app.post("/create-subscription", async (req, res) => {
  // We ignore req.body.plan_id essentially, enforcing the 1000/month rule or logic
  // But we can keep other params like total_count
  const { total_count = 120, customer_notify = 1 } = req.body;

  try {
    // const plan_id = await getOrCreatePlan();
    const plan_id = "plan_Rxk6cXaf7yAz1j"; // User provided Plan ID

    if (!plan_id) {
      return res.status(500).send("Could not identify a valid Plan ID.");
    }

    const subscription = await razorpay.subscriptions.create({
      plan_id,
      total_count,
      customer_notify,
      quantity: 1,
      addons: [],
      notes: {
        source: "website_donation"
      }
    });

    res.json(subscription);
  } catch (err) {
    console.error("Error creating subscription:", err);
    res.status(500).send(err.message || "Error creating subscription");
  }
});


// ============================================================
// 🔐 VERIFY PAYMENT SIGNATURE
// ============================================================
app.post("/verify", (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_subscription_id,
    razorpay_signature
  } = req.body;

  console.log("Verify Request:", req.body);

  if (!razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  let body = "";

  if (razorpay_subscription_id) {
    // 🔄 Subscription Verification: payment_id + "|" + subscription_id
    body = razorpay_payment_id + "|" + razorpay_subscription_id;
  } else if (razorpay_order_id) {
    // 🧾 Order Verification: order_id + "|" + payment_id
    body = razorpay_order_id + "|" + razorpay_payment_id;
  } else {
    return res.status(400).json({ success: false, message: "Missing ID (order or subscription)" });
  }

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    res.json({ success: true, message: "Payment verified successfully" });
  } else {
    console.error("Signature mismatch:", { expectedSignature, razorpay_signature });
    res.status(400).json({ success: false, message: "Invalid signature" });
  }
});


// ============================================================
// 🚀 START SERVER
// ============================================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
