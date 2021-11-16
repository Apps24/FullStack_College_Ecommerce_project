const { verifyToken, veifyandAuth, veifyandAdmin } = require("./verifyToken");
const CryptoJS = require("crypto-js");
const router = require("express").Router();
const Order = require("../models/Order");

// create

router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // update user
router.put("/:id", veifyandAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Delete

router.delete("/:id", veifyandAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    res.status(200).json("Order has been deleted.....");
  } catch (err) {
    res.status(500).json(err);
  }
});

// // get user order

router.get("/find/:userId", veifyandAuth, async (req, res) => {
  try {
    const Orders = await Order.findOne({ userId: req.params.userId });
    res.status(200).json(Orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // get all

router.get("/", veifyandAdmin, async (req, res) => {
  try {
    const Orders = await Order.find();
    res.status(200).json(Orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get monthly income

router.get("/income", veifyandAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: prevMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
