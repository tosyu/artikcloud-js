/**
 * ARTIK Cloud API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ArtikCloud);
  }
}(this, function(expect, ArtikCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ArtikCloud.ActionOut();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ActionOut', function() {
    it('should create an instance of ActionOut', function() {
      // uncomment below and update the code to test ActionOut
      //var instane = new ArtikCloud.ActionOut();
      //expect(instance).to.be.a(ArtikCloud.ActionOut);
    });

    it('should have the property mid (base name: "mid")', function() {
      // uncomment below and update the code to test the property mid
      //var instane = new ArtikCloud.ActionOut();
      //expect(instance).to.be();
    });

    it('should have the property uid (base name: "uid")', function() {
      // uncomment below and update the code to test the property uid
      //var instane = new ArtikCloud.ActionOut();
      //expect(instance).to.be();
    });

    it('should have the property sdtid (base name: "sdtid")', function() {
      // uncomment below and update the code to test the property sdtid
      //var instane = new ArtikCloud.ActionOut();
      //expect(instance).to.be();
    });

    it('should have the property cts (base name: "cts")', function() {
      // uncomment below and update the code to test the property cts
      //var instane = new ArtikCloud.ActionOut();
      //expect(instance).to.be();
    });

    it('should have the property mv (base name: "mv")', function() {
      // uncomment below and update the code to test the property mv
      //var instane = new ArtikCloud.ActionOut();
      //expect(instance).to.be();
    });

  });

}));
