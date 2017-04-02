<?php
/**
 * Application Shell
 *
 * This is the main and only template. Everything else is rendered by React.
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
    <!-- Manifest & Icons -->
    <link rel="manifest" href="<?php echo esc_url( get_template_directory_uri() ); ?>/manifest.json">
    <link rel="icon" type="image/png" href="<?php echo esc_url( get_template_directory_uri() ); ?>//icons/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="<?php echo esc_url( get_template_directory_uri() ); ?>//icons/favicon-16x16.png" sizes="16x16">
    <link rel="shortcut icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>//icons/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo esc_url( get_template_directory_uri() ); ?>//icons/apple-touch-icon.png">
    <link rel="mask-icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>//icons/safari-pinned-tab.svg" color="#1d3545">
    <meta name="msapplication-config" content="<?php echo esc_url( get_template_directory_uri() ); ?>/browserconfig.xml">
    <meta name="theme-color" content="#1d3545">
	<?php wp_head(); ?>
</head>
<body>
    <div id="app"></div>
    <?php wp_footer() ?>
</body>
</html>
