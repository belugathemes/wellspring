<?php
/**
 * Application Shell
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
        <!-- Navigation -->
        <nav class="nav">
        	<div class="container">
        		<!-- title -->
        		<a class="nav__title" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
        			<?php bloginfo( 'name' ); ?>
        		</a>
        		<!-- menu items -->
        		<?php
        	    wp_nav_menu(array(
        	        'theme_location' => 'main_nav',
        	        'depth'          => 1,
        			'container'		 => 0,
        	        'menu_class'     => 'nav__menu',
                    'items_wrap'     => '<ul class="%2$s">%3$s</ul>',
        		));
        		?>
        	</div>
        </nav>

		<!-- Content -->
		<main id="content"></main>

		<!-- Footer -->
		<footer id="footer">
            Copyright &copy; 1600&ndash;<?php echo date('Y'); ?> FriendlyCorp Inc. <?php esc_html_e( 'All right reserved.', 'wellspring' ); ?>
		</footer>
		<?php wp_footer() ?>
	</body>
</html>
