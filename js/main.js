let map = new Mapy;
let resto = new Resto;

map.initMap();
resto.initResto();

$('#minStars').change(function() {
resto.moyChange($(this).val(),$('#maxStars').val());
});

$('#maxStars').change(function() {
resto.moyChange($('#minStars').val(),$(this).val());
});