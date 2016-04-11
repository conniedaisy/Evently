var Q = require('q');
var jwt = require('jwt-simple');
var Event = require('./../events/eventmodel');
var User = require('./usermodel');
var path = require('path');

var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);

module.exports = {

  getUserInfo: function(req, res, next) {
    var username = req.body.username;

    findUser({username: username})
    .then(function(user) {
      res.json(user);
    })
    .catch(function(err) {
      console.log(error);
    });
  }

};