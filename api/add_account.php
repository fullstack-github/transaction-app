<?php
session_start();
include('dbConnect.php');
$post_date = file_get_contents("php://input");
$data = json_decode($post_date);

$querySelect = mysql_query("SELECT count(id) as totalCount  FROM account ORDER BY id desc limit 0,1");
$result = mysql_fetch_array($querySelect);
$accountID = $result['totalCount']+1;

    $query = "INSERT INTO account (account_id,name,email,balance) VALUES ('".$accountID."','".$data->name."','".$data->email."','".$data->balance."')";
mysql_query($query);
	$_SESSION['userName'] = $data->name;

	$lastID = mysql_insert_id();
	$data = array("name"=>$data->name,"userId"=>$lastID,"balance"=>$data->balance);
	echo json_encode($data);
?>
