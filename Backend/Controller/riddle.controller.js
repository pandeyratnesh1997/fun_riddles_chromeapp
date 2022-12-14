const authenticate = require("../Middleware/authentication");
const autherization = require("../Middleware/autherization");
const express = require("express");
const riddleModel = require("../Models/riddle.model")

const riddleRoute = express.Router();

riddleRoute.get("/admin", authenticate,autherization(["admin"]), async (req, res) => {
  // const riddle = req.query.riddle;
  // const name = new RegExp(riddle, "i");
  try {
    const item = await riddleModel.find();

    res.send(item);
  } catch (err) {
    res.status(500).send(err);
  }
});

// riddleRoute.get("/", authenticate , async (req, res) => {
//   const riddle = req.query.riddle;
//   const name = new RegExp(riddle, "i");
//   try {
//     const item = await riddleModel
//       .find({
//         $or: [{ riddle: name, creatorId: req.body.email }, { _id: req.query.id,creatorId: req.body.email }, {level : req.query.level}],
//       }).limit(+req.query.limit);
     

//     res.send(item);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });
riddleRoute.get("/", authenticate, async (req,res)=>{
  const page = req.query.page;
const per_page = 1;

  try {
    const item = await riddleModel.find().limit(per_page).skip(per_page*page)
    console.log("player", item);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
})

riddleRoute.post("/create", authenticate,autherization(["admin"]), async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log(req)
  const { riddle, answer, creator, options, level } = req.body;
  const item = new riddleModel({ riddle, answer, creator, options, level, creatorId: req.body.email });

  try {
    await item.save();
    return res.send(item);
  } catch (error) {
    return res.status(500).send(error);
  }
});

riddleRoute.patch("patch/:id", authenticate,autherization(["admin"]), async (req, res) => {
  try {
    await riddleModel.updateOne(
      { _id: req.params.id, creatorId: req.body.email },
      req.body
    );
    res.status(200).send("updated");
  } catch (error) {
    console.log(error);
    res.status(500).send("product not found");
  }
});

riddleRoute.delete("delete/:id",
  authenticate,
  autherization(["admin"]),
  async (req, res) => {
    try {
      console.log(req.params.id);
      const item = await riddleModel.deleteOne({
        _id: req.params.id,
        creatorId: req.body.email,
      });
      if (!item) res.send(404).send("No item found");
      res.status(200).send(post);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

module.exports = riddleRoute;
