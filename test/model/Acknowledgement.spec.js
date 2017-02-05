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
    instance = new ArtikCloud.Acknowledgement();
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

  describe('Acknowledgement', function() {
    it('should create an instance of Acknowledgement', function() {
      // uncomment below and update the code to test Acknowledgement
      //var instane = new ArtikCloud.Acknowledgement();
      //expect(instance).to.be.a(ArtikCloud.Acknowledgement);
    });

    it('should have the property mid (base name: "mid")', function() {
      // uncomment below and update the code to test the property mid
      //var instane = new ArtikCloud.Acknowledgement();
      //expect(instance).to.be();
    });

    it('should have the property cid (base name: "cid")', function() {
      // uncomment below and update the code to test the property cid
      //var instane = new ArtikCloud.Acknowledgement();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new ArtikCloud.Acknowledgement();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new ArtikCloud.Acknowledgement();
      //expect(instance).to.be();
    });

  });

}));
