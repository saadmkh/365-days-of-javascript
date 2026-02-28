let user = {
  username: "admin",
  password: "1234",
  isLoggedIn: false,
  attempts: 0
};

function login(inputUser, inputPass) {
  if (user.attempts >= 3) {
    console.log("Account locked");
    return;
  }

  if (inputUser === user.username && inputPass === user.password) {
    user.isLoggedIn = true;
    user.attempts = 0;
    console.log("Login successful");
  } else {
    user.attempts++;
    console.log("Invalid credentials");
  }
}

function logout() {
  if (user.isLoggedIn) {
    user.isLoggedIn = false;
    console.log("Logged out");
  } else {
    console.log("Already logged out");
  }
}

function changePassword(oldPass, newPass) {
  if (!user.isLoggedIn) {
    console.log("Login first");
    return;
  }

  if (oldPass === user.password) {
    user.password = newPass;
    console.log("Password changed");
  } else {
    console.log("Wrong old password");
  }
}

function status() {
  console.log(user);
}

login("admin", "1111");
login("admin", "1234");
changePassword("1234", "abcd");
logout();
status();
