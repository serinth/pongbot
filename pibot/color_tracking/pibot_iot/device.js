const deviceModule = require('aws-iot-device-sdk').device;
const upload = require('./slack').default;

const exec = require('child_process').exec;

export default function start(args) {
  const device = deviceModule(args);
  //upload();
  device
      .on('connect', function() {
        /*
	device.publish('$aws/things/pibot/shadow/update', JSON.stringify({
          "state": {
            "reported": {
              "cameraOn": false
            }
          }
        }));
	*/
        device.subscribe('$aws/things/pibot/shadow/update/accepted');
        console.log('connect');
      });
  device
      .on('close', function() {
        console.log('close');
      });
  device
      .on('reconnect', function() {
        console.log('reconnect');
      });
  device
      .on('offline', function() {
        console.log('offline');
      });
  device
      .on('error', function(error) {
        console.log('error', error);
      });
  device
      .on('message', function(topic, payloadBuffer) {

        const payload = JSON.parse(payloadBuffer.toString());
        console.log('message', topic, typeof payload, payload.toString());

	exec('python /home/pi/pongbot/pibot/color_tracking/track.py',(err, stdout, stderr) => {
	  if(err){
	    console.log(err);
	  }
	  else {
	    upload();
	 }
		
	});
	

/*
        device.publish('$aws/things/pibot/shadow/update', JSON.stringify({
          "state": {
            "reported": {
              "cameraOn": payload.state.desired.cameraOn
            }
          }
        }));
*/
      });

}

