if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const exp = require("express");
const app = exp();
const cors = require("cors");
const runDB = require("./connectDB");
const router = require("./routes/apiRoutes");

runDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  res.setHeader("Origin", "http://localhost:4200");

  next();
});

// app.use(function (req, res, next) {
//   res.set({
//     "Access-Control-Allow-Headers":
//       "Origin, X-Requested-With, Content-Type, Accept",
//     "Access-Control-Allow-Origin": "http://localhost:4200/",
//     "Access-Control-Allow-Methods": "GET, PATCH, PUT, POST, DELETE, OPTIONS",
//   });
//   next();
// });

app.use(exp.urlencoded({ extended: true }));
app.use(exp.json());
app.use(exp.static("../../dist/nodeAngular"));
app.use(cors());

app.use("/api", router);

app.listen(3000, () => console.log("Serve on port: 3000"));

app.use((req, res, next) => {
  next(createError(404));
});

app.get("/", (req, res) => {
  res.send("invalid endpoint");
});

app.get("*", (req, res) => {
  res.sendFile("../../dist/nodeAngular/index.html");
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
