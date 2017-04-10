
<html>
<head>
 <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>  
     <style>
    
     #mapholder {
       height: 100%;
     }
     html, body {
       height: 70%;
       width: 70%;
       margin: 0;
       padding: 0;
     }
   </style>
</head>
<body>
 
<div id="mapholder"></div>
<script>
var currentPosition = document.getElementById("demo");
function getLocation() {
   if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition, showError);
   } else {
       currentPosition.innerHTML = "Geolocation is not supported by this browser.";
   }
}
function showPosition(position) {
   var latlon = position.coords.latitude + "," + position.coords.longitude;
   coord = {lat:position.coords.latitude , lng:position.coords.longitude};
  
var queryURL = "https://api.foursquare.com/v2/venues/search?client_id=LPUN3IZFVIMWCBJTVKWMBQATLIIJYAKE51SMOVS3SIOIUJOC&client_secret=U5KX2SUOPEZ1XXUZX25WJXB1UA0UBC0ALRCD0BDIKMBGBD2A&v=20130815&ll=" + latlon + "&limit=10&query=movies"
   $.ajax({
     url:queryURL,
     method: 'GET'})
   .done(function(response) {
    
     initMap(coord, response)
 })
}

function showError(error) {
   switch(error.code) {
       case error.PERMISSION_DENIED:
           currentPosition.innerHTML = "User denied the request for Geolocation."
           break;
       case error.POSITION_UNAVAILABLE:
           currentPosition.innerHTML = "Location information is unavailable."
           break;
       case error.TIMEOUT:
           currentPosition.innerHTML = "The request to get user location timed out."
           break;
       case error.UNKNOWN_ERROR:
           currentPosition.innerHTML = "An unknown error occurred."
           break;
   }
}

     function initMap(currentPosition, foursquareResponse) { 
       var myLatLng = {lat: -25.363, lng: 131.044};
       var testLat = {lat:40.74712431269095 , lng:-73.99032881455878};
console.log(foursquareResponse) // the response from Foursquare
console.log(currentPosition) // the current location
       var map = new google.maps.Map(document.getElementById('mapholder'), {
         zoom: 11,
         center: currentPosition
       }); 
for (var i = 0; i < foursquareResponse.response.venues.length; i++) {

var places = {lat:foursquareResponse.response.venues[i].location.lat, lng:foursquareResponse.response.venues[i].location.lng}
  console.log(places)
  var placesName = foursquareResponse.response.venues[i].name
  console.log(placesName)
       var marker = new google.maps.Marker({
         position: places,
         map: map,
         title: placesName, 
       });      
    }
    // the user's location will be marked in orange
    var userLocation = "http://sanutra.com/images/googlemap/google_maps_pin_orange.png"
    var marker = new google.maps.Marker({
         position: currentPosition,
         map: map,
         icon: userLocation 
       });
     }
   
getLocation()
</script>
   <script async defer
   src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCj40yUOqlbpszx_hUaSuNWTz8GXRdDC44">
   </script>
 <!--  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCj40yUOqlbpszx_hUaSuNWTz8GXRdDC44&callback=initMap" async defer></script> -->
</body>
</html>