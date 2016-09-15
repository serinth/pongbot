import { expect } from 'chai';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import proxyquire from 'proxyquire';
import commandEventStub from '../test/slackEvents/pbCommandEvent';

chai.use(sinonChai);

const contextStub = sinon.stub();
const callbackStub = sinon.stub();
const httpSpy = sinon.spy();
const configStub = {
    token: commandEventStub().data.token
};

const pb_cmd = proxyquire('./pb_cmd', {
  '../config.json': configStub,
  './util/http': { default: (path, data) => { httpSpy(path, data); return Promise.resolve('value'); } }
});

describe('pbboot', () => {
  it('should update the device shadow', () => {
    pb_cmd.pb(commandEventStub(), contextStub, callbackStub);
    expect(httpSpy).to.have.been.calledWith('/commands/1234/5678',{response_type: 'in_channel', text: 'Updates successful'});
  });
});
