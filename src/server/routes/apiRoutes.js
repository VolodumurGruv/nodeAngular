const { Router } = require("express");
const router = Router();
const cors = require("cors");
const User = require("../data/user");
const { readBufferWithDetectedEncoding } = require("tslint/lib/utils");

router.get("/", async (req, res) => {
  const allUsers = await User.find((err, users) => {
    if (err) throw err;
    return users;
  });

  res.json(allUsers);
});

router
  .route("/create")
  .get(async (req, res) => {
    const user = req.body;
    console.log(user);
    res.send("It works");
  })
  .post(async (req, res) => {
    const user = req.body;
    const users = new User(user);

    try {
      await users.save();
      res.redirect("/courses");
    } catch (e) {
      console.log(e);
    }
  });

router.route("/courses").get((req, res) => {
  res.send("Courses");
});

module.exports = router;
