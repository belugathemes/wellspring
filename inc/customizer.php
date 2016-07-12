<?php
/**
 * Theme Customizer Functionality
 *
 * @package WordPress
 * @subpackage Wellspring
 * @since 1.0.0
 */

/**
 * Add postMessage support for site title and description.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 * @since 1.0.0
 */
function wellspring_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';
}
add_action( 'customize_register', 'wellspring_customize_register' );

/**
 * Binds JS handlers to make Customizer preview reload changes asynchronously.
 *
 * @since 1.0.0
 */
function wellspring_customize_preview_js() {
	wp_enqueue_script( 'wellspring-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), THEME_VERSION, true );
}
add_action( 'customize_preview_init', 'wellspring_customize_preview_js' );
