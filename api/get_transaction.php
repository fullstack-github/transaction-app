<?php
include('dbConnect.php');

$querySelect = mysql_query("SELECT a1.name as fromname, a2.name as toname, m.amount FROM maketransaction as m LEFT JOIN account as a1 ON a1.id=m.from1 LEFT JOIN account as a2 ON a2.id=m.to1 where (from1=".$_GET['userid']." or to1=".$_GET['userid'].")");
//$querySelect = mysql_query("SELECT a1.name as fromname, a2.name as toname, m.amount FROM maketransaction as m LEFT JOIN account as a1 ON a1.id=m.from1 LEFT JOIN account as a2 ON a2.id=m.to1");
$emparray = array();
 while($row = mysql_fetch_assoc($querySelect))
    {
        $emparray[] = $row;
    }

echo json_encode($emparray);
?>
