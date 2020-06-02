var json = 
[
   {
      "restaurantName":"Bronco",
      "address":"39 Rue des Petites Écuries, 75010 Paris",
      "lat":48.8737815,
      "long":2.3501649,
      "ratings":[
         {
            "stars":4,
            "comment":"Un excellent restaurant, j'y reviendrai ! Par contre il vaut mieux aimer la viande."
         },
         {
            "stars":5,
            "comment":"Tout simplement mon restaurant préféré !"
         }
      ]
   },
   {
      "restaurantName":"Babalou",
      "address":"4 Rue Lamarck, 75018 Paris",
      "lat":48.8865035,
      "long":2.3442197,
      "ratings":[
         {
            "stars":5,
            "comment":"Une minuscule pizzeria délicieuse cachée juste à côté du Sacré choeur !"
         },
         {
            "stars":3,
            "comment":"J'ai trouvé ça correct, sans plus"
         }
      ]
   }
];





$(document).ready(function() { 

// Loop dans le Json
  for(var i = 0; i < json.length; i++) {
    var obj = json[i];
	// Ajout du restaurant et de son adresse
    $('<p class="h5">' + obj.restaurantName + '</p>' +
    	'<p>' + obj.address + '</p>').appendTo('#list');

    // Ajout des ratings
    for (e = 0; e < obj.ratings.length; e++) {
		$('<p>' + obj.ratings[e].comment + '</p> <p class="h4">' + obj.ratings[e].stars + '/5</p>').appendTo('#list');
    }

    // Fin du restaurant
    $('<hr>').appendTo('#list');

  }

});





  function initMap() {

  gMap = new google.maps.Map(document.getElementById('map'));

  navigator.geolocation.getCurrentPosition(function(position) {
    // Centrage sur la localisation de l'utilisateur
    var initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    gMap.setCenter(initialLocation);
    gMap.setZoom(13);
  }, function(positionError) {
    // Sinon centrage sur la tour eiffel
    gMap.setCenter(new google.maps.LatLng(48.858382, 2.294480));
    gMap.setZoom(12);
  });


// Loop dans le Json
  for(var i = 0; i < json.length; i++) {
    var obj = json[i];
	// Ajout d'un marker
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(obj.lat,obj.long),
      map: gMap,
      title: obj.restaurantName
    });
  }

}