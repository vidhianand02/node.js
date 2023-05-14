const express = require("express");
const router = express.Router();

const News = require("../models/News");

router.post("/save", (req, res) => {
    const newNews = new News({
      headline: req.body.subject,
      description: req.body.description,
      department: req.body.department,
      imageUrl: req.body.imageUrl,
    });
    newNews
      .save()
      .then((news) => res.json(news))
      .catch((err) => res.json(err));
  });
  
 
  router.get("/get-all", (req, res) => {
    News.find()
      .then((news) => res.send(news))
      .catch((err) => res.status(404).json({ noNewsFound: "No News found" }));
  });
  

  router.get("/get/:id", (req, res) => {
    News.findById(req.params.id)
      .then((news) => res.json(news))
      .catch((err) =>
        res.status(404).json({ noNewsFound: "No News found with that ID" })
      );
  });
  
 
  router.post("/get-by-dept", (req, res) => {
    var dept = req.body.department;
    News.find({ department: dept })
      .then((news) => res.json(news))
      .catch((err) => res.status(404).json({ noNewsFound: "No News found" }));
  });
  

  router.post("/edit/:id", (req, res) => {
    var newData = {
      headline: req.body.subject,
      description: req.body.description,
      department: req.body.department,
      imageUrl: req.body.imageUrl,
    };
    News.findOneAndUpdate(
      { _id: req.params.id },
      { $set: newData },
      { new: true }
    )
      .then((news) => res.json(news))
      .catch((err) => console.log(err));
  });
  
 
  router.delete("/delete/:id", (req, res) => {
    News.findById(req.params.id)
      .then((news) => {
        news.remove().then(() => res.json({ success: true }));
      })
      .catch((err) => res.status(404).json({ success: false }));
  });
  

  router.delete("/delete-all", (req, res) => {
    News.deleteMany()
      .then((data) => res.send({ success: true }))
      .catch((err) => res.status(404).json({ success: false }));
  });
  
  module.exports = router;