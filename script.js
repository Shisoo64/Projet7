/*
var json = $.getJSON("restaurant.json", function(json) {
    console.log(json); // this will show the info it in firebug console
}); 
*/

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


  initRatings(0,5);

  $('#minStars').change(function() {
    initRatings($(this).val(),$('#maxStars').val());
  });

  $('#maxStars').change(function() {
    initRatings($('#minStars').val(),$(this).val());
  });

});






function initRatings(minStars, maxStars) {

  $('#list').empty();

  // Loop dans le Json
  for(var i = 0; i < json.length; i++) {
    var obj = json[i];
    var moyStars = 0;

    // Loop Moy
    for (e = 0; e < obj.ratings.length; e++) {
      moyStars = moyStars + obj.ratings[e].stars;
    }
    moyStars = moyStars / obj.ratings.length;

      if(moyStars >= minStars && moyStars <= maxStars){
        // Ajout du restaurant et de son adresse
        $('<p class="h5">' + obj.restaurantName + '</p>' +
          '<p>' + obj.address + '</p>').appendTo('#list');
        // Ajout des ratings
        for (e = 0; e < obj.ratings.length; e++) {
        $('<p>' + obj.ratings[e].comment + '</p> <p class="h4">' + obj.ratings[e].stars + '/5</p>').appendTo('#list');
        }
      }
    // Fin du restaurant
    $('<hr>').appendTo('#list');
  }
}



function initMap() {

  gMap = new google.maps.Map(document.getElementById('map'));

  navigator.geolocation.getCurrentPosition(function(position) {
    // Centrage sur la localisation de l'utilisateur
    var initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    gMap.setCenter(initialLocation);
    gMap.setZoom(13);
    newMarker(initialLocation, "Vous");
  }, function(positionError) {
    // Sinon centrage sur la tour eiffel
    gMap.setCenter(new google.maps.LatLng(48.858382, 2.294480));
    gMap.setZoom(12);
    newMarker(new google.maps.LatLng(48.858382, 2.294480), "Vous");
  });

  // Loop dans le Json
  for(var i = 0; i < json.length; i++) {
    var obj = json[i];
    newMarker(new google.maps.LatLng(obj.lat,obj.long), obj.restaurantName);
  }

}



function newMarker(position, title) {
  var marker = new google.maps.Marker({
      position: position,
      map: gMap,
      title: title
    });
}