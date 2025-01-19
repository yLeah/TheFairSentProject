document.addEventListener('DOMContentLoaded', function () {
    //Different colored markers
    var redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var blueIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var goldIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var orangeIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    //Main map layout
    const map = L.map('map').setView([42.33262, -71.07231], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    //Hard coded data for all of the markers
    const fireStationData = [
        {lat: 42.3400068, lng: -71.0711341, descriptor: "<b>Boston Fire Department Engine 3</b>"},
        {lat: 42.3404446, lng: -71.0801552, descriptor: "<b>Boston Fire Department Engine 22</b>"},
        {lat: 42.3288496, lng: -71.0848953, descriptor: "<b>Boston Fire Department Engine 14 and Ladder 4</b>"},
        {lat: 42.3489266, lng: -71.0735062, descriptor: "<b>Boston Fire Department Engine 7 and Ladder 17</b>"},
        {lat: 42.3396155, lng: -71.0530808, descriptor: "<b>Boston Fire Department Engine 39 and Ladder 18</b>"},
    ];

    const hospitalData = [
        {lat: 42.3348229, lng: -71.0746534, descriptor: "<b>Boston Medical Center</b>"},
        {lat: 42.349665, lng: -71.0652761, descriptor: "<b>Tufts Medical Center</b>"},
    ];

    const arrestData = [
        {lat: 42.330478, lng: -71.066839, descriptor: "<b>126 NEWMARKET SQ</b><br>Property - found"},
        {lat: 42.327262, lng: -71.066378, descriptor: "<b>60 NEWMARKET SQ</b><br>Fire report (2)"},
        {lat: 42.330479, lng: -71.069054, descriptor: "<b>NEWMARKET SQ & THEODORE A GLYNN WAY</b><br>M/V accident - involving pedestrian - injury<br>Leaving scene - property damage"},
        {lat: 42.33052, lng: -71.066883, descriptor: "<b>138 NEWMARKET SQ</b><br>Vandalism"},
        {lat: 42.330453, lng: -71.066936, descriptor: "<b>115 NEWMARKET SQ</b><br>Leaving scene - personal injury"},
        {lat: 42.328712, lng: -71.066439, descriptor: "<b>77 NEWMARKET SQ</b><br>Sick assist"},
        {lat: 42.333285, lng: -71.068186, descriptor: "<b>ATKINSON ST & BRADSTON ST</b><br>Warrant arrest - outside of Boston warrant<br>M/V accident - other"},
        {lat: 42.327899, lng: -71.066376, descriptor: "<b>50 NEWMARKET SQ</b><br>Warrant arrest - outside of Boston warrant"},
        {lat: 37.018607, lng: -76.440997, descriptor: "<b>54 NEWMARKET SQ</b><br>Sick assist - drug related illness"},
        {lat: 42.330179, lng: -71.064474, descriptor: "<b>46 NEWMARKET SQ</b><br>Investigate person<br>Verbal dispute"},
        {lat: 42.330155, lng: -71.0651, descriptor: "<b>10 NEWMARKET SQ</b><br>Investigate property"},
        {lat: 42.331891, lng: -71.069077, descriptor: "<b>SOUTHAMPTON ST & ATKINSON ST</b><br>Larcery of others<br>Sick/injured/medical - person"},
    ];

    //All marker groups
    const redMarkers = L.layerGroup();
    const blueMarkers = L.layerGroup();
    const greenMarkers = L.layerGroup();
    const yellowMarkers = L.layerGroup();
    const orangeMarkers = L.layerGroup();
    
    //Adding each marker to each marker layer
    fireStationData.forEach(marker => {
        const redMarker = L.marker([marker.lat, marker.lng], {icon: redIcon}).bindPopup(marker.descriptor).openPopup();
        redMarkers.addLayer(redMarker);
    });
    hospitalData.forEach(marker => {
        const blueMarker = L.marker([marker.lat, marker.lng], {icon: blueIcon}).bindPopup(marker.descriptor).openPopup();
        blueMarkers.addLayer(blueMarker);
    });
    arrestData.forEach(marker => {
        const greenMarker = L.marker([marker.lat, marker.lng], {icon: greenIcon}).bindPopup(marker.descriptor).openPopup();
        greenMarkers.addLayer(greenMarker);
    });
    yellowMarkers.addLayer(L.marker([42.3452307,-71.0394289], {icon: goldIcon}).bindPopup("<b>Boston's Mayor's Office of Housing</b>").openPopup());
    orangeMarkers.addLayer(L.marker([42.33262, -71.07231], {icon: orangeIcon}).bindPopup("<b>Mass and Cass</b>").openPopup());
    
    //Initially add all markers to the map
    redMarkers.addTo(map);
    blueMarkers.addTo(map);
    greenMarkers.addTo(map);
    yellowMarkers.addTo(map);
    orangeMarkers.addTo(map);

    //Grab the marker layers by the checkbox id
    const redCheckbox = document.getElementById('kdr');
    const blueCheckbox = document.getElementById('kdb');
    const greenCheckbox = document.getElementById('kdg');
    const yellowCheckbox = document.getElementById('kdy');
    const orangeCheckbox = document.getElementById('kdo');

    //Click the markers on and off the map
    redCheckbox.addEventListener('change', function () {
        if (this.checked) {
            map.addLayer(redMarkers);
        } else {
            map.removeLayer(redMarkers);
        }
    });
    blueCheckbox.addEventListener('change', function () {
        if (this.checked) {
            map.addLayer(blueMarkers);
        } else {
            map.removeLayer(blueMarkers);
        }
    });
    greenCheckbox.addEventListener('change', function () {
        if (this.checked) {
            map.addLayer(greenMarkers);
        } else {
            map.removeLayer(greenMarkers);
        }
    });
    yellowCheckbox.addEventListener('change', function () {
        if (this.checked) {
            map.addLayer(yellowMarkers);
        } else {
            map.removeLayer(yellowMarkers);
        }
    });
    orangeCheckbox.addEventListener('change', function () {
        if (this.checked) {
            map.addLayer(orangeMarkers);
        } else {
            map.removeLayer(orangeMarkers);
        }
    });
})
