const MongoConnection = require('./db/mongoConnection')
const RedisConnection = require('./db/redisConnection')

// global connection objects
const mongoConn = new MongoConnection('mongodb://localhost:27017', 9080);
const redisConn = new RedisConnection('url', 9080);

module.exports = {
    mongoConn: mongoConn,
    redisConn: redisConn,
}