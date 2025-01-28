let totalCoins = 0;

function collectCoins() {
  const coinsToAdd = Math.floor(Math.random() * 10) + 1; // Random coins between 1 and 10
  totalCoins += coinsToAdd;

  document.getElementById("total-coins").textContent = totalCoins;

  alert(You just collected ${coinsToAdd} coins! 🎉);
}