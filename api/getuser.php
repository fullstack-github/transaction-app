<?php
include('dbConnect.php');

$querySelect = mysql_query("SELECT id, name FROM account");
//$result = mysql_fetch_array($querySelect);
$emparray = array();
 while($row = mysql_fetch_assoc($querySelect))
    {
        $emparray[] = $row;
    }

echo json_encode($emparray);
?>
