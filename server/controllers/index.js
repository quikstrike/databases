var models = require('../models');
var bluebird = require('bluebird');
var mysql = require('mysql');
var db = require('../db/');



module.exports = {
  messages: {
    get: function (req, res) {
      var response = {};
      connection.query('Select * FROM messages',function(err,rows,fields){
        console.log(rows)
        response['results'] = rows
        res.json(response)
        //res.end()
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body)
      var generatedQuery = "INSERT INTO messages (user,room,message) VALUES ("+connection.escape(req.body.username)+","+connection.escape(req.body.roomname)+","+connection.escape(req.body.message)+")";
      console.log(generatedQuery)
      connection.query(generatedQuery);
      // connection.end();
      res.status(201).end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      var response = {};
            connection.query('Select * FROM messages',function(err,rows,fields){
              console.log(rows)
              response['results'] = rows
              res.json(response)
              //res.end()
             });
    },
    post: function (req, res) {
      var generatedQuery = "INSERT INTO users (username) VALUES ("+connection.escape(req.body.username)+")";
      connection.query(generatedQuery);
      // connection.end();
      res.status(201).end();
    }
  }
};
