<?php
include('bayanihan.php'); // Include the connection script

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $creator = mysqli_real_escape_string($connection, $_POST['User_ID']);
    $eventname = mysqli_real_escape_string($connection, $_POST['username']);
    $location = mysqli_real_escape_string($connection, $_POST['email']);
    $eventdate = mysqli_real_escape_string($connection, $_POST['telephone']);
    $expenses = mysqli_real_escape_string($connection, $_POST['expenses']);
    $donationgoal = mysqli_real_escape_string($connection, $_POST['donationgoal']);
    $joiners = 0;

    // Validate and upload the banner image
    $banner_name = $_FILES['banner_image']['name'];
    $banner_temp = $_FILES['banner_image']['tmp_name'];
    $banner_size = $_FILES['banner_image']['size'];
    $banner_ext = explode(".", $banner_name);
    $banner_end = end($banner_ext);
    $allowed_ext = array("jpg", "jpeg", "gif", "png", "JPG", "JPEG", "GIF", "PNG");
    $banner_unique_name = time() . "_banner." . $banner_end;

    if (!is_dir("upload/")) {
        mkdir("upload/");
    }
    $banner_path = "upload/" . $banner_unique_name;

    // Validate and upload the QR code image
    $qr_name = $_FILES['qr_code']['name'];
    $qr_temp = $_FILES['qr_code']['tmp_name'];
    $qr_size = $_FILES['qr_code']['size'];
    $qr_ext = explode(".", $qr_name);
    $qr_end = end($qr_ext);
    $qr_unique_name = time() . "_qr." . $qr_end;

    $qr_path = "upload/" . $qr_unique_name;

    // Validate and move both images
    if (in_array($banner_end, $allowed_ext) && in_array($qr_end, $allowed_ext)) {
        if ($banner_size > 5242880 || $qr_size > 5242880) { // Check file size for both images
            echo "<script>alert('One or more files are too large!');</script>";
            echo "<script>window.location = 'eventForm.html';</script>";
        } else {
            if (move_uploaded_file($banner_temp, $banner_path) && move_uploaded_file($qr_temp, $qr_path)) {
                // Count existing posts by the user
                $count_query = "SELECT COUNT(*) AS post_count FROM events_tbl WHERE Event_Creator = '$creator'";
                $result = mysqli_query($connection, $count_query);
                $post_count = 0;

                if ($result) {
                    $row = mysqli_fetch_assoc($result);
                    $post_count = $row['post_count'];
                }

                // Determine verification status
                $verified = $post_count >= 3 ? 'Y' : 'N';

                // Insert event with verified status
                $query = "INSERT INTO events_tbl (Event_Creator, Event_Name, Location, Event_Date, Banner_Image, Qr_Code, Expenses, Donation_Goal, Joiners, Verified) 
                          VALUES ('$creator', '$eventname', '$location', '$eventdate', '$banner_path', '$qr_path', '$expenses', '$donationgoal', '$joiners', '$verified')";

                if (mysqli_query($connection, $query)) {
                    echo "<script>alert('Event creation successful!');</script>";
                    echo "<script>window.location = 'dashboard.html';</script>";
                } else {
                    echo "<script>alert('Database insertion error: " . mysqli_error($connection) . "');</script>";
                    echo "<script>window.location = 'eventForm.html';</script>";
                }
            } else {
                echo "<script>alert('Failed to move uploaded files.');</script>";
                echo "<script>window.location = 'eventForm.html';</script>";
            }
        }
    } else {
        echo "<script>alert('Invalid image format!');</script>";
        echo "<script>window.location = 'eventForm.html';</script>";
    }
}
?>
