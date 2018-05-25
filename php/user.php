<?php
	//emile password username phone
//	$user = @$_POST["username"];
	require("./connect.php");		
	$emile = @$_POST["emile"];//ajax带的全部字段
	$pwd = @$_POST["password"];
	$phone = @$_POST["phone"];
	$type = @$_POST["type"];
	if($type !== "login" && $type !== "register"){
		$res = array("error"=>"");
		die(json_encode($res));
	}
	$sql_login = "SELECT emile,password FROM user_table";
	
	$sql_register = "INSERT user_table(emile,password,phone)
					VALUES
					('{$emile}','{$pwd}','{$phone}') ";
					
	$result_login = $conn->query($sql_login);//返回一个查询结果
	
	if($type == "register"){
		$result_register = $conn->query($sql_register);
		
	}
	$haspwd = FALSE;
	$hasemile =FALSE;
	$phone = FALSE;
	$select_res = FALSE;
	
	while($row = $result_login->fetch_assoc()){//返回根据从结果集取得的行生成的关联数组
		if($row["emile"] == $emile){
			$hasemile = TRUE;
			if($type == "register"){
				break;
			}
			if($row["password"] == $pwd){
				$select_res = json_encode($row);
				$haspwd = TRUE;
				break;
			}
		}
	}
	
	if($type == "login" && $haspwd == TRUE){
		die("1");
	}else if($type == "login"){
		die("0");
	}
	if($type == "register" && $hasemile == TRUE){
		die("2");//用户名重复
	}else if($hasemile == FALSE && $result_register == TRUE){
		die("3");//注册成功
	}								
?>