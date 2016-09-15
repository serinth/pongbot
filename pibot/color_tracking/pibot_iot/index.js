require('babel-core/register');

const startDevice = require('./device');

startDevice.default({
  "host": "a21osxcu6zcsam.iot.us-east-1.amazonaws.com",
  "port": 8883,
  "clientId": "pibot",
  "thingName": "pibot",
  "caCert": "root-CA.crt",
  "clientCert": "dc3312964a-certificate.pem.crt",
  "privateKey": "dc3312964a-private.pem.key",
});
