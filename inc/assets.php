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
 * App shell assets
 *
 * Enqueues all application shell assets
 *
 * @since 1.0.0
 */
function wellspring_appshell_assets() {
	// wellspring appshell styles
	wp_enqueue_style( 'wellspring-appshell', get_template_directory_uri() . '/dist/appshell.css', array(), THEME_VERSION );
}
add_action( 'wp_enqueue_scripts', 'wellspring_appshell_assets' );

/**
 * Content assets
 *
 * Enqueues all content assets to the footer
 *
 * @since 1.0.0
 */
function wellspring_content_assets() {
	// react
	wp_enqueue_script( 'react', get_template_directory_uri() . '/dist/vendor/react.min.js', array(), '15.3.0', true );

	// react dom
	wp_enqueue_script( 'react-dom', get_template_directory_uri() . '/dist/vendor/react-dom.min.js', array(), '15.3.0', true );

	// wellspring content bundle
	wp_enqueue_script( 'wellspring-content', get_template_directory_uri() . '/dist/content.js', array('react', 'react-dom'), THEME_VERSION, true );
}
add_action( 'wp_footer', 'wellspring_content_assets' );
