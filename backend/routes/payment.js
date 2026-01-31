const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");

// TEST route
router.post("/create-order", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || "test",
      key_secret: process.env.RAZORPAY_KEY_SECRET || "test"
    });

    const options = {
      amount: 59900, // ₹599
      currency: "INR",
      receipt: "rcpt_" + Date.now()
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Payment order failed" });
  }
});

module.exports = router;
