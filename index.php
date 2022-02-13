<?php
/*
Plugin Name: Outlook-wordpress-plugin
Plugin URI: www.google.com
Description: aaaaaaaaaaaaaaaaaaaaaa.
Author: Usama Ebrahim
Version: 0.1
*/

register_activation_hook(__FILE__,'Outlook_calendar_activate');

function getAccessToken($code){
    $url = 'https://login.microsoftonline.com/common/oauth2/v2.0/token';
    $data = array(
        'client_id' => '9fa2e4d4-8647-406f-b10e-ef8749efdf76',
        'scope' => 'Calendars.ReadWrite%20offline_access%20User.Read',
        'code' => $code,
        'redirect_uri' => 'http://localhost/wordpress/wp-admin',
        'grant_type' => 'authorization_code',
        'client_secret' => 'cd129b9b-5c9d-4d93-b5c9-c1ccec1bbcf9',
    );
    
    // use key 'http' even if you send the request to https://...
    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    if ($result === FALSE) { /* Handle error */ }
    
    return $result;
}

if(isset($_GET['code'])){
    // echo "<pre>";
    // print_r($_GET);
    // die;
}
add_action('admin_enqueue_scripts', 'custom_scripts');
add_action('admin_menu', 'add_outlook_menu');

function custom_scripts() {
    wp_enqueue_script('jquery-script', plugin_dir_url(__FILE__) . 'assets/js/jquery-3.6.0.min.js', array('jquery'), null, true); // Here in this example the last value has been set as true, so, it will be loaded in the footer.
    wp_enqueue_script('custom-script', plugin_dir_url(__FILE__) . 'assets/js/script.js', array('jquery'), null, true); // Here in this example the last value has been set as true, so, it will be loaded in the footer.
}


function add_outlook_menu(){
    add_menu_page( 
        'Outlook Calendar Events', 
        'Outlook Calendar Events', 
        'manage_options', 
        'outlook_calendar_events', 
        'outlook_callback_func', 
        'dashicons-chart-pie' ,
        9
    );
}

function outlook_callback_func(){
    echo file_get_contents(plugin_dir_url(__FILE__) ."admin-credentials.php");
}

function Outlook_calendar_activate(){
    global $wpdb;
    $result = $wpdb->get_results ( "CREATE TABLE Outlook_data (
        id int NOT NULL,
        response_key varchar(500),
        response_value varchar(500),
        PRIMARY KEY (ID)
    );" );
}

?>




