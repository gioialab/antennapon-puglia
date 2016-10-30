$(function() {

	/*
	var accessToken = 'pk.eyJ1IjoiY29tdW5lZ2lvaWEiLCJhIjoiY2lyM2N1MzVkMDAxZWhzbnFka3IzcW8xNiJ9.01RuiMkZJs1XwEwMLOZLDw';
	var mapbox_url = 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token="' + accessToken + '"';

	var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    	denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    	aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    	golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

    var cities = L.layerGroup([littleton, denver, aurora, golden]);

	var base = L.tileLayer(mapbox_url, {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18,
    	id: 'your.mapbox.project.id',
    	accessToken: accessToken
	});

	var mymap = L.map('mapid', {
	    center: [39.73, -104.99],
	    zoom: 10,
	    layers: [base, cities]
	});
	*/

	var center = [40.8030459,16.9299694];

	var map = L.Mapzen.map('map');
  	// Set the center of the map to be the San Francisco Bay Area at zoom level 12
  	map.setView(center, 8);



});