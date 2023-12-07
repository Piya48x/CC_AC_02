function getAddress() {
  var zipcode = document.getElementById("zipcode").value;

  fetch(`https://api.zippopotam.us/th/${zipcode}`)
    .then((response) => response.json())
    .then((data) => {
      displayAddressResult(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function getRandomDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      displayDogImageResult(data);
    })
    .catch((error) => {
      console.error("Error fetching dog image:", error);
    });
}

function getCryptoPrice(cryptoSymbol) {
  fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoSymbol}&vs_currencies=usd`
  )
    .then((response) => response.json())
    .then((data) => {
      displayCryptoPriceResult(data, cryptoSymbol);
    })
    .catch((error) => {
      console.error(`Error fetching ${cryptoSymbol} price:`, error);
    });
}

function displayAddressResult(data) {
  var resultContainer = document.getElementById("result1");

  resultContainer.innerHTML = "";

  if (data.places) {
    data.places.forEach((place) => {
      var placeName = place["place name"];
      var state = place["state"];

      var resultText = `${placeName}, ${state}`;
      var resultParagraph = document.createElement("p");
      resultParagraph.textContent = resultText;

      resultContainer.appendChild(resultParagraph);
    });
  } else {
    resultContainer.textContent = "ไม่พบข้อมูลสำหรับรหัสไปรษณีย์นี้";
  }
}

function displayDogImageResult(data) {
  var resultContainer = document.getElementById("result2");

  resultContainer.innerHTML = "";

  if (data.status === "success") {
    var dogImage = document.createElement("img");
    dogImage.src = data.message;
    dogImage.alt = "Random Dog";

    resultContainer.appendChild(dogImage);
  } else {
    resultContainer.textContent = "ไม่สามารถดึงรูปหมาได้ในขณะนี้";
  }
}

var bitcoinPriceHistory = [];

function getCryptoPriceWithHistory(cryptoSymbol) {
  fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoSymbol}&vs_currencies=usd`
  )
    .then((response) => response.json())
    .then((data) => {
      displayCryptoPriceResult(data, cryptoSymbol);
      storeCryptoPriceInHistory(data, cryptoSymbol);
    })
    .catch((error) => {
      console.error(`Error fetching ${cryptoSymbol} price:`, error);
    });
}

function storeCryptoPriceInHistory(data, cryptoSymbol) {
  if (data[cryptoSymbol]) {
    var price = data[cryptoSymbol].usd;
    bitcoinPriceHistory.push({ symbol: cryptoSymbol, price: price });
  }
}

function displayCryptoPriceResult(data, cryptoSymbol) {
  var resultContainer = document.getElementById("result3");

  resultContainer.innerHTML = "";

  if (data[cryptoSymbol]) {
    var price = data[cryptoSymbol].usd;
    var resultText = `ราคา ${cryptoSymbol.toUpperCase()}: ${price} USD`;
    var resultParagraph = document.createElement("p");
    resultParagraph.textContent = resultText;

    resultContainer.appendChild(resultParagraph);
  } else {
    resultContainer.textContent = `ไม่สามารถดึงราคา ${cryptoSymbol.toUpperCase()} ได้ในขณะนี้`;
  }
}
