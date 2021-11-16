const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")
const cors = require("cors")
require('dotenv').config()


// env config

// Initialize express app
const app = express();

// intialize mongo db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connected Sucessfully"))
  .catch((err) => console.log(err));

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout", stripeRoute)


// port listen
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running!");
});
