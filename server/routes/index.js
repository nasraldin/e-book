const express = require("express");
const booksData = require("../books.json");
const CONSTANTS = require("../constants");
const findElement = require("../findElement");

const router = express.Router();

// LIST ENDPOINTS
router.get(CONSTANTS.ENDPOINT.LIST, function (req, res) {
  res.json(booksData.books);
});

// Detail Endpoint
router.get(CONSTANTS.ENDPOINT.DETAILS + "/:_id", (req, res) => {
  const { _id } = req.params;
  var index = findElement(booksData.books, "_id", Number(_id));
  // console.log(index);
  if (index) {
    res.json(index);
  } else {
    res.status(404).send("Could not find item with id:" + _id);
  }
});

module.exports = router;
