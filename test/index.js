'use strict';

var assert = require('assert');
var expect = require('chai').expect;
var myDiscordBot = require('../lib');
//var app       = require('./clapp-objects');
//var GuildObject = require('../lib/modules/objects/GuildObject');
//var PrivateCommandHelpers = require('../lib/modules/private-command-helpers');
var StringBuilder = require('../custom_modules/StringBuilder');

describe('stringBuilder', function () {
  var stringBuilder = new StringBuilder();
  it('should equal test', function () {
    var test = stringBuilder.build("this", "is", "a", "test");
    assert.equal(test, "this is a test");
  });
});
