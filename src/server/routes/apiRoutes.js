const { Router } = require("express");
const router = Router();
const Category = require("../data/user");

router.get("/", async (req, res) => {
  const allProducts = await Category.find((err, product) => {
    if (err) throw err;
    return product;
  });

  res.json(allProducts);
});

router
  .route("/create")
  .get(async (req, res) => {
    // const product = req.body;
    // console.log(product);
    res.send("It works");
  })
  .post(async (req, res) => {
    const product = req.body;
    console.log(product);
    const products = new Category(product);
    console.log(products);
    try {
      await products.save();
      res.status(200).send({ status: "Ok" });
    } catch (e) {
      console.log(e, "node error");
    }
  });

router.route("/courses").get((req, res) => {
  res.send("Courses");
});

module.exports = router;
