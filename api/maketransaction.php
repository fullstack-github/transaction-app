<?php
include('dbConnect.php');
$post_date = file_get_contents("php://input");
$data = json_decode($post_date);

	$queryFromSelect = mysql_query("SELECT name, email,balance FROM account where id=".$data->from."");
	$resultFrom = mysql_fetch_array($queryFromSelect);
	$balanceFrom = $resultFrom['balance'];

	$queryToSelect = mysql_query("SELECT email,balance FROM account where id=".$data->to."");
	$resultTo = mysql_fetch_array($queryToSelect);
	$balanceTo = $resultTo['balance'];
	
	if($data->amount < $balanceFrom){
		$query = "INSERT INTO maketransaction (from1,to1,amount) VALUES ('".$data->from."','".$data->to."','".$data->amount."')";
		mysql_query($query);

		$leftBalance = $balanceFrom-$data->amount;
		$queryFromUpdate = "UPDATE account SET balance='".$leftBalance."' WHERE id=".$data->from."";
		mysql_query($queryFromUpdate);

		$addBalance = $balanceTo+$data->amount;
		$queryToUpdate = "UPDATE account SET balance='".$addBalance."' WHERE id=".$data->to."";
		mysql_query($queryToUpdate);

		$to = $resultTo['email'];
		$subject = "Transaction";
		$txt = "".$resultFrom['name']." added ".$data->amount." in your account";
		$headers = "From: ".$resultFrom['email'];

		mail($to,$subject,$txt,$headers);

		$data = array("balance"=>$leftBalance);
		echo json_encode($data);
	}
	else{
		echo "false";
	}
	
?>
