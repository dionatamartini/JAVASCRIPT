const User = require("./User")


module.exports = class Transfers extends User {
    #date = new Date()
    constructor(userSent , userReceived , value) {
        super(userSent , userReceived)

        this.value = value
        this.date = new Date()
    }
}