var Slack = require('node-slack-upload');
import fs from 'fs';
import path from 'path';
var slack = new Slack("xoxp-72326560519-72329516373-79858601603-de6c25fdab");

export default function () {
  slack.uploadFile({
    file: fs.createReadStream(path.join(__dirname, '.', 'end_round.jpg')),
    title: 'README',
    initialComment: 'my comment',
    channels: 'general'
  }, function(err) {
    if (err) {
      console.error(err);
    }
    else {
      console.log('done');
    }
  });
}
