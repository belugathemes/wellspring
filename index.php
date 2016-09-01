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
            <header class="nav__header">
            	<div class="container">
                    <a class="nav__title" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
            			<?php bloginfo( 'name' ); ?>
            	    </a>
                    <button class="nav__toggle" href="#">
            			<div class="nav__toggle__text">Menu</div>
                        <div class="nav__toggle__icon">
                            <span class="iconbar"></span>
                            <span class="iconbar"></span>
                            <span class="iconbar"></span>
                        </div>
            	    </button>
                </div>
            </header>
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

		<!-- Off-Canvas Toggle Control -->
        <script>
            var toggle = document.querySelector('.nav__toggle');
            var content = document.getElementById('content');
            toggle.addEventListener('click', function(e) {
                toggle.classList.toggle('close');
                content.classList.toggle('reveal');
                e.preventDefault();
            }, false);
        </script>
		<?php wp_footer() ?>
	</body>
</html>
