<?php
/**
 * Assets Management
 *
 * @package WordPress
 * @subpackage Wellspring
 * @since 1.0.0
 */

/**
 * Remove jQuery Migrate from the front-end
 *
 * @since 1.0.0
 */
function wellspring_remove_jquery_migrate( &$scripts ) {
    if ( !is_admin() ) {
        $scripts->remove( 'jquery' );
        $scripts->add( 'jquery', false, array( 'jquery-core' ), null, true );
    }
}
add_filter( 'wp_default_scripts', 'wellspring_remove_jquery_migrate' );

/**
 * Enqueues fonts, stylesheet and scripts.
 *
 * @since 1.0.0
 */
function wellspring_scripts() {
	// wellspring stylesheet
	wp_enqueue_style( 'wellspring-style', get_template_directory_uri() . '/css/app.css', array(), THEME_VERSION  );

	// wellspring scripts
	wp_enqueue_script( 'wellspring-scripts', get_template_directory_uri() . '/js/app.js', array( 'jquery' ), THEME_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'wellspring_scripts' );
