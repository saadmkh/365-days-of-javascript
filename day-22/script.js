const VendingMachine = {
  balance: 0,
  selectedItem: null,
  items: {
    coke: 120,
    chips: 80,
    water: 50
  },

  insertMoney(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log("Money inserted:", this.balance);
    }
  },

  selectItem(itemName) {
    if (!this.items[itemName]) {
      console.log("Item not available");
      return;
    }

    this.selectedItem = itemName;
    console.log("Selected:", itemName);
  },

  buy() {
    if (!this.selectedItem) {
      console.log("No item selected");
      return;
    }

    let price = this.items[this.selectedItem];

    if (this.balance >= price) {
      this.balance -= price;
      console.log("Dispensed:", this.selectedItem);
      this.selectedItem = null;
    } else {
      console.log("Not enough balance");
    }
  },

  refund() {
    console.log("Refunded:", this.balance);
    this.balance = 0;
  },

  status() {
    console.log({
      balance: this.balance,
      selectedItem: this.selectedItem
    });
  }
};

VendingMachine.insertMoney(100);
VendingMachine.selectItem("chips");
VendingMachine.buy();
VendingMachine.status();
VendingMachine.refund();
