function validateSignup() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');
  
    errorMessage.style.display = 'none'; 
  
    // Basic input validation
    if (username.trim() === '' || email.trim() === '' || 
        password.trim() === '' || confirmPassword.trim() === '') { 
      errorMessage.innerText = "Please fill in all fields.";
      errorMessage.style.display = 'block';
      return; 
    }
  
    // Password matching
    if (password !== confirmPassword) {
      errorMessage.innerText = "Passwords do not match.";
      errorMessage.style.display = 'block';
      return;
    }
  
    // Basic email validation (simple check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMessage.innerText = "Invalid email address.";
      errorMessage.style.display = 'block';
      return;
    }
  
    // If validation passes (replace with actual server-side signup logic)
    alert('Signup Successful!'); 
    // Redirect to another page (replace with actual redirection logic)
    // window.location.href = 'login.html'; 
  }