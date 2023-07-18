let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let receiveElement = document.querySelector(".js-receive");

let EUR = 4.05;
let USD = 4.50;
let CHF = 4.70;


formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = amountElement.value;
  let currency = currencyElement.value;
  let receive = receiveElement.value;

  switch (currency) {
    case "EUR":
      receive = amount / EUR;
      break;
    case "USD":
      receive = amount / USD;
      break;
    case "CHF":
      receive = amount / CHF;
      break;
  }

receiveElement.innerText = receive.toFixed(2);

})