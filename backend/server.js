require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const profileRoutes = require("./routes/profile");
const paymentRoutes = require("./routes/payment");
const aiResumeRoutes = require("./routes/ai-resume");

const app = express();

/* ===============================
   MIDDLEWARE
================================ */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ===============================
   STATIC FILES
   This serves frontend + uploads
================================ */

// frontend files
app.use(express.static(path.join(__dirname, "..")));

// serve uploaded resumes
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ===============================
   API ROUTES
================================ */
app.use("/api/profile", profileRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/ai-resume", aiResumeRoutes);

/* ===============================
   TEST ROUTE
================================ */
app.get("/api/test", (req, res) => {
  res.json({ status: "Backend working" });
});

/* ===============================
   START SERVER
================================ */
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
