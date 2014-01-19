(function ($) {

$(function () {

	//var map = new map_controller( "map" );
	var map;
	function initialize() {
		// setto le opzioni della mappa
        var mapOptions = {
          center: new google.maps.LatLng(45.47, 9.18),
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: get_customize_map_array()
        };
        //inizializzo la mappa
        map = new google.maps.Map(document.getElementById("map"),mapOptions);
        //aggiungo un marcatore sulla mappa
        var myLatlng = new google.maps.LatLng(45.46, 9.18);
	    var marker = new google.maps.Marker({
	      position: myLatlng,
	      map: map,
	      title: 'Hello World!'
	  	});
	  	//aggiungo un marcatore sulla mappa
	  	var myLatlng = new google.maps.LatLng(45.48, 9.18);
	    var marker = new google.maps.Marker({
	      position: myLatlng,
	      map: map,
	      title: 'Hello World!'
	  	});
	  	//aggiungo un marcatore sulla mappa
	  	var myLatlng = new google.maps.LatLng(45.48, 9.21);
	    var marker = new google.maps.Marker({
	      position: myLatlng,
	      map: map,
	      title: 'Hello World!'
	  	});
	  	
	  	if(false)
	  	window.setTimeout(function() {
	  	  //Muove verso un punto sulla mappa
	      map.panTo(
	      	// recupera la position di un marker
	      	marker.getPosition()
	      	);
	      // zooma verso una posizione
	      map.setZoom(15);
	    }, 3000);

      }
      google.maps.event.addDomListener(window, 'load', initialize);

      $("#map").height( $(window).height() - $("#wpadminbar").height() )

}); /** DOM ready **/


function map_controller ( map_selector ) 
{
	// create a map in the "map" div, set the view to a given place and zoom
	var map = L.map(map_selector).setView([45.46, 9.18], 13);

	// add an OpenStreetMap tile layer
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	// add a marker in the given location, attach some popup content to it and open the popup
	L.marker([45.46, 9.19]).addTo(map)
	    .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
	    .openPopup();

	return { L : L , map : map };
}

function get_customize_map_array () 
{
		return [
		    {
		        "featureType": "water",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#193341"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#2c5a71"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#29768a"
		            },
		            {
		                "lightness": -37
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#406d80"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#406d80"
		            }
		        ]
		    },
		    {
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "color": "#3e606f"
		            },
		            {
		                "weight": 2
		            },
		            {
		                "gamma": 0.84
		            }
		        ]
		    },
		    {
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#ffffff"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "weight": 0.6
		            },
		            {
		                "color": "#1a3541"
		            }
		        ]
		    },
		    {
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.park",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#2c5a71"
		            }
		        ]
		    }
		]
}



})(jQuery);
