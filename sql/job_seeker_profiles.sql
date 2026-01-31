CREATE TABLE job_seeker_profiles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL UNIQUE,
  full_name VARCHAR(150),
  city VARCHAR(100),
  phone VARCHAR(20),
  gender VARCHAR(20),
  current_role VARCHAR(150),
  experience INT,
  skills TEXT,
  qualification VARCHAR(150),
  passing_year INT,
  institute VARCHAR(200),
  resume_path VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
