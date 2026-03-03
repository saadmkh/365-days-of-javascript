let correctPin = "1234";
let balance = 5000;
let isAuthenticated = false;
let attempts = 0;

function enterPin(pin) {
  if (attempts >= 3) {
    console.log("Card blocked");
    return;
  }

  if (pin === correctPin) {
    isAuthenticated = true;
    attempts = 0;
    console.log("Access granted");
  } else {
    attempts++;
    console.log("Wrong PIN");
  }
}

function withdraw(amount) {
  if (!isAuthenticated) {
    console.log("Enter PIN first");
    return;
  }

  if (amount <= balance) {
    balance -= amount;
    console.log("Withdraw successful");
  } else {
    console.log("Insufficient balance");
  }
}

function checkBalance() {
  if (isAuthenticated) {
    console.log("Balance:", balance);
  } else {
    console.log("Enter PIN first");
  }
}

function exit() {
  isAuthenticated = false;
  console.log("Session ended");
}

enterPin("1111");
enterPin("1234");
checkBalance();
withdraw(1000);
checkBalance();
exit();
