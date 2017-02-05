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
    instance = new ArtikCloud.NormalizedAction();
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

  describe('NormalizedAction', function() {
    it('should create an instance of NormalizedAction', function() {
      // uncomment below and update the code to test NormalizedAction
      //var instane = new ArtikCloud.NormalizedAction();
      //expect(instance).to.be.a(ArtikCloud.NormalizedAction);
    });

    it('should have the property cts (base name: "cts")', function() {
      // uncomment below and update the code to test the property cts
      //var instane = new ArtikCloud.NormalizedAction();
      //expect(instance).to.be();
    });

    it('should have the property ts (base name: "ts")', function() {
      // uncomment below and update the code to test the property ts
      //var instane = new ArtikCloud.NormalizedAction();
      //expect(instance).to.be();
    });

    it('should have the property mid (base name: "mid")', function() {
      // uncomment below and update the code to test the property mid
      //var instane = new ArtikCloud.NormalizedAction();
      //expect(instance).to.be();
    });

    it('should have the property sdid (base name: "sdid")', function() {
      // uncomment below and update the code to test the property sdid
      //var instane = new ArtikCloud.NormalizedAction();
      //expect(instance).to.be();
    });

    it('should have the property ddid (base name: "ddid")', function() {
      // uncomment below and update the code to test the property ddid
      //var instane = new ArtikCloud.NormalizedAction();
      //expect(instance).to.be();
    });

    it('should have the property ddtid (base name: "ddtid")', function() {
      // uncomment below and update the code to test the property ddtid
      //var instane = new ArtikCloud.NormalizedAction();
      //expect(instance).to.be();
    });

    it('should have the property uid (base name: "uid")', function() {
      // uncomment below and update the code to test the property uid
      //var instane = new ArtikCloud.NormalizedAction();
      //expect(instance).to.be();
    });

    it('should have the property mv (base name: "mv")', function() {
      // uncomment below and update the code to test the property mv
      //var instane = new ArtikCloud.NormalizedAction();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instane = new ArtikCloud.NormalizedAction();
      //expect(instance).to.be();
    });

  });

}));
