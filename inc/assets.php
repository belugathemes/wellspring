<?php
/**
 * Assets Management
 *
 * @package WordPress
 * @subpackage Wellspring
 * @since 1.0.0
 */

/**
 * Remove jQuery from the front-end
 *
 * @since 1.0.0
 */
function wellspring_remove_scripts($scripts) {
    if ( !is_admin() ) {
        // wp_deregister_script( 'jquery' );
        // wp_deregister_script( 'wp-embed' );
        $scripts->remove( 'jquery' );
        $scripts->add( 'jquery', false, array( 'jquery-core' ), null, true );
    }
}
//add_filter( 'init', 'wellspring_remove_scripts' );

/**
 * Enqueues fonts, stylesheet and scripts.
 *
 * @since 1.0.0
 */
function wellspring_scripts() {
	// wellspring appshell styles
	wp_enqueue_style( 'wellspring-appshell', get_template_directory_uri() . '/dist/appshell.css', array(), THEME_VERSION  );

	// react
	wp_enqueue_script( 'react', 'https://npmcdn.com/react@15.3.0/dist/react.min.js', array(), null, true );

	// react dom
	wp_enqueue_script( 'react-dom', 'https://npmcdn.com/react-dom@15.3.0/dist/react-dom.min.js', array(), null, true );

	// wellspring content styles
	wp_enqueue_style( 'wellspring-content', get_template_directory_uri() . '/dist/content.css', array(), THEME_VERSION );

	// wellspring content bundle
	wp_enqueue_script( 'wellspring-content', get_template_directory_uri() . '/dist/content.js', array('react', 'react-dom'), THEME_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'wellspring_scripts' );
