'use strict';

const server = require('../server');

// Be sure you use the DATASOURCE for authentication
const dataSource = server.dataSources.mysql_db_auth;
const lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];

// Taken from: https://loopback.io/doc/en/lb3/Creating-a-database-schema-from-models.html
dataSource.automigrate(lbTables, function(error) {

  if (error) throw error;
  console.log('Loopback tables [' + lbTables + '] created in ',
    dataSource.adapter.name);
  dataSource.disconnect();
});
