<?php 

function drop_scripts() {
	wp_deregister_script( 'jquery' );
	wp_register_script( 'jquery', ( 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js' ), false, null, true );
	wp_enqueue_script('modernizr', get_template_directory_uri() . '/js/vendor/modernizr-2.6.2.min.js', false, null, true);
	wp_enqueue_script('jquery');
	#wp_enqueue_script('leaflet', 'http://cdn.leafletjs.com/leaflet-0.6.4/leaflet.js', array('jquery') , null , true);
	wp_enqueue_script('main', get_template_directory_uri() . '/js/main.js', array('jquery') , DROP_VERSION , true);

	//wp_enqueue_script('google_map_api', '', false , null , true);

	wp_enqueue_style("normalize" , get_template_directory_uri() . "/css/normalize.min.css");
	#wp_enqueue_style("leaflet" , "http://cdn.leafletjs.com/leaflet-0.6.4/leaflet.css" , array("normalize"));
	wp_enqueue_style("main_style" , get_template_directory_uri() . "/style.css", array("normalize"));
} 
add_action( 'wp_enqueue_scripts', 'drop_scripts');

?> 