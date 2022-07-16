



const x = document.getElementById("location");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  



var num1=position.coords.latitude;
var num2=position.coords.longitude;



var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://us1.locationiq.com/v1/reverse?key=pk.b793c094ea78cfdb090b57000923adac&lat=" + num1 + "&lon=" + num2 + "&format=json",
    "method": "GET"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);

console.log(response.address.city);
x.innerHTML = response.address.city +", "+response.address.state+", "+response.address.postcode;
  });



}





  


  


//   "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;