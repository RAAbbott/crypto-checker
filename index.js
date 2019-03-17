var cryptoSelect = document.getElementById("crypto");
var fiat = document.getElementById("fiat");
var button = document.getElementById("value-button");
var resultsElement = document.getElementById("results");
button.onclick = checkCurrencyValue;


function checkCurrencyValue() {
  var url = "https://apiv2.bitcoinaverage.com/indices/global/ticker/" + cryptoSelect.value + fiat.value;

  var http = new XMLHttpRequest();
  http.open("GET", url, false);
  http.send();

  if (http.status == 200) {
    var json = JSON.parse(http.responseText);
    resultsElement.innerHTML = "The current value of " + cryptoSelect.options[cryptoSelect.selectedIndex].innerHTML + " is " + JSON.stringify(json.last) + " " + fiat.options[fiat.selectedIndex].innerHTML;
  } else {
    console.log("ERROR");
  }
}
