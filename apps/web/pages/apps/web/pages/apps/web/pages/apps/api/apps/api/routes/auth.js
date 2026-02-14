const router = require("express").Router();

router.get("/facebook", (req, res) => {
  res.send("Facebook OAuth here");
});

module.exports = router;
