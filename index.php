<?php
/*
Plugin Name: Outlook-wordpress-plugin
Plugin URI: www.google.com
Description: aaaaaaaaaaaaaaaaaaaaaa.
Author: Usama Ebrahim
Version: 0.1
*/

register_activation_hook(__FILE__,'Outlook_calendar_activate');
register_deactivation_hook(__FILE__,'Outlook_calendar_deactivate');

// add_action('admin_enqueue_scripts', 'custom_scripts');


// function custom_scripts() {
//     wp_enqueue_script('jquery-script', plugin_dir_url(__FILE__) . 'assets/js/jquery-3.6.0.min.js', array('jquery'), null, true); // Here in this example the last value has been set as true, so, it will be loaded in the footer.
//     wp_enqueue_script('custom-script', plugin_dir_url(__FILE__) . 'assets/js/script.js', array('jquery'), null, true); // Here in this example the last value has been set as true, so, it will be loaded in the footer.
// }

function add_outlook_menu(){
    add_menu_page( 
        'Outlook Calendar Events', 
        'Outlook Calendar Events', 
        'manage_calendar', 
        'outlook_calendar_events', 
        'outlook_callback_func', 
        'dashicons-chart-pie' ,
        6
    );
}

add_action('admin_menu', 'add_outlook_menu');

// function outlook_callback_func(){
// echo "Sssssssssssssss";
// }

// function Outlook_calendar_activate(){
//     echo get_redirect_url();
// }

// function get_redirect_url(){
//     $redirect_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=9fa2e4d4-8647-406f-b10e-ef8749efdf76&response_type=code&redirect_uri=http://localhost/outlook/&response_mode=query&scope=Calendars.ReadWrite%20User.Read&state=12345";
//     return $redirect_url;
// }

?>
<button id="test">Click me!</button>


<script>
    
</script>




