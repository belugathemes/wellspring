<?php
/**
 * Navigation
 *
 * Sets up navigation menus and cleans up the HTML output.
 *
 * @package WordPress
 * @subpackage Wellspring
 * @since 1.0.0
 */

if ( ! function_exists( 'wellspring_nav_menus' ) ) :
/**
 * Register navigation menus
 *
 * @since 1.0.0
 */
function wellspring_nav_menus() {
	register_nav_menus( array(
		'main_nav' => esc_html__( 'Main Navigation', 'wellspring' ),
	));
}
endif;
add_action( 'after_setup_theme', 'wellspring_nav_menus' );

if ( ! function_exists( 'wellspring_nav_ids' ) ) :
/**
 * Clean up navigation ids
 *
 * @since 1.0.0
 */
function wellspring_nav_ids( $var ) {
	return null;
}
endif;
add_filter('nav_menu_item_id', 'wellspring_nav_ids', 100, 1);

if ( ! function_exists( 'wellspring_nav_classes' ) ) :
/**
 * Clean up navigation classes
 *
 * @since 1.0.0
 */
function wellspring_nav_classes( $var ) {
	return is_array($var) ? array_intersect($var, array(
        // remove all classes except these
        'current-menu-item',
    )) : '';
}
endif;
add_filter('nav_menu_css_class', 'wellspring_nav_classes', 100, 1);

if ( ! function_exists( 'wellspring_nav_active_class' ) ) :
/**
 * Replaces "current-menu-item" with "active"
 *
 * @since 1.0.0
 */
function wellspring_nav_active_class($text){
	$replace = array(
		// menu item classes that should be changed to "active"
		'current-menu-item' => 'active',
	);
	$text = str_replace(array_keys($replace), $replace, $text);
		return $text;
	}
endif;
add_filter ('wp_nav_menu','wellspring_nav_active_class');
