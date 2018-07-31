// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
  // The variables cols and vals are arrays.
  // create: function(cols, vals, cb) {
  //   orm.create("cats", cols, vals, function(res) {
  //     cb(res);
  //   });
  // },
  // update: function(objColVals, condition, cb) {
  //   orm.update("cats", objColVals, condition, function(res) {
  //     cb(res);
  //   });
  // },
  // delete: function(condition, cb) {
  //   orm.delete("cats", condition, function(res) {
  //     cb(res);
  //   });
  // }
};


module.exports = orm;