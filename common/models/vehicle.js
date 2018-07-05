'use strict';

module.exports = function(Vehicle) {
  // Customize model behaviour here!
  const MIN_LENGHT_NAME = 2;
  Vehicle.validatesLengthOf('model', {
    min: MIN_LENGHT_NAME,
    message: {
      min: `Name of vehicle should be at leats ${MIN_LENGHT_NAME} long.`,
    },
  });

  Vehicle.validateAsync('manufacturerId', validateAsyncForManufacturerId,
    {message: 'Manufacturer doesn\'t exist'});

  // This function verifies the manufacturerId passed in the request exists
  function validateAsyncForManufacturerId(error, next) {
    // Get the model
    // https://loopback.io/doc/en/lb3/Working-with-LoopBack-objects.html
    const Manufacturer = Vehicle.app.models.Manufacturer;
    Manufacturer.exists(this.manufacturerId,
      function(errorExists, instanceExists) {
        if (errorExists || !instanceExists) {
          error();
        }

        // Everything is fine, proceed
        next();
      });
  }

  // Other example of async validator
  // https://strongloop.com/strongblog/examples-of-validations-for-loopback-models/

  // MySQL Connector
  // https://loopback.io/doc/en/lb3/Connecting-to-MySQL.html

  // Model definition
  // https://loopback.io/doc/en/lb3/Model-definition-JSON-file.html
};
