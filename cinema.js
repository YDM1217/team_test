var map;
var service;
var infowindow;

function initMap() {
  var loc = new google.maps.LatLng(37.56605070430341, 126.9823989833293);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('map'), {center: loc, zoom: 15});

  var request = {
    query: '서울 CGV',
    fields: ['name', 'geometry'],
  };

  var service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}