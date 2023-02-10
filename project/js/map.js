let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:55.75878, lng: 37.60096 },
    zoom: 14.5,
  });
}

window.initMap = initMap;
