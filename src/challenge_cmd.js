'use strict';
import httpPost from './util/http';
import config from '../config.json';

module.exports.challenge = (event, context, cb) => {

  const token = config.challengeToken;
  const data = event.data;
  const challenger = `<@${data.user_name}>`;
  const opponent = `<${data.text}>`;

  console.log(data);

  if(data.token !== token){
    cb("Invalid Token");
  }

  const path = data.response_url.replace('https://hooks.slack.com','');
  const postData = {response_type: 'in_channel', text: `${challenger} has challenged ${opponent}!`};

  httpPost(path, postData)
  .then((data) => cb(null, 'challenge issued!'))
  .catch((err) => cb(err,err));

};
