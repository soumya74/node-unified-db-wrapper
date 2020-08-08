const Connection = require('./connection')
const Logger = require('./../logger/log');

class MongoConnection extends Connection {
    constructor(port, url) {
        super(port, url)
        this.dbConn = null;
        this.logger = new Logger("MongoConnection");
    }

    connect() {
        this.logger.logInfo(this.url)
        const connPromise = new Promise( (resolve, reject) => {
            MongoClient.connect(this.url, { useUnifiedTopology: true }, (err, conn) => {
                if (err !== null) {
                    this.logger.logError(err);
                    reject(err);
                } else {
                    this.logger.logInfo("successfully connected to mongodb");
                    this.dbConn = conn
                    resolve();
                }
            })
        })
        return connPromise;
    }

    findOne(dbName, collection, keyName, val) {
        const coll = this.dbConn.db(dbName).collection(collection);

        coll.find({'name': val}).toArray(function(err, docs) {
          console.log("Found the following records");
          console.log(docs);
        });
    }

    close() {
        this.logger.logInfo("inside close");
        this.dbConn.close();
    }
}

module.exports = MongoConnection