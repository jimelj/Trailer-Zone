
<html>
<head>
 <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
     <style>
     /* Always set the map height explicitly to define the size of the div
      * element that contains the map. */
     #mapholder {
       height: 100%;
     }
     /* Optional: Makes the sample page fill the window. */
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
var x = document.getElementById("demo");
function getLocation() {
   if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition, showError);
   } else {
       x.innerHTML = "Geolocation is not supported by this browser.";
   }
}
function showPosition(position) {
   var latlon = position.coords.latitude + "," + position.coords.longitude;
   coord = {lat:position.coords.latitude , lng:position.coords.longitude};
   // initMap(coord);
var queryURL = "https://api.foursquare.com/v2/venues/search?client_id=LPUN3IZFVIMWCBJTVKWMBQATLIIJYAKE51SMOVS3SIOIUJOC&client_secret=U5KX2SUOPEZ1XXUZX25WJXB1UA0UBC0ALRCD0BDIKMBGBD2A&v=20130815&ll=" + latlon + "&limit=10&query=movies"
   $.ajax({
     url:queryURL,
     method: 'GET'})
   .done(function(response) {
     console.log(response);
     initMap(coord, response)
 })
   // var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
   // +latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
   // document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

//To use this code on your website, get a free API key from Google.
//Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp
function showError(error) {
   switch(error.code) {
       case error.PERMISSION_DENIED:
           x.innerHTML = "User denied the request for Geolocation."
           break;
       case error.POSITION_UNAVAILABLE:
           x.innerHTML = "Location information is unavailable."
           break;
       case error.TIMEOUT:
           x.innerHTML = "The request to get user location timed out."
           break;
       case error.UNKNOWN_ERROR:
           x.innerHTML = "An unknown error occurred."
           break;
   }
}
// The following example creates a marker in Stockholm, Sweden using a DROP
// animation. Clicking on the marker will toggle the animation between a BOUNCE
// animation and no animation.
     function initMap(x, y) { //x is the current location and y is the response from Foursquare
       var myLatLng = {lat: -25.363, lng: 131.044};
       var testLat = {lat:40.74712431269095 , lng:-73.99032881455878};
console.log(y)
       var map = new google.maps.Map(document.getElementById('mapholder'), {
         zoom: 11,
         center: x
       });
for (var i = 0; i < y.response.venues.length; i++) {
// for (var places in y) {
// console.log(y.response.venues[i])
var places = {lat:y.response.venues[i].location.lat, lng:y.response.venues[i].location.lng}
  console.log(places)
       var marker = new google.maps.Marker({
         position: places,
         map: map,
         title: 'Hello World!'
       });
     }
   }

getLocation()
</script>
   <script async defer
   src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCj40yUOqlbpszx_hUaSuNWTz8GXRdDC44">
   </script>
  //  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCj40yUOqlbpszx_hUaSuNWTz8GXRdDC44&callback=initMap" async defer></script>
</body>
</html>
