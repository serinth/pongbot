import https from 'https';

module.exports.httpPost = (path, postData) => {
  const options = {
    host: 'hooks.slack.com',
    method: 'POST',
    path: path,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': postData.length
    }
  };

  const promise = new Promise((resolve,error) => {
    const req = https.request(options, (res) => {
      res.on('error', (err) => reject(err));
      res.on('end', () => resolve());
      req.on('error', (err) => reject(err));
      req.write(postData);
      req.end();
    });
  });

  return promise;
}
