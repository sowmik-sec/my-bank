document.getElementById("btn-submit").addEventListener("click", function () {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  if (email.value === "baro@vatari.com" && password.value === "whore") {
    window.location.href = "bank.html";
  } else {
    console.log("Khankir pola abar de");
  }
});
