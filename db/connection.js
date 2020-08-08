const MongoClient = require('mongodb')
const Logger = require('./../logger/log');

class Connection {
    constructor(url, port) {
        this.port = port;
        this.url = url;
        this.logger = new Logger("connectionJs");
    }

    connect() {
        this.logger.logInfo("connect parent");
    }
}

module.exports = Connection