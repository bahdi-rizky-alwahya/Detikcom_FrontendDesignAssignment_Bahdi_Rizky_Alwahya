
function redirectToRegisterPage() {
    window.location.href = "register.html";
  }
  
  function checkURLAndRedirect() {

    if (window.location.href.includes("Detikfinance Business Plan Competition 2023")) {
      window.location.href = "index.html";
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const registerButton = document.getElementById("registerButton");
    registerButton.addEventListener("click", redirectToRegisterPage);
  
    checkURLAndRedirect();
  });
  