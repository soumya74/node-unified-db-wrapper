const express = require('express')
const logger = require('./logger/log')
const {mongoConn, redisConn} = require('./common')
const MongoRouter = require('./routes/mongoRoutes')
const RedisRouter = require('./routes/redisRoutes')

const app = express();

// logging obj
const loggerObj = new logger("indexJs")

// defining middlewares
app.use('/api/mongo', MongoRouter)
app.use('/api/redis', RedisRouter)

// establishing connections
mongoConn.connect().then( data => {
    return redisConn.connect();
}).then( data => {
    loggerObj.logInfo("Server starting at 9000");
    app.listen(9000);
}).catch( err => {
    loggerObj.logError(err);
    loggerObj.logError("Server Start FAILED");
})

