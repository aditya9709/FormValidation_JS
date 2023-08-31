document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const errorMessages = document.getElementById("errorMessages");

  form.addEventListener("submit", function (event) {
    errorMessages.innerHTML = "";
    let isValid = true;

    const name = form.name.value.trim();
    const date = form.date.value;
    const password = form.password.value;
    const email = form.email.value.trim();
    const hobbies = form.hobbies.value.trim();

    if (name === "") {
      displayError("Name is required");
      isValid = false;
    }

    if (date === "") {
      displayError("Date is required");
      isValid = false;
    }

    if (password === "") {
      displayError("Password is required");
      isValid = false;
    }

    if (email === "") {
      displayError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      displayError("Invalid email format");
      isValid = false;
    }

    if (hobbies === "") {
      displayError("Hobbies are required");
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  function displayError(message) {
    const errorMessage = document.createElement("div");
    errorMessage.className = "error";
    errorMessage.textContent = message;
    errorMessages.appendChild(errorMessage);
  }

  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
});
