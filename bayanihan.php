<?php
$host = 'localhost:3307';
$user = 'root';
$password = '';
$dbname = 'bayanihan_data';

// Create the connection
$connection = mysqli_connect($host, $user, $password, $dbname);

// Check the connection
if (!$connection) {
    die("Database connection failed: " . mysqli_connect_error());
}
?>
