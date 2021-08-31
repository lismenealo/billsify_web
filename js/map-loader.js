// Map loading

// Initialize and add the map
function initMap(lat, lng) {
    // The location of Uluru
    const valencia = { lat: 39.40778525, lng: -0.3615113 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: valencia,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: valencia,
        map: map,
    });
    navigator.geolocation.getCurrentPosition(
        function (position) {
            let currentPosition = { lat: position.coords.latitude, lng: position.coords.longitude }
            calcRoute(map, valencia, currentPosition);
        },
        function errorCallback(error) {
            console.log(error)
        }
    );
}

function calcRoute(map, start,end) {

    var directionsDisplay = new google.maps.DirectionsRenderer();
    var directionsService = new google.maps.DirectionsService();

    directionsDisplay.setMap(map);

    var request = {
        origin:start,
        destination:end,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}