module.exports = () => {
  const mongoose = require("mongoose");
  const db = mongoose.connection;
  const dbUrl = process.env.DB_URL;

  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  db.on("error", console.error.bind(console, "connection error:"));

  db.once("open", () => console.log("The database has connected"));
};
