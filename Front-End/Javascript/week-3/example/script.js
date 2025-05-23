// Register User
document.getElementById('registerForm').addEventListener('submit', function (e) {
    // e.preventDefault();
  
    const username = document.getElementById('regUsername').value.trim();
    const password = document.getElementById('regPassword').value.trim();
  
    if (localStorage.getItem(username)) {
      showMessage("User already exists!", "red");
    } else {
      localStorage.setItem(username, JSON.stringify({ password }));
      showMessage("Registered successfully!", "green");
    }
    
    this.reset();
  });
  
  // Login User
  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
  
    const storedUser = localStorage.getItem(username);
  
    if (!storedUser) {
      showMessage("User not found!", "red");
    } else {
      const foundUser = JSON.parse(storedUser);
      if (foundUser.password === password) {
        sessionStorage.setItem('loggedInUser', username);
        showMessage(`Welcome, ${username}!`, "green");
      } else {
        showMessage("Wrong password!", "red");
      }
    }
  
    this.reset();
  });
  
  function showMessage(msg, color) {
    const msgDiv = document.getElementById('message');
    msgDiv.textContent = msg;
    msgDiv.style.color = color;
  }
  