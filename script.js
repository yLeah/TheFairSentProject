document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([42.33262, -71.07231], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
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
    
    const greenMarkers = L.layerGroup();
    
    arrestData.forEach(marker => {
        const greenMarker = L.marker([marker.lat, marker.lng]).bindPopup(marker.descriptor).openPopup();
        greenMarkers.addLayer(greenMarker);
    });
    
    greenMarkers.addTo(map);
    const greenKey =  document.querySelector('key-dot.green');
    if(greenKey){
        greenKey.addEventListener('click', function () {
            if(map.hasLayer(greenMarkers)) {
                map.removeLayers(greenMarkers);
            } else {
                map.addLayer(greenMarkers);
            }
        });
    } else {
        console.error("Key element for green markers not found");
    }
})
