module.exports = class User {
    #password
    constructor (name, email, password){
        this.name = name
        this.email = email
        this.#password = password
    }
    
    get showUser() {
        return this.name
    }

}