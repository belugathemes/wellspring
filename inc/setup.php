<?php
/**
 * Theme Setup
 *
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * @package WordPress
 * @subpackage Wellspring
 * @since 1.0.0
 */

if ( ! function_exists( 'wellspring_remove_default_image_sizes' ) ) :
/**
 * Remove default image sizes
 *
 * @since 1.0.0
 */
function wellspring_remove_default_image_sizes( $sizes) {
    unset( $sizes['thumbnail']);
    unset( $sizes['medium']);
    unset( $sizes['medium_large']);
    unset( $sizes['large']);
    return $sizes;
}
endif;
add_filter('intermediate_image_sizes_advanced', 'wellspring_remove_default_image_sizes');

if ( ! function_exists( 'wellspring_setup' ) ) :
/**
 * Sets up theme defaults
 *
 * @since 1.0.0
 */
function wellspring_setup() {
	// Make theme available for translation
	load_theme_textdomain( 'wellspring', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links
	add_theme_support( 'automatic-feed-links' );

	// Document title managed by WP
	add_theme_support( 'title-tag' );

	// Featured image support
	add_theme_support( 'post-thumbnails' );
	// add full width image size (image is resized)
	add_image_size( 'full-width-image', 1080, null, false );
	// add featured image size (width is resized, height is cropped)
	add_image_size( 'featured-image', 1080, 360, array( false, true ) );

	// Navigation locations
	register_nav_menus( array(
		'main_nav' => esc_html__( 'Main Navigation', 'wellspring' ),
		'footer_nav' => esc_html__( 'Footer Navigation', 'wellspring' ),
	));

    // Post formats
	add_theme_support( 'post-formats', array(
		'audio',
		'aside',
		'gallery',
		'image',
		'link',
		'quote',
		'video',
	) );
}
endif;
add_action( 'after_setup_theme', 'wellspring_setup' );

if ( ! function_exists( 'wellspring_content_width' ) ) :
/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @since 1.0.0
 * @global int $content_width
 */
function wellspring_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'wellspring_content_width', 720 );
}
endif;
add_action( 'after_setup_theme', 'wellspring_content_width', 0 );
