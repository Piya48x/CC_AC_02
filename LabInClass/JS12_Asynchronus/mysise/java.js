// script.js
function addNumbers() {
    var num1 = prompt("Enter the first number:");
    var num2 = prompt("Enter the second number:");
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
    } else {
      var result = parseFloat(num1) + parseFloat(num2);
      document.getElementById("demo").innerHTML = "Result: " + result;
    }
  }
  
  function chaengUni() {
    let inputUni = prompt("ป้อนคำที่คุณที่การจะเปลี่ยน : ");
    document.getElementById("demo2").innerHTML = "คำที่ใส่ : " + inputUni;
  }
  
  function sayHi() {
    let ageInput = document.getElementById("ageInput").value;
    let age = parseInt(ageInput);
  
    if (isNaN(age)) {
      alert("Please enter a valid age.");
    } else {
      if (age < 18) {
        alert("สถานะของคุณ : เด็กน้อย");
      } else {
        alert("สถานะของคุณ : ผู้ใหญ่");
      }
    }
  }
  
  let currentCharCode = "A".charCodeAt(0);
  let output = "";
  
  function printAlphabet() {
    output += String.fromCharCode(currentCharCode) + " ";
    currentCharCode++;
  
    if (currentCharCode <= "Z".charCodeAt(0)) {
      setTimeout(printAlphabet, 1000);
    } else {
      document.getElementById("demo3").innerHTML = output;
    }
  }
  
  document.getElementById("demo3").innerHTML = output;
  
  function factorial() {
    let factorialInput = document.getElementById("factorialInput").value;
    let n = parseInt(factorialInput);
  
    if (isNaN(n)) {
      alert("Please enter a valid number.");
    } else {
      let result = calculateFactorial(n);
      document.getElementById("factorialResult").innerHTML = `Factorial ของ ${n} คือ: ${result}`;
    }
  }
  
  function calculateFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calculateFactorial(n - 1);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from the JSON file
    fetch('/country-by-population.json')
      .then(response => response.json())
      .then(data => {
        // Extract country names and populations
        var countries = data.map(entry => entry.country);
        var populations = data.map(entry => entry.population);
  
        // Create a bar chart
        var ctx = document.getElementById('populationChart').getContext('2d');
        var populationChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: countries,
            datasets: [{
              label: 'Population',
              data: populations,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  
    fetch('./country-by-population.json')
      .then(response => response.json())
      .then(data => {
        const xValues = data.map(entry => entry.country);
        const yValues = data.map(entry => entry.population);
        const barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];
  
        new Chart("myChart", {
          type: "pie",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            title: {
              display: true,
              text: "ข้อมูลประชากรในแต่ละประเทศ"
            }
          }
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  

 