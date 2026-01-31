const express = require("express");
const router = express.Router();

router.post("/generate", (req, res) => {
  res.json({
    message: "AI resume generation coming soon"
  });
});

module.exports = router;
