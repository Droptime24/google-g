const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const suggestionsRoutes = require("./suggestions");

// Book routes
router.use("/books", bookRoutes);

// Suggestions Routes
router.use("/suggestions", suggestionsRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
