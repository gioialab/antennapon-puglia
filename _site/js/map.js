$(function() {

	var LENGHT = 150;
	var center = [40.8030459,16.9299694];

	// comuni della rete
	var gioia = [16.9189, 40.7855]; 
	var valenzano = [16.8847, 41.0358]; 
	var gravina = [16.4074053, 40.8183414];
	var rutigliano = [16.9968893, 41.011411];
	var andria = [16.2566206, 41.2268752];
	var noci = [17.1096073, 40.7921106];
	var melpignano = [18.2830205, 40.1568388];
	var gallipoli = [17.9767792, 40.054619];
	var statte = [17.1807261, 40.5600379];
	var laterza = [16.7788728, 40.6280346];
	var grottaglie = [17.4226083, 40.5380094];
	var mesagne = [17.7879097, 40.5578195];
	var brindisi = [17.9009351, 40.6422899];
	var modugno = [16.7455054, 41.0944965];
	var cisternino = [17.4173681, 40.74321];
	var bitonto = [16.67318, 41.1088698];
	var valenzano = [16.8666082, 41.0458979];
	var bari = [16.8713, 41.1154]; 
	var metro_bari = [16.2406439, 40.960401];
	var sannicandro = [16.788705, 41.0006321];
	var acquaviva = [16.8345383, 40.8966031];
	var molfetta = [16.5807147, 41.198385];
	var barletta = [16.2468982, 41.3155561];
	var rocchetta = [15.4559827, 41.1030223];
	var manfredonia = [15.8890175, 41.6275148];
	var poggioimperiale = [15.3577741, 41.8244354];
	var troia = [15.3049869, 41.3628323];
	var pietramontecorvino = [15.1242897, 41.5428537];
	var orsara = [15.2639785, 41.2811469];
	var ascoli = [15.5577471, 41.204839];
	var gal_ioniche = [17.4255389, 40.5354067];
	var gal_andria_corato = [16.4109456, 41.1537817];

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
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": rutigliano
            },
            "properties": {
                "title": "Rutigliano",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": andria
            },
            "properties": {
                "title": "Andria",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": noci
            },
            "properties": {
                "title": "Noci",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": melpignano
            },
            "properties": {
                "title": "Melpignano",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": gallipoli
            },
            "properties": {
                "title": "Gallipoli",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": statte
            },
            "properties": {
                "title": "Statte",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": laterza
            },
            "properties": {
                "title": "Laterza",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": grottaglie
            },
            "properties": {
                "title": "Grottaglie",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": mesagne
            },
            "properties": {
                "title": "Mesagne",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": brindisi
            },
            "properties": {
                "title": "Brindisi",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": modugno
            },
            "properties": {
                "title": "Modugno",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": cisternino
            },
            "properties": {
                "title": "Cisternino",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": bitonto
            },
            "properties": {
                "title": "Bitonto",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
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
                "coordinates": bari
            },
            "properties": {
                "title": "Bari",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": sannicandro
            },
            "properties": {
                "title": "Sannicandro",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": acquaviva
            },
            "properties": {
                "title": "Acquaviva delle Fonti",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": molfetta
            },
            "properties": {
                "title": "Molfetta",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": barletta
            },
            "properties": {
                "title": "Barletta",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": rocchetta
            },
            "properties": {
                "title": "Rocchetta Sant\'Antonio",
                "iconSize": [64,64],
                "rss": "http://log01.it/blog/feed/"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": manfredonia
            },
            "properties": {
                "title": "Manfredonia",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": poggioimperiale
            },
            "properties": {
                "title": "Poggio Imperiale",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": troia
            },
            "properties": {
                "title": "Troia",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": pietramontecorvino
            },
            "properties": {
                "title": "Pietra Monte Corvino",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": orsara
            },
            "properties": {
                "title": "Orsara di Puglia",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": ascoli
            },
            "properties": {
                "title": "Ascoli Satriano",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": metro_bari
            },
            "properties": {
                "title": "Città Metropolitana di bari",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": gal_ioniche
            },
            "properties": {
                "title": "Gal Colline Ioniche",
                "iconSize": [64,64],
                "rss": ""
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": gal_andria_corato
            },
            "properties": {
                "title": "Gal di Andria e Corato",
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

        $.ajax({
            type: "GET",
            url: feed,
            dataType: "xml",
            success: function (xml) {
                
                console.log(xml);

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
            }
        });



        /*
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
        */

	}


});