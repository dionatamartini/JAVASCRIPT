class Book {
    constructor(title) {
        this.title = title
        this.published = false
}
    publish(){
        this.published = true
    }
}

const eragon = new Book ("eragon")

eragon.publish()
console.log(eragon)