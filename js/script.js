// Selecting DOM elements
const dropList = document.querySelectorAll("form select"), // Array of dropdown lists
  fromCurrency = document.querySelector(".from select"), // Dropdown for selecting 'from' currency
  toCurrency = document.querySelector(".to select"), // Dropdown for selecting 'to' currency
  getButton = document.querySelector("form button"), // Button to initiate currency conversion
  amountInput = document.querySelector("form input"), // Input field for entering the amount
  exchangeRateTxt = document.querySelector("form .exchange-rate"), // Display area for showing the exchange rate
  convertHistory = document.getElementById("conversionHistory"), // List element to display conversion history
  clearHistoryButton = document.getElementById("clearHistory"); // Button to clear conversion history

// Array to store conversion history data
const history = JSON.parse(localStorage.getItem("conversionHistory")) || [];

// Function to populate the conversion history in the UI
function populateConversionHistory() {
  convertHistory.innerHTML = history
    .map(
      (entry) =>
        `<li>${entry.amount} ${entry.fromCurrency} = ${entry.result} ${entry.toCurrency}</li>`
    )
    .join("");
}

// Function to update conversion history in local storage
function updateConversionHistory() {
  localStorage.setItem("conversionHistory", JSON.stringify(history));
}

// Event listener to clear conversion history
clearHistoryButton.addEventListener("click", () => {
  history.length = 0; // Clear the history array
  updateConversionHistory(); // Update local storage
  populateConversionHistory(); // Refresh the UI
});

// Loop to load currency options from country_list into dropdown lists
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

// Function to load country flag based on the selected currency
function loadFlag(element) {
  for (let code in country_list) {
    if (code == element.value) {
      let imgTag = element.parentElement.querySelector("img");
      imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
    }
  }
}

// Event listener to load exchange rate and populate conversion history on page load
window.addEventListener("load", () => {
  getExchangeRate();
  populateConversionHistory();
});

// Event listener to trigger currency conversion
getButton.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

// Function to fetch and display the exchange rate
function getExchangeRate() {
  const amountVal = amountInput.value;
  const fromCurrencyVal = fromCurrency.value;
  const toCurrencyVal = toCurrency.value;

  // Check if the amount is empty or zero
  if (amountVal === "" || amountVal === "0") {
    amountInput.value = "0"; // Default to 0
  }

  exchangeRateTxt.innerText = "Getting exchange rate..."; // Display loading message

  // API URL for fetching exchange rates
  let url = `https://v6.exchangerate-api.com/v6/4be82ca1fc36181e947027fa/latest/${fromCurrencyVal}`;

  // Fetch exchange rate from API
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
