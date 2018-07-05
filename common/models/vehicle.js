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
};
