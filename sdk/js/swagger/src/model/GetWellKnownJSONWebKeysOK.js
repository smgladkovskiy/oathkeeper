/**
 * ORY Oathkeeper
 * ORY Oathkeeper is a reverse proxy that checks the HTTP Authorization for validity against a set of rules. This service uses Hydra to validate access tokens and policies.
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SwaggerJSONWebKeySet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SwaggerJSONWebKeySet'));
  } else {
    // Browser globals (root is window)
    if (!root.OryOathkeeper) {
      root.OryOathkeeper = {};
    }
    root.OryOathkeeper.GetWellKnownJSONWebKeysOK = factory(root.OryOathkeeper.ApiClient, root.OryOathkeeper.SwaggerJSONWebKeySet);
  }
}(this, function(ApiClient, SwaggerJSONWebKeySet) {
  'use strict';




  /**
   * The GetWellKnownJSONWebKeysOK model module.
   * @module model/GetWellKnownJSONWebKeysOK
   * @version Latest
   */

  /**
   * Constructs a new <code>GetWellKnownJSONWebKeysOK</code>.
   * jsonWebKeySet
   * @alias module:model/GetWellKnownJSONWebKeysOK
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>GetWellKnownJSONWebKeysOK</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetWellKnownJSONWebKeysOK} obj Optional instance to populate.
   * @return {module:model/GetWellKnownJSONWebKeysOK} The populated <code>GetWellKnownJSONWebKeysOK</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Payload')) {
        obj['Payload'] = SwaggerJSONWebKeySet.constructFromObject(data['Payload']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SwaggerJSONWebKeySet} Payload
   */
  exports.prototype['Payload'] = undefined;



  return exports;
}));


