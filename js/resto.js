class Resto {

  constructor(){
    this.resto;
  }

  moyChange(minStars, maxStars) {
    $('.restaurant').each(function(i, rest) {
      if(rest.getAttribute('data-value') < minStars || rest.getAttribute('data-value') > maxStars){
        $(this).hide();
      }else{
        $(this).show();
      }
    });
  }

  initResto() {
    $('#list').empty();
    $.getJSON("restaurant.json", function(json) {
      // Each restaurant
      $.each(json, function(i, restaurant){
        // Calcul moy restaurant
        var moy = 0;
        $.each(restaurant.ratings, function(e, ratings){
          moy = moy + restaurant.ratings[e].stars;
        });
        moy = moy / restaurant.ratings.length;
        // Ajout Restaurant
        $('<a class="btn btn-primary btn-lg btn-block restaurant restaurantBtn" data-value="'+ moy +'" data-toggle="collapse" data-target="#collapse' + restaurant.restaurantName + '" role="button" aria-expanded="false" aria-controls="collapseExample">' + restaurant.restaurantName + '</a><p class="lead mb-4">' + restaurant.address + '</p>').appendTo('#list');
        map.newMarker(new google.maps.LatLng(restaurant.lat,restaurant.long), restaurant.restaurantName);
        // Div collapse
        $('<div class="collapse" id="collapse' + restaurant.restaurantName + '"></div>').appendTo('#list');
        $('<img class="img-fluid mb-4" src="https://maps.googleapis.com/maps/api/streetview?size=900x300&location=' + restaurant.lat + ',' + restaurant.long + '&fov=80&heading=70&pitch=0&key=AIzaSyDoAgu5pb6ODIxcuiG-8Ls9AgMhaGBebRU">').appendTo('#collapse' + restaurant.restaurantName);
        // Each ratings
        $.each(restaurant.ratings, function(e, ratings){
          // Ajout Rating
          $('<div class="restaurant mb-3" data-value="'+ moy+'"><div class="card card-body"><h4>' + restaurant.ratings[e].stars + '/5 <small class="text-muted">' + restaurant.ratings[e].comment + '</small></h4></div></div>').appendTo('#collapse' + restaurant.restaurantName);
        });
        // append apres rating $('').appendTo('#list');
      });
    });
  }
}







