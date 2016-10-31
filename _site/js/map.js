$(function() {

	var center = [40.8030459,16.9299694];

	var gioia = [16.9299694, 40.8030459];
	var valenzano = [16.8666082, 41.0458656];
	var gravina = [16.4074053, 40.8183414];

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
                "rss": "https://gioialab.github.io/feed.xml"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": valenzano
            },
            "properties": {
                "title": "Valenzano",
                "iconSize": [60,60]
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": gravina
            },
            "properties": {
                "title": "Gravina in Puglia",
                "iconSize": [60,60]
                "rss": ""
            }
        }
        ]
    };

    // add markers to map
	geojson.features.forEach(function(marker) {
	    // create a DOM element for the marker
	    var el = document.createElement('div');
	    el.className = 'marker';
	    el.style.backgroundImage = 'url(https://gioialab.github.io/antennapon-puglia/img/LOGO-ANTENNAPON_60.png)';
	    el.style.width = marker.properties.iconSize[0] + 'px';
	    el.style.height = marker.properties.iconSize[1] + 'px';

	    el.addEventListener('click', function() {
	    	map.flyTo({center: marker.geometry.coordinates});
	        // window.alert(marker.properties.title);
	    });
	    
	    // add marker to map
	    new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
	        .setLngLat(marker.geometry.coordinates)
	        .addTo(map);
	});

	map.on('load', function () {

	    // add geojson data as a new source
	    map.addSource("symbols", {
	        "type": "geojson",
	        "data": geojson
	    });

	    map.addLayer({
	        "id": "symbols",
	        "type": "symbol",
	        "source": "symbols",
	        "paint": {}
	    });

	    map.on('click', function (e) {
		    // Use queryRenderedFeatures to get features at a click event's point
		    // Use layer option to avoid getting results from other layers
		    var features = map.queryRenderedFeatures(e.point, { layers: ['symbols'] });
		    // if there are features within the given radius of the click event,
		    // fly to the location of the click event
		    if (features.length) {
		        // Get coordinates from the symbol and center the map on those coordinates
		        map.flyTo({center: features[0].geometry.coordinates});
		    }
		});

		map.on('mousemove', function (e) {
		    var features = map.queryRenderedFeatures(e.point, { layers: ['symbols'] });
		    map.getCanvas().style.cursor = features.length ? 'pointer' : '';
		});

	});

	function getRSS(feed) {

		$.get(feed, function (data) {
		    $(data).find("entry").each(function () { // or "item" or whatever suits your feed
		        var el = $(this);

		        console.log("------------------------");
		        console.log("title      : " + el.find("title").text());
		        console.log("author     : " + el.find("author").text());
		        console.log("description: " + el.find("description").text());
		    });
		});

	}


});