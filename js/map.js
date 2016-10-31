$(function() {

	var LENGHT = 150;
	var center = [40.8030459,16.9299694];

	// comuni della rete
	var gioia = [16.9299694, 40.8030459];
	var valenzano = [16.8666082, 41.0458656];
	var gravina = [16.4074053, 40.8183414];

	// accessToken MapBox
	mapboxgl.accessToken = 'pk.eyJ1IjoiY29tdW5lZ2lvaWEiLCJhIjoiY2lyM2N1MzVkMDAxZWhzbnFka3IzcW8xNiJ9.01RuiMkZJs1XwEwMLOZLDw';
	
	var map = new mapboxgl.Map({
	    container: 'map',
	    style: 'mapbox://styles/mapbox/light-v9',
	    center: gioia,
	    zoom: 7
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
                "iconSize": [64,64],
                "rss": "https://gioialab.github.io/feed-antennapon.xml"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": valenzano
            },
            "properties": {
                "title": "Valenzano",
                "iconSize": [64,64],
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
                "iconSize": [64,64],
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
	    el.style.width = marker.properties.iconSize[0] + 'px';
	    el.style.height = marker.properties.iconSize[1] + 'px';

	    console.log('reading ' + marker.properties.rss);

	    getRSS(marker.properties.rss, function (html, isFeed) {

	    	var h;

    		if (isFeed) {
    			el.style.backgroundImage = 'url(https://gioialab.github.io/antennapon-puglia/img/LOGO-ANTENNAPON_64.png)';
    			h = html;
    		} else {
    			h = marker.properties.title;
    			el.style.backgroundImage = 'url(https://gioialab.github.io/antennapon-puglia/img/logo-antenna-pon-black_64.png)';
    		};

    		var popup = new mapboxgl.Popup({offset:[0, -30]})
				.setHTML(h);

			addMarker(marker, el, popup);
    	});

	});

	function addMarker(marker, el, popup) {
		// add marker to map
		console.log('adding marker ...');

	    new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
	        .setLngLat(marker.geometry.coordinates)
	        .setPopup(popup) 
	        .addTo(map);
	};

	function getRSS(feed, callback) {

		var isFeed = false;

		$.get(feed, function (data) {

			if ($(data).find("item")) {

				console.log('check entries founded ...');

				var html = '<div class="list-group">';

			    $(data).find("item").each(function () { // or "item" or whatever suits your feed
			        
			    	console.log('entries founded ...');

			        var el = $(this);

			        isFeed = true;

			        var title = el.find("title").text();
			        var author = el.find("author").text();
			        var description = el.find("description").text().substring(0, LENGHT);
			        var link = el.find("link").text();

			        html += '<a href="' + link + '" class="list-group-item" target="_blank">' + title + '</a>';

			        console.log("------------------------");
			        console.log("title      : " + title);
			        console.log("author     : " + author);
			        console.log("description: " + description);

			    });

			    html += '</div>';

			    callback(html, isFeed);

			} else {

				console.log('entries not found ...');

				callback("", isFeed);

			}

		});

	}


});