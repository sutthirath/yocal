const User = require("../models/User");

function showUsers(req, res) {
  User.find({}).exec(function(err, result) {
    if (!result) return res.status(404).send();
    let array = [];
    result.map(function(data) {
      array.push(data.foo);
    });
    res.status(200).send({ mydata: array });
  });
}

module.exports = {
  showUsers
};
