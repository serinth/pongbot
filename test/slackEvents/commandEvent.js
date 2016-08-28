export default () => (
  {
    data:{ // actual structure from Slack is wrapped in the data node because that's what we mapped it in API Gateway Body Mappings
      token: 'SAMPLETOKEN',
      team_id: 'ID',
      team_domain: 'pongbot',
      channel_id: 'C249MSRMF',
      channel_name: 'general',
      user_id: 'UxxxW',
      user_name: 'ttruong',
      command: '/challenge',
      text: '@gwittchen',
      response_url: 'https://hooks.slack.com/commands/1234/5678'
    }
  }
);
