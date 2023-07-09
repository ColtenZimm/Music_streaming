const router = require("express").Router();
const Sqrl = require("squirrelly")

router.get("/", async (req, res) => {
    try {
      res.render("homepage", {
        loggedIn: req.session.loggedIn,
        userId: req.session.userId,
      });
    } catch (err) {
        console.error(err);
    }
  });
  
module.exports = router;