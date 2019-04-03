

var map;
function initMap() {
    //new map
    map = new google.maps.Map(document.getElementById('map'), {

    //map options
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
    });

    //add marker
    var marker = new google.maps.Marker({
        position: {lat: -31.4135000, lng: -64.1810500},
        map: map
    });
}