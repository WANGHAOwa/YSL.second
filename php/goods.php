<?php
	require("./connect.php");
	$link = @$_POST["link"];
	$title = @$_POST["title"];
	$connect = @$_POST["connect"];
	$price = @$_POST["price"];
	$type = @$_POST["type"];
//查询数据库
	if($type == "select"){
		$sql_select = "SELECT * FROM goods";
		$result_select = $conn->query($sql_select);
		if($result_select->num_rows > 0){
			while($row = $result_select->fetch_assoc()){
				$rows[] = $row;
			}
			echo json_encode($rows);
		}
	}
	
//插入数据库	
	if($type == "add"){
		$sql_add = "INSERT goods(link,title,connect,price)
			VALUES
			('{$link}','{$title}','{$connect}','{$price}')";
		$result_add = $conn->query($sql_add);
		if($result_add){
			echo "插入成功";
		}else{
			echo "插入失败";
		}
	}
//	echo $type;	
?>