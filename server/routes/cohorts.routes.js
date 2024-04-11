const router = require("express").Router();
const Cohort = require("./../models/Cohort.model");
/**
 * ! All of the routes are prefixed with /api/cohorts
 */

/**
 * What's in a Request?
 * Request body: hold some informations
 * Request params: a part of the url which can change
 * Request query: search params or querystring
 */
router.get("/", async (req, res, next) => {
  try {
    console.log(req.query);
    let search = {};

    if (req.query.campus) {
      search.campus = req.query.campus;
    }
    if (req.query.program) {
      search.program = req.query.program;
    }

    const allCohorts = await Cohort.find(search);
    res.json(allCohorts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const cohortId = req.params.id;

    const allCohorts = await Cohort.findById(cohortId);
    res.json(allCohorts);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  Cohort.create({
    cohortSlug: req.body.cohortSlug,
    cohortName: req.body.cohortName,
    program: req.body.program,
    format: req.body.format,
    campus: req.body.campus,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    inProgress: req.body.inProgress,
    programManager: req.body.programManager,
    leadTeacher: req.body.leadTeacher,
    totalHours: req.body.totalHours,
  })
    .then((createdCohort) => res.status(200).json(createdCohort))
    .catch((err) => {
      next(err);
    });
});

router.put("/:id", (req, res, next) => {
  Cohort.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedCohort) => {
      res.status(200).json(updatedCohort);
    })
    .catch((err) => next(err));
});

router.delete("/:id", (req, res, next) => {
  Cohort.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
