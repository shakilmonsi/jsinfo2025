class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    get balance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) this.#balance -= amount;
    }
}

const myAccount = new BankAccount(1500);
console.log(myAccount.balance);  // 1500
myAccount.deposit(500);
myAccount.withdraw(700);
console.log(myAccount.balance);  // 1300
