'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export fantasygoldcore-lib', function() {
    var fantasygoldcore = require('../');
    should.exist(fantasygoldcore.lib);
    should.exist(fantasygoldcore.lib.Transaction);
    should.exist(fantasygoldcore.lib.Block);
  });
});
