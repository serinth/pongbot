import rp from 'request-promise';

export default (path, postData) => {

  const uri = `https://hooks.slack.com${path}`;
  const options = {
      method: 'POST',
      uri: uri,
      body: postData,
      json: true
  };

  return rp(options);

}
