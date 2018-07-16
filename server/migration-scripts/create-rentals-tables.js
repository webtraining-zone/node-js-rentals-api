'use strict';

const server = require('../server');

// Be sure you use the DATASOURCE for authentication
const dataSource = server.dataSources.mysql_db_auth;
const lbTables = ['Rental'];

// Taken from: https://loopback.io/doc/en/lb3/Creating-a-database-schema-from-models.html
dataSource.automigrate(lbTables, function(error) {
  if (error) throw error;

  console.log('Rental table [' + lbTables + '] created in ',
    dataSource.adapter.name);
  dataSource.disconnect();
});
