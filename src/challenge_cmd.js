'use strict';
import httpPost from './util/http';

module.exports.challenge = (event, context, cb) => {

  const token = '';
  const data=event.data;
  const challenger = `<@${data.user_name}>`;
  const opponent = `<${data.text}>`;

  console.log(data);

  if(data.token !== token){
    cb("Invalid Token",err);
  }

  const path = data.response_url.replace('https://hooks.slack.com','');
  const postData = JSON.stringify({'response_type': 'in_channel', 'text': `${challenger} has challenged ${opponent}!`});

  httpPost(path, postData)
  .then(() => cb(null, 'challenge issued!'))
  .catch((err) => cb(err,err));

};
