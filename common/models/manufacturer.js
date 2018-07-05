'use strict';

module.exports = function(Manufacturer) {
  // Validate uniqueness. Ensure the value of the property is unique for the model.
  // Not available for all connectors. Currently supported with these connectors:
  //
  // - In Memory
  // - Oracle
  // - MongoDB

  Manufacturer.validatesUniquenessOf('name',
    {message: 'Manufacturer\'s name is not unique'});
};
