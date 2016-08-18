'use strict';
var https = require('https');

module.exports.challenge = (event, context, cb) => {

  var token = '';
  var data=event.data;
  var challenger = `<@${data.user_name}>`;
  var opponent = `<${data.text}>`;

  if(data.token !== token){
    cb("Invalid Token",err);
  }

  var path = data.response_url.replace('https://hooks.slack.com','');
  var postData = JSON.stringify({"response_type": "in_channel", "text": `${challenger} has challenged ${opponent}!`});

  var options = {
    host: 'hooks.slack.com',
    method: 'POST',
    path: path,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': postData.length
    }
  };

  var req = https.request(options, function (res) {
    var result = '';
    res.on('data', function (chunk) {
      result += chunk;
    });
    res.on('end', function () {
      cb(null,"challenge issued!");
    });
    res.on('error', function (err) {
      cb(err,err);
    })
  });

  req.on('error', function (err) {
    cb(err,err);
  });

  req.write(postData);
  req.end();


};
