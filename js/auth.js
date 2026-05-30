function signupUser(event) {
  event.preventDefault();
  const user = document.getElementById("newUser").value;
  const pass = document.getElementById("newPass").value;
  const email = document.getElementById("newEmail").value;

  localStorage.setItem("eshopUser", JSON.stringify({ user, pass, email }));
  alert("Account created successfully!");
  window.location.href = "login.html";
}

function loginUser(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const stored = JSON.parse(localStorage.getItem("eshopUser"));

  if (stored && stored.user === username && stored.pass === password && stored.email === email) {
    // Store login state and user details
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("loggedInUser", JSON.stringify({ username, email }));
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials!");
  }
}

function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
