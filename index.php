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
        <!-- Top Bar -->
        <section class="topbar">
        	<div class="container">
                <a class="topbar__title" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
        			<?php bloginfo( 'name' ); ?>
        	    </a>
                <button class="topbar__toggle" href="#">
        			<div class="topbar__toggle--text">Menu</div>
                    <div class="topbar__toggle--icon">
                        <span class="iconbar"></span>
                        <span class="iconbar"></span>
                        <span class="iconbar"></span>
                    </div>
        	    </button>
            </div>
        </section>
        <!-- Off-Canvas Navigation -->
        <nav class="nav">
            <ul class="nav__menu">
        		<?php
        	    wp_nav_menu(array(
        	        'theme_location' => 'main_nav',
        	        'depth'          => 1,
        			'container'		 => 0,
                    'items_wrap'     => '%3$s',
        		));
        		?>
            </ul>
        </nav>

		<!-- Content -->
		<main id="content" class="container"></main>

		<!-- Footer -->
		<footer class="footer">
            <div class="container">
                Copyright &copy; 1600&ndash;<?php echo date('Y'); ?> FriendlyCorp Inc. <?php esc_html_e( 'All right reserved.', 'wellspring' ); ?>
            </div>
		</footer>
		<!-- Off Canvas Navigation Control -->
        <script>
            var toggle = document.querySelector(".topbar__toggle");
            var menu = document.querySelector(".nav");
            toggle.addEventListener('click', function(e) {
                toggle.classList.toggle('close');
                menu.classList.toggle('opened');
                e.preventDefault();
            }, false);
        </script>
		<?php wp_footer() ?>
	</body>
</html>
