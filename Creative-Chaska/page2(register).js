// Function to toggle role-specific fields based on the selected role
function toggleRoleFields() {
    const role = document.getElementById("role").value;
  
    // Hide all role-specific fields
    document.getElementById("admin-fields").style.display = "none";
    document.getElementById("vendor-fields").style.display = "none";
    document.getElementById("customer-fields").style.display = "none";
  
    // Show fields based on the selected role
    if (role === "admin") {
      document.getElementById("admin-fields").style.display = "block";
    } else if (role === "vendor") {
      document.getElementById("vendor-fields").style.display = "block";
    } else if (role === "customer") {
      document.getElementById("customer-fields").style.display = "block";
    }
  }
  
  // Form submission event
  document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
  
    const role = document.getElementById("role").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    let extraFields = {};
  
    if (role === "admin") {
      extraFields.adminKey = document.getElementById("admin-key").value;
    } else if (role === "vendor") {
      extraFields.businessName = document.getElementById("business-name").value;
      extraFields.gstNumber = document.getElementById("gst-number").value;
    } else if (role === "customer") {
      extraFields.address = document.getElementById("address").value;
      extraFields.phone = document.getElementById("phone").value;
    }
  
    console.log({
      role,
      name,
      email,
      password,
      ...extraFields,
    });
  
    alert("Registration successful!");
  });
  