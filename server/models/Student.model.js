const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  linkedinUrl: String,
  languages: [String],
  program: String,
  background: String,
  image: String,
  cohort: Number,
  projects: Array,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
