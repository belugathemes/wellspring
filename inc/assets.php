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
 * App scripts
 *
 * Enqueues app scripts to the footer
 *
 * @since 1.0.0
 */
function wellspring_scripts() {
	// wellspring app bundle
	wp_enqueue_script( 'wellspring', get_template_directory_uri() . '/dist/app.js', array(), null, true );
}
add_action( 'wp_enqueue_scripts', 'wellspring_scripts' );

/**
 * App shell assets
 *
 * WILL BE DEPRACATED WITH STYLE COMPONENTS!!!
 *
 * @since 1.0.0
 */
function wellspring_appshell_assets() {
	// wellspring appshell styles
	wp_enqueue_style( 'wellspring-appshell', get_template_directory_uri() . '/dist/appshell.css', array(), THEME_VERSION );
}
add_action( 'wp_enqueue_scripts', 'wellspring_appshell_assets' );
