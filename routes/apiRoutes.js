var path = require("path");

// test data
// =============================================================
var tables = [
  {
    test: "test"
  },
  {
    test: "test"
  }
];

var waitlist = [];

module.exports = function(app) {
  app.get("/api/tables", function(req, res) {
    return res.json(tables);
    // connect to mysql, do query
  });

  app.post("/api/tables", function(req, res) {
    var newReso = req.body;

    console.log(newReso);

    if (tables.length < 5) {
      tables.push(newReso);
      console.log("new tables array: " + tables);
    } else {
      waitlist.push(newReso);
      console.log("new waitlist array: " + waitlist);
    }

    // inform user
    // res.json(newReso);
  });
};
