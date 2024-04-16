module.exports = class Account {
    #balance
    constructor(balance , deposit , loan , transfers , user ) {
        this.#balance = balance
        this.deposit = deposit
        this.loan = loan
        this.transfers = transfers
        this.user = user
    }

    newDeposit(deposit) {
        const currBalance = deposit + this.#balance

    }

    newLoan(loan) {
        const currLoan = loan.forEach(value => {
            value += this.balance
        })
    }

    
}