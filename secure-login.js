function sanitize(input) {
  return input.replace(/[<>"']/g, "");
}

document.getElementById("loginForm").onsubmit = function(e) {
  e.preventDefault();
  const username = sanitize(document.getElementById("username").value);
  const password = sanitize(document.getElementById("password").value);

  // ✅ Simulated secure login (replace with real API)
  fetch("https://example.com/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      alert("Login successful!");
    } else {
      alert("Invalid credentials.");
    }
  });
};
