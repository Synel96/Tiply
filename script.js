"use strict";

function calcTip(percentage) {
  let bill = parseFloat(document.getElementById("bill").value);
  let name = document.getElementById("name").value;
  if (isNaN(bill) || bill <= 0) {
    document.getElementById("result").innerHTML =
      "Please enter a valid bill amount.";
    return;
  }

  let tip = bill * percentage;
  const total = bill + tip;
  document.getElementById(
    "result"
  ).innerHTML = `Hi ${name}!The amount of your chosen tip is: ${tip.toFixed(
    2
  )}!The total amount of your bill is :${total}`;
}
