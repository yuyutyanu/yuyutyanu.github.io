var server = require('http');
var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var io = require('socket.io')(server)
/* GET home page. */

var connection = require('../mysql.js');
var list = [];
var text = 0;

router.get('/',function(req,res) {

  connection.query('SELECT `id`,`date` FROM `task`', function (error, results, fields) {
    for(text in results){
      list[text] = {
        'id':results[text].id,
        'date':results[text].date
      };
    }
  });
  connection.query('SELECT `data`,`data_id` FROM `after`', function (error, results, fields) {
    io.on('connection',function(socket){
      for(var text in results){
        socket.emit('old_text',{
          'aftertext':results[text].data,
          'id':results[text].data_id
        });
      }
    });
  });

  connection.query('SELECT `data`,`data_id` FROM `before`', function (error, results, fields) {
    io.on('connection',function(socket){
      for(var text in results){
        socket.emit('old_text',{
          'beforetext':results[text].data,
          'id':results[text].data_id
        });
      }
    });
  });
  connection.query('SELECT `data`,`data_id` FROM `problem`', function (error, results, fields) {
    io.on('connection',function(socket){
      for(var text in results){
        socket.emit('old_text',{
          'problemtext':results[text].data,
          'id':results[text].data_id
        });
      }
    });
  });
  connection.query('SELECT `data`,`data_id` FROM `answer`', function (error, results, fields) {
    io.on('connection',function(socket){
      for(var text in results){
        socket.emit('old_text',{
          'answertext':results[text].data,
          'id':results[text].data_id
        });
      }
    });
  });
  console.log(list);


  res.render('client.ejs');
});




module.exports = router;
