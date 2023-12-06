function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Exchange rates (replace with real API calls in a production environment)
    const exchangeRates = {
        inr: 1,
        usd: 0.014,
        eur: 0.012,
        gbp: 0.010,
        aud: 0.020,
        aed: 0.051,
        // Add more currencies and their exchange rates as needed
    };

    const convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
