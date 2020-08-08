const Connection = require('./connection')
const Logger = require('./../logger/log');

class RedisConnection extends Connection {
    constructor(port, url) {
        super(port, url)
        this.logger = new Logger("RedisConnection");
    }

    connect() {
        this.logger.logInfo(this.url)
        this.logger.logInfo("successfully connected to redis");
        const connPromise = new Promise( (resolve, reject) => {
            resolve();
        })
        return connPromise
    }
}

module.exports = RedisConnection