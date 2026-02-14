
//practice with objects 

const user = {
  name: "Saad",
  age: 18,
  balance: 1000,

  greet() {
    console.log(`Yo, I'm ${this.name} and I'm ${this.age} yeers old.`);
  },

  deposit(amount) {
    this.balance += amount;
    console.log(`Depsoited ${amount}. New balnce: ${this.balance}`);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Not enugh funds.");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrew ${amount}. Remaning balnce: ${this.balance}`);
  }
};


user.greet();
user.deposit(500);
user.withdraw(200);
