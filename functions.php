<?php
/**
 * Functions Architect
 *
 * Defines theme versiona and includes all theme functions and classes.
 *
 * @package WordPress
 * @subpackage Wellspring
 * @since 1.0.0
 */

/**
 * Define theme version
 *
 * @since 1.0.0
 */
$wellspring_theme = wp_get_theme();
define( 'THEME_VERSION', $wellspring_theme->get( 'Version' ) );

/**
 * Include all functions and classes
 *
 * The $wellspring_includes array determines the code library included in your theme.
 * Add or remove files to the array as needed. Supports child theme overrides.
 * Missing files will produce a fatal error.
 *
 * @since 1.0.0
 */
$wellspring_includes = [
	'inc/assets.php',
	'inc/customizer.php',
	'inc/setup.php',
];
foreach ( $wellspring_includes as $file ) {
	if ( !$filepath = locate_template( $file ) ) {
		trigger_error( sprintf( __( 'Error locating %s for inclusion', 'wellspring' ), $file ), E_USER_ERROR );
	}
	require_once $filepath;
}
unset( $file, $filepath );
