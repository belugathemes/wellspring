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

if ( ! function_exists( 'wellspring_clean_head' ) ) :
/**
 * Clean up WordPress head
 *
 * @since 1.0.0
 */
function wellspring_clean_head () {
    // emoji
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );

    // oEmbed
    remove_filter( 'oembed_dataparse', 'wp_filter_oembed_result', 10 );
    remove_action( 'rest_api_init', 'wp_oembed_register_route' );
    remove_action( 'wp_head', 'wp_oembed_add_discovery_links', 10 );
    remove_action( 'wp_head', 'wp_oembed_add_host_js' );

    // rest api link
    remove_action( 'template_redirect', 'rest_output_link_header', 11, 0 );
    remove_action( 'wp_head', 'rest_output_link_wp_head', 10 );

    // really simple discovery
    remove_action( 'wp_head', 'rsd_link' );

    // shortlink
    remove_action( 'wp_head', 'wp_shortlink_wp_head', 10, 0 );

    // windows live writer support
    remove_action( 'wp_head', 'wlwmanifest_link' );

    // wordpress version
    remove_action( 'wp_head', 'wp_generator' );
}
endif;
add_action('after_setup_theme', 'wellspring_clean_head');

if ( ! function_exists( 'wellspring_resource_hints' ) ) :
/**
 * Use resource hints for unique scripts & styles only
 *
 * @since 1.0.0
 */
function wellspring_resource_hints( $hints, $relation_type ) {
    if ( 'dns-prefetch' === $relation_type ) {
        return wp_dependencies_unique_hosts();
    }
    return $hints;
}
endif;
add_filter( 'wp_resource_hints', 'wellspring_resource_hints', 10, 2 );

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

	// Document title managed by WP
	add_theme_support( 'title-tag' );

	// Featured image support
	add_theme_support( 'post-thumbnails' );
	// add full width image size (image is resized)
	add_image_size( 'full-width-image', 1080, null, false );
	// add featured image size (width is resized, height is cropped)
	add_image_size( 'featured-image', 1080, 360, array( false, true ) );
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
