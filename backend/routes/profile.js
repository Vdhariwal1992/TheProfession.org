const express = require("express");
const router = express.Router();
const upload = require("../middle/middleware-upload");
const db = require("../db");
const fs = require("fs");
const path = require("path");

/* SAVE PROFILE */
router.post("/save", upload.single("resume"), async (req, res) => {
  try {
    const {
      full_name,
      city,
      phone,
      gender,
      current_role,
      experience,
      skills,
      qualification,
      passing_year,
      institute
    } = req.body;

    /* ===============================
       RESUME HANDLING
    ================================ */

    const uploadDir = path.join(__dirname, "../uploads/resumes");

    // ensure folder exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    let resumeFilename = null;

    if (req.file) {
      // user uploaded resume
      resumeFilename = req.file.filename;
    } else {
      // copy default blank resume
      const defaultResumePath = path.join(
        __dirname,
        "../middle/defaults/blank_resume.pdf"
      );

      if (!fs.existsSync(defaultResumePath)) {
        return res.status(500).json({
          message: "Default resume template missing on server"
        });
      }

      const newName = Date.now() + "-default.pdf";
      const destPath = path.join(uploadDir, newName);

      fs.copyFileSync(defaultResumePath, destPath);
      resumeFilename = newName;
    }

    /* ===============================
       DB INSERT
    ================================ */

    const sql = `
      INSERT INTO job_seeker_profiles
      (full_name, city, phone, gender, current_role, experience, skills, qualification, passing_year, institute, resume)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await db.execute(sql, [
      full_name,
      city,
      phone,
      gender,
      current_role,
      experience,
      skills,
      qualification,
      passing_year,
      institute,
      resumeFilename
    ]);

    res.json({ message: "Profile saved successfully" });

  } catch (err) {
    console.error("PROFILE SAVE ERROR:", err);
    res.status(500).json({ message: "Server error while saving profile" });
  }
});

module.exports = router;
