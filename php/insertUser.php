<?php
	$user = 'u491896019_kuba';
	$haslo = 'Kuba1234';
	$host = '31.170.164.153';
	$baza = 'u491896019_mobilne';
	
	$conn = mysqli_connect($host,$user,$haslo);
	$db = mysqli_select_db($conn, $baza);
	
	$ED = file_get_contents('php://input');
	$DD = json_decode($ED,true);
	
	if(isSet($mail)){
		$mail = $DD['mail'];
		$pass = $DD['pass'];
		$telefon = $DD['telefon'];
	
		$q = "INSERT INTO `klienci` VALUES (NULL,'$mail','$pass',$telefon,'Tak','Kuba','Racz');";
		$r = mysqli_query($conn,$q);
		if($r){
			$mess ="Stworzono nowe konto";
		}
		else
		{
			$mess ="Niepowodzenie";
		}
		
		$res[] = array("Mess"=>$mess);
	}
?>