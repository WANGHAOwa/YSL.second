<?php
      $servername = "localhost:3306";
      $username = "root";
      $password = "";
      $dbname = "wanghao";
      $conn = new mysqli($servername, $username, $password,$dbname);
      mysqli_query($conn,"set NAMES UTF8");//防止中文乱码
      // 检测连接
      if ($conn->connect_error) {
          die("连接失败: " . $conn->connect_error);
      }
//       echo "连接成功";
?>