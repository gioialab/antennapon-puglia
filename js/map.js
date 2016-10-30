$(function() {

	var center = [40.8030459,16.9299694];

	var gioia = [16.9299694, 40.8030459];
	var valenzano = [16.8666082, 41.0458656];

	/*
	var map = L.Mapzen.map('map');
  	map.setView(center, 8);

  	var geojsonFeature = {
	    "type": "Feature",
	    "properties": {
	        "name": "Gioia del Clle",
	        "amenity": "Nodo Antenna PON",
	        "popupContent": "This is where the Rockies play!"
	    },
	    "geometry": {
	        "type": "Point",
	        "coordinates": center
	    }
	};
	*/

	mapboxgl.accessToken = 'pk.eyJ1IjoiY29tdW5lZ2lvaWEiLCJhIjoiY2lyM2N1MzVkMDAxZWhzbnFka3IzcW8xNiJ9.01RuiMkZJs1XwEwMLOZLDw';
	
	var map = new mapboxgl.Map({
	    container: 'map',
	    style: 'mapbox://styles/mapbox/light-v9',
	    center: gioia,
	    zoom: 6
	});

	var geojson = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": gioia
            },
            "properties": {
                "title": "Gioia del Colle",
                "iconSize": [60,60]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": valenzano
            },
            "properties": {
                "title": "Valenzano",
                "iconSize": [48,48]
            }
        }]
    };

    // add markers to map
	geojson.features.forEach(function(marker) {
	    // create a DOM element for the marker
	    var el = document.createElement('div');
	    el.className = 'marker';
	    el.style.backgroundImage = 'url(https://gioialab.github.io/antennapon-puglia/img/LOGO-ANTENNAPON_small_60.jpg)';
	    el.style.width = marker.properties.iconSize[0] + 'px';
	    el.style.height = marker.properties.iconSize[1] + 'px';

	    el.addEventListener('click', function() {
	        window.alert(marker.properties.title);
	    });

	    // add marker to map
	    new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
	        .setLngLat(marker.geometry.coordinates)
	        .addTo(map);
	});


});