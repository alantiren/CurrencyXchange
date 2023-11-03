const dropList = document.querySelectorAll("form select"),
  fromCurrency = document.querySelector(".from select"),
  toCurrency = document.querySelector(".to select"),
  getButton = document.querySelector("form button"),
  amountInput = document.querySelector("form input"),
  exchangeRateTxt = document.querySelector("form .exchange-rate"),
  convertHistory = document.getElementById("conversionHistory"),
  clearHistoryButton = document.getElementById("clearHistory");

const history = JSON.parse(localStorage.getItem("conversionHistory")) || [];

// Populate conversion history
function populateConversionHistory() {
  convertHistory.innerHTML = history
    .map(
      (entry) =>
        `<li>${entry.amount} ${entry.fromCurrency} = ${entry.result} ${entry.toCurrency}</li>`
    )
    .join("");
}

// Update conversion history in local storage
function updateConversionHistory() {
  localStorage.setItem("conversionHistory", JSON.stringify(history));
}

// Clear conversion history
clearHistoryButton.addEventListener("click", () => {
  history.length = 0;
  updateConversionHistory();
  populateConversionHistory();
});

// Load currency options from country_list
for (let i = 0; i < dropList.length; i++) {
  for (let currency_code in country_list) {
    let selected =
      i === 0
        ? currency_code === "USD"
          ? "selected"
          : ""
        : currency_code === "NPR"
        ? "selected"
        : "";
    let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }
  dropList[i].addEventListener("change", (e) => {
    loadFlag(e.target);
  });
}

function loadFlag(element) {
  for (let code in country_list) {
    if (code == element.value) {
      let imgTag = element.parentElement.querySelector("img");
      imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
    }
  }
}

window.addEventListener("load", () => {
  getExchangeRate();
  populateConversionHistory();
});

getButton.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

function getExchangeRate() {
  const amountVal = amountInput.value;
  const fromCurrencyVal = fromCurrency.value;
  const toCurrencyVal = toCurrency.value;

  if (amountVal === "" || amountVal === "0") {
    amountInput.value = "1";
    amountInput.value = 1;
  }

  exchangeRateTxt.innerText = "Getting exchange rate...";
  let url = `https://v6.exchangerate-api.com/v6/4be82ca1fc36181e947027fa/latest/${fromCurrencyVal}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((result) => {
      let exchangeRate = result.conversion_rates[toCurrencyVal];
      let totalExRate = (amountVal * exchangeRate).toFixed(2);
      exchangeRateTxt.innerText = `${amountVal} ${fromCurrencyVal} = ${totalExRate} ${toCurrencyVal}`;

      // Save the conversion in history
      const conversionEntry = {
        amount: amountVal,
        fromCurrency: fromCurrencyVal,
        toCurrency: toCurrencyVal,
        result: totalExRate,
      };
      history.push(conversionEntry);
      updateConversionHistory();
      populateConversionHistory();
    })
    .catch((error) => {
      exchangeRateTxt.innerText = "Something went wrong";
    });
}
