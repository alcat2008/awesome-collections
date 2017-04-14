/**
 * @file index-test
 * @author anima
 */

const expect = require('chai').expect;

describe('index test demo', () => {
  it('sync', () => {
    expect(10).to.equal(10);
  });

  it('async', (done) => {
    setTimeout(() => {
      expect(1).to.be.a('number');
      done();
    }, 1000);
  });

});
