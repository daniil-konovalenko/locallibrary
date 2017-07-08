var config = {};

config.mongoUser = 'user';
config.mongoPassword = 'password';
config.mongoHost = 'host';
config.mongoPort = 'port';
config.mongoDbName = 'database name';

config.mongoUri = 'mongodb://' + config.mongoUser + ':' + config.mongoPassword +
    '@' + config.mongoHost + ':' +  config.mongoPort  + '/' + config.mongoDbName;

module.exports = config;
