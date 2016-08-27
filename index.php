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
        <!-- <section class="title-bar">
            <a class="nav__title" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
    			<?php bloginfo( 'name' ); ?>
    	    </a>
        </section> -->
        <nav class="nav">
        	<div class="container">
                <ul class="nav__menu">
            		<!-- title -->
                    <li>
                        <a class="nav__title" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                			<?php bloginfo( 'name' ); ?>
            		    </a>
                    </li>
            		<!-- menu items -->
            		<?php
            	    wp_nav_menu(array(
            	        'theme_location' => 'main_nav',
            	        'depth'          => 1,
            			'container'		 => 0,
                        'items_wrap'     => '%3$s',
            		));
            		?>
                </ul>
        	</div>
        </nav>

		<!-- Content -->
		<main id="content" class="container"></main>

		<!-- Footer -->
		<footer class="footer">
            <div class="container">
                Copyright &copy; 1600&ndash;<?php echo date('Y'); ?> FriendlyCorp Inc. <?php esc_html_e( 'All right reserved.', 'wellspring' ); ?>
            </div>
		</footer>
		<?php wp_footer() ?>
	</body>
</html>
