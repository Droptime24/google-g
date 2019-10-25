const router = require("express").Router();
const suggestionsController = require("../../controllers/suggestionsController");

// Matches with "/api/google"
router
  .route("/")
  .get(suggestionsController.findAll);

module.exports = router;
