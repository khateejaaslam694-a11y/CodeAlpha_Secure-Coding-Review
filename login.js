document.getElementById("loginForm").onsubmit = function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // ❌ Vulnerable: Hardcoded credentials
  if (username === "admin" && password === "123456") {
    alert("Login successful!");
  } else {
    alert("Invalid credentials.");
  }
};
