<?php
/*
Plugin Name: Outlook-wordpress-plugin
Plugin URI: 
Description: .
Author: Usama Ebrahim
Version: 0.1
*/

register_activation_hook(__FILE__,'Outlook_calendar_activate');
register_deactivation_hook(__FILE__,'Outlook_calendar_deactivate');

function Outlook_calendar_activate(){
    echo get_redirect_url();
}

function get_redirect_url(){
    $redirect_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?
    client_id=9fa2e4d4-8647-406f-b10e-ef8749efdf76
    &response_type=code
    &redirect_uri=http://localhost/outlook/
    &response_mode=query
    &scope=Calendars.ReadWrite User.Read
    &state=12345";

    return $redirect_url;
}

?>