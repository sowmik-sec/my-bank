document.getElementById("btn-withdraw").addEventListener("click", function () {
  let withdrawField = document.getElementById("withdraw-field");
  let withdrawAmount = document.getElementById("withdraw-amount");
  let wantsToWithdraw = withdrawField.value;
  let balance = document.getElementById("balance");
  let curBalance = balance.innerText;
  if (parseFloat(wantsToWithdraw) < parseFloat(curBalance)) {
    balance.innerText =
      parseFloat(curBalance) - parseFloat(withdrawField.value);
    withdrawAmount.innerText =
      parseFloat(withdrawAmount.innerText) + parseFloat(withdrawField.value);
  } else {
    console.log("fuck off man");
  }
  withdrawField.value = "";
});
