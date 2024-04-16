module.exports = class Deposit {
    #date = new Date();
  
    constructor(value) {
      this.value = value;
      this.date = new Date();
    }
  };