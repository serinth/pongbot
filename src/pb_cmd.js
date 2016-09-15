import awsIot from 'aws-iot-device-sdk';
import httpPost from './util/http';
import config from '../config.json';


module.exports.pb = (event, context, cb) => {

  const token = config.pbToken;
  const data = event.data;
  //define shadow device to control
  const thingShadows = awsIot.thingShadow(config.shadow);


  thingShadows.register('pibot');
  thingShadows.update('pibot', JSON.stringify({
    "state": {
      "desired": {
        "cameraOn": true
      }
    }
  }) );

  console.log(data);

  if(data.token !== token){
    cb("Invalid Token");
  }

  const path = data.response_url.replace('https://hooks.slack.com','');
  const postData = {response_type: 'in_channel', text: 'Updates successful'};
  httpPost(path, postData)
          .then((data) => cb(null, 'challenge issued!'))
          .catch((err) => cb(err,err));

};