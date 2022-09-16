<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");

 if($_GET['sort']=='affiche'){
     affiche();
 }
 else if($_GET['sort']=='ecrire'){
     ecrire();
 }

 function affiche(){
     $dbname   = 'calculator';
     $username = 'root';
     $password = '';
     $pdo = new \PDO("mysql:host=localhost;dbname=$dbname", $username,  $password);
     $sth=$pdo->prepare("SELECT * FROM `calc` ");
     $sth->execute();
     $result=$sth->fetchAll(PDO::FETCH_ASSOC);
     echo json_encode($result);
 }

 function ecrire(){
     $dbname   = 'calculator';
     $username = 'root';
     $password = '';
     $pdo = new \PDO("mysql:host=localhost;dbname=$dbname", $username,  $password);
     $sth=$pdo->prepare("INSERT INTO calc(`ope`, `result`) VALUES (?,?) ");
     $sth->execute([$_POST['calcul'],$_POST['result']]);
     echo json_encode($_POST);
 }
?>