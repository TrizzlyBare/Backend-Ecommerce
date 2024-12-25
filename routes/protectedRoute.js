const express = require("express");
const router = express.Router();
const verifytoken = require("../middleware/auth");

router.get("/", verifytoken, (req, res) => {
  res.status(200).json({ message: "Protected route accessed" });
});

module.exports = router;
