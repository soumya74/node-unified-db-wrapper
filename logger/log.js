const chalk = require('chalk')

class Logger {
    #location = ""; // private member
    constructor(location) {
        this.location = location;
    }

    logInfo(msg) {
        console.log(chalk.blue("[" +this.location + "] ") + chalk.green(msg))
    }

    logError(msg) {
        console.log(chalk.blue("[" + this.location + "] ") + chalk.red(msg))
    }

    logWarn(msg) {
        console.log(chalk.blue("[" + this.location + "] ") + chalk.yellow(msg))
    }
}

module.exports = Logger