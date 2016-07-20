<?php
/**
 * The Main Template
 *
 * This is the main and only template. Everything else is rendered with React.
 *
 * @package WordPress
 * @subpackage Wellspring
 * @since 1.0.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<?php wp_head(); ?>
	</head>
	<body>
		<div id="app"></div>
		<?php wp_footer() ?>
	</body>
</html>
