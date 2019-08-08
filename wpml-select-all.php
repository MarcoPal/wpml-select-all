<?php
/*
Plugin Name:  WPML Select All
Plugin URI:   https://github.com/marcopal
Description:  Adds a box to "select all" the WPML multilingual options on the Wordpress edit page.
Version:      1.0.0
Author:       Marco Pal
Author URI:   https://github.com/marcopal
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  _
Domain Path:  _
*/

defined('ABSPATH') or die('No Way!');

function add_admin_scripts($hook)
{
    if ($hook == 'post-new.php' || $hook == 'post.php') {
        wp_enqueue_script('wpml-select-all', plugin_dir_url(__FILE__) . 'wpmlSelectAll.js', [], '1.0.0');
    }
}

add_action('admin_enqueue_scripts', 'add_admin_scripts', 10, 1);