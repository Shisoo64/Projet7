$(document).ready(function() { 

  let map = new Mapy;
  let resto = new Resto;

  resto.initRatings();

  $('#minStars').change(function() {
    resto.moyChange($(this).val(),$('#maxStars').val());
  });

  $('#maxStars').change(function() {
    resto.moyChange($('#minStars').val(),$(this).val());
  });

});