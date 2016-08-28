import { expect } from 'chai';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import proxyquire from 'proxyquire';
import commandEventStub from '../test/slackEvents/commandEvent';

chai.use(sinonChai);

const contextStub = sinon.stub();
const callbackStub = sinon.stub();
const httpSpy = sinon.spy();
const configStub = {
    token: commandEventStub().data.token
};

const challenge_cmd = proxyquire('./challenge_cmd', {
  '../config.json': configStub,
  './util/http': { default: (path, data) => { httpSpy(path, data); return Promise.resolve('value'); } }
});

describe('challenge', () => {
  it('should httpPost to Slack command response url /commands/1234/5678 with in channel response: <@ttruong> has challenged <@gwittchen>!', () => {
    challenge_cmd.challenge(commandEventStub(), contextStub, callbackStub);
    expect(httpSpy).to.have.been.calledWith('/commands/1234/5678',{response_type: 'in_channel', text: '<@ttruong> has challenged <@gwittchen>!'});
  });
});
