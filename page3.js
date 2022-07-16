



const x = document.getElementById("location");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =   "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;



var num1=position.coords.latitude;
var num2=position.coords.longitude;



var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://us1.locationiq.com/v1/reverse?key=pk.c44ad4ffbe43c0140dd4a83af0f07ba6&lat=" + num1 + "&lon=" + num2 + "&format=json",
    "method": "GET"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);



  });



}





  


  


//   "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;