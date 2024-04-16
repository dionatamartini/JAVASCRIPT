module.exports = class Transfer {
    constructor(userSent , userReceived , value) {
        this.userSent = userSent
        this.userReceived = userReceived
        this.value = value
        this.createAtdate = new Date()
    }
}