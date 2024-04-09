const router = require("express").Router();
const Student = require("./../models/Student.model");

router.get("/", (req, res, next) => {
  Student.find({})
    .then((resultDocuments) => {
      console.log(resultDocuments);
      res.json(resultDocuments);
    })
    .catch(console.log);
});

module.exports = router;
