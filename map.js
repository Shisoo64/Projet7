class Mapy {

  constructor(){
    this.map;
  }

  initMap(){

    // Init Google Maps
    let centerGg = {lat: 48.8788384, lng: 2.3466758};
    // Création d'une nouvelle instance avec le constructeur 'Map'
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: centerGg,
      zoom: 14,
    });

    navigator.geolocation.getCurrentPosition(function(position) {
        // Centrage sur la localisation de l'utilisateur
        var initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.map.setCenter(initialLocation);
        map.map.setZoom(13);
      }, function(positionError) {
        // Sinon centrage sur la tour eiffel
        map.map.setCenter(new google.maps.LatLng(48.858382, 2.294480));
        map.map.setZoom(12);
      });

     
  }

}