'use strict';

module.exports = function(Customer) {
// Remote method
  // https://loopback.io/doc/en/lb3/Remote-methods.html
  // A remote method is a method of a model, exposed over a custom REST endpoint.
  // Use a remote method to perform operations not provided by LoopBack’s standard model REST API.

  // "options" is an special object that will is available because we enable it in
  // the "accepts" configuration
  Customer.getCurrentUserVehicles = function(options, cb) {
    // Get current "logged" user
    const token = options && options.accessToken;
    const userId = token.userId;

    Customer.findOne({where: {id: userId}}, function(error, customer) {
      // Customer has a new property using the HasManyThrough relation
      // https://loopback.io/doc/en/lb3/HasManyThrough-relations.html
      // console.log(customer);
      customer.vehicles.find(null,
        function(err, filteredVehicles) {
          console.log(filteredVehicles);

          cb(null, filteredVehicles);
        });
    });
  };

  Customer.remoteMethod('getCurrentUserVehicles', {
    accepts: [
      {arg: 'options', type: 'object', http: 'optionsFromRequest'},
    ],
    returns: {arg: 'response', type: 'array', root: true},
    http: {path: '/getCurrentUserVehicles', verb: 'get'},
  });
};
