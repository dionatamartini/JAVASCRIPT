class User {
    constructor(fullname, email, password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    login(email, password) {
        if (this.email === email && this.password === password) {
            console.log("Entrou!");
        } else {
            console.log("Dados incorretos!");
        }
    }
}

const loginUp = new User("Dionata", "dionatamartinii@hotmail.com", "Dc105070*");

loginUp.login("dionatamartinii@hotmail.com" , "Dc105070*")
loginUp.login("martini@hotmail.com", "Dc105070*");


//----------------------------------------------------------------------------------------------------------------------------------------------------------


class Product {
    constructor (name, description, price) {
      this.name = name
      this.description = description
      this.price = price
      this.inStock = 0
    }
  
    addToStock(quantity) {
      this.inStock += quantity
    }
  
    calculateDiscount(discount) {
      return this.price * ((100 - discount) / 100)
    }
  }
  
  const watch = new Product("Relógio de Pulso", "...", 80)
  watch.addToStock(99)
  console.log(watch)
  console.log(watch.calculateDiscount(15))
  console.log(watch.calculateDiscount(10))