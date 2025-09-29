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
app.post("/create-subscription", async (req, res) => {
  const { plan_id, total_count = 12, customer_notify = true } = req.body;

  if (!plan_id) return res.status(400).send("plan_id required");

  try {
    const subscription = await razorpay.subscriptions.create({
      plan_id,
      total_count,
      customer_notify,
    });

    res.json(subscription);
  } catch (err) {
    console.error("Error creating subscription:", err);
    res.status(500).send("Error creating subscription");
  }
});


// ============================================================
// 🔐 VERIFY PAYMENT SIGNATURE
// ============================================================
app.post("/verify", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    res.json({ success: true, message: "Payment verified successfully" });
  } else {
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
