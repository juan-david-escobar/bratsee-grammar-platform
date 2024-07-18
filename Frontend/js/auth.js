document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".main_content__form");
  const usernameInput = document.querySelector("input[type='text']");
  const passwordInput = document.querySelector("input[type='password']");
  const cancelButton = document.querySelector("button[type='button']");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert("Please fill in both fields.");
      return;
    }

    // Simulación de autenticación
    if (username === "testuser" && password === "PassWord86+") {
      alert("Login successful!");
      window.location.href = "./dashboard.html";
    } else {
      alert("Invalid username or password.");
    }
  });

  cancelButton.addEventListener("click", function () {
    usernameInput.value = "";
    passwordInput.value = "";
  });
});
