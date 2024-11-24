<?php
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $dbname = 'bayanihan_data';

    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

    try{
        $connection = mysqli_connect($host, $user, $password, $dbname);
    }catch (Exception $ex)
    {
        echo'errors';
    }

    if(isset($User_ID)){

        $query1 = "SELECT *
        FROM events_tbl";
        $result1 = $connection->query($Precaution_query);

        $query2 = "SELECT Event_ID, SUM(Amount_Donated) As Total_Amount
        FROM donation
        GROUP BY Event_ID";
        $result2 = $connection->query($query2);

        $query2 = "SELECT *
        FROM joined_events";
        $result2 = $connection->query($Precaution_query);
    
    }
?>
