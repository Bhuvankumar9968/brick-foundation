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

// ============================================================
// 🔐 ENV CHECK (safe to keep)
// ============================================================
console.log(
  "Razorpay Key ID:",
  process.env.RAZORPAY_KEY_ID ? "Loaded" : "Missing"
);
console.log(
  "Razorpay Key Secret:",
  process.env.RAZORPAY_KEY_SECRET ? "Loaded" : "Missing"
);

// ============================================================
// 🔑 RAZORPAY INSTANCE
// ============================================================
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ============================================================
// 📌 SUBSCRIPTION PLAN ID (HARDCODED)
// ============================================================
const MONTHLY_PLAN_ID = "plan_R99YBmzI1XxGjj";

// ============================================================
// 🏥 HEALTH CHECK
// ============================================================
app.get("/", (req, res) => {
  res.send("✅ Razorpay Donation API is running");
});

// ============================================================
// 🧾 ONE-TIME PAYMENT — CREATE ORDER
// ============================================================
app.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({ error: "Amount is required" });
  }

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // rupees → paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    res.json(order);
  } catch (err) {
    console.error("Create order error:", err);
    res.status(500).json({ error: "Order creation failed" });
  }
});

// ============================================================
// 🔐 VERIFY ONE-TIME PAYMENT
// ============================================================
app.post("/verify", (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = req.body;

  if (
    !razorpay_order_id ||
    !razorpay_payment_id ||
    !razorpay_signature
  ) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    res.json({ success: true, message: "Payment verified" });
  } else {
    res.status(400).json({ success: false, message: "Invalid signature" });
  }
});

// ============================================================
// 🔁 MONTHLY SUBSCRIPTION — CREATE
// ============================================================
app.post("/create-subscription", async (req, res) => {
  try {
    const subscription = await razorpay.subscriptions.create({
      plan_id: MONTHLY_PLAN_ID,
      customer_notify: 1,
      total_count: 12, // remove for infinite subscription
    });

    res.json(subscription);
  } catch (err) {
    console.error("Create subscription error:", err);
    res.status(500).json({ error: "Subscription creation failed" });
  }
});

// ============================================================
// 🔐 VERIFY SUBSCRIPTION PAYMENT
// ============================================================
app.post("/verify-subscription", (req, res) => {
  const {
    razorpay_payment_id,
    razorpay_subscription_id,
    razorpay_signature,
  } = req.body;

  if (
    !razorpay_payment_id ||
    !razorpay_subscription_id ||
    !razorpay_signature
  ) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  const body =
    razorpay_payment_id + "|" + razorpay_subscription_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    res.json({ success: true, message: "Subscription verified" });
  } else {
    res.status(400).json({ success: false, message: "Invalid signature" });
  }
});

// ============================================================
// 🚀 START SERVER
// ============================================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
