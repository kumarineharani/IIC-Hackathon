// Function to toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text"; // Show password
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password"; // Hide password
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    }
  }
  
  // Form submission event
  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
  
    const userId = document.getElementById("user-id").value;
    const password = document.getElementById("password").value;
  
    // Dummy credentials
    const validUserId = "user123";
    const validPassword = "password123";
  
    const errorMessage = document.getElementById("error-message");
  
    if (userId === validUserId && password === validPassword) {
      alert("Login successful!");
      errorMessage.style.display = "none"; // Hide error message
      window.location.href = "dashboard.html"; // Redirect to another page
    } else {
      errorMessage.textContent = "Invalid User ID or Password!";
      errorMessage.style.display = "block"; // Show error message
    }
  });
  