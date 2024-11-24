<?php
include('bayanihan.php'); // Include the connection script

// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userid = mysqli_real_escape_string($connection, $_POST['User_ID']);
    $eventid = mysqli_real_escape_string($connection, $_POST['Event_ID']);
    
    // Insert into joined_events table
    $query = "INSERT INTO joined_events (Event_ID, User_ID) VALUES ('$eventid', '$userid')";

    if (mysqli_query($connection, $query)) {
        // Update the joiners count in the events table
        $updateQuery = "UPDATE events SET joiners = joiners + 1 WHERE Event_ID = '$eventid'";

        if (mysqli_query($connection, $updateQuery)) {
            echo '<script>alert("Joined successfully and joiners count updated!");</script>';
            echo '<script>window.location.assign("login.html");</script>';
        } else {
            echo '<script>alert("Error updating joiners count: ' . mysqli_error($connection) . '");</script>';
        }
    } else {
        echo '<script>alert("Error: ' . mysqli_error($connection) . '");</script>';
        echo '<script>window.location.assign("signup.html");</script>';
    }
}
?>
