"use strict";

function calcTip(percentage) {
  let bill = parseFloat(document.getElementById("bill").value);
  let name = document.getElementById("name").value;
  let currency = document.getElementById("currency").value;
  if (isNaN(bill) || bill <= 0) {
    document.getElementById("result").innerHTML =
      "Please enter a valid bill amount.";
    return;
  }
  if (currency.trim() === "") {
    document.getElementById("result").innerHTML = alert(
      "Please select a currency."
    );
    return;
  }

  let tip = bill * percentage;
  const total = bill + tip;
  document.getElementById(
    "result"
  ).innerHTML = `Hi ${name}!The amount of your chosen tip is: ${tip.toFixed(
    2
  )} ${currency.toUpperCase()}!The total amount of your bill is : ${total} ${currency.toUpperCase()}!`;

  document.getElementById("name").value = "";
  document.getElementById("bill").value = "";
  
}

addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calcTip(0.15);
  }
});
