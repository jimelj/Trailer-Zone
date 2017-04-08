
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

var queryURL = "https://api.foursquare.com/v2/venues/search?client_id=LPUN3IZFVIMWCBJTVKWMBQATLIIJYAKE51SMOVS3SIOIUJOC&client_secret=U5KX2SUOPEZ1XXUZX25WJXB1UA0UBC0ALRCD0BDIKMBGBD2A&v=20130815&ll=" + latlon + "&query=movies"
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


for (var i = 0; i < y.response.venues.length; i++) {

var places = {lat:y.response.venues[i].location.lat, lng:y.response.venues[i].location.lng}
// for (var i = places.length; i= 0; i++) {
  console.log(y.response.venues[i])

var moviesOnMap = {lat:venues[i].location.lat, lng:venues[i].location.lng,}}


       var map = new google.maps.Map(document.getElementById('mapholder'), {
         zoom: 11,
         center: x
       });
       var marker = new google.maps.Marker({
         position: places,
         map: map,
         title: 'Hello World!'
       });
       var marker = new google.maps.Marker({
         position: testLat,
         map: map,
         title: 'Hello World!'
       });
     }
   }
   
getLocation()
