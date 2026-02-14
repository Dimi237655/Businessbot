const router = require("express").Router();

router.post("/checkout", (req, res) => {
  res.json({ status: "Stripe checkout" });
});

module.exports = router;
