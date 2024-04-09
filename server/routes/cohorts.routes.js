const router = require("express").Router();
const Cohort = require("./../models/Cohort.model");

/**
 * ! All of the routes are prefixed with /api/cohorts
 */
router.get("/", (req, res, next) => {
  Cohort.find({})
    .then((resultDocuments) => {
      console.log(resultDocuments);
      res.json(resultDocuments);
    })
    .catch(console.log);
});

module.exports = router;
