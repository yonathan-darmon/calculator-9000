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
    echo json_encode("coucou");
}
function ecrire(){
    $host = "localhost";
    $db_name = "calculator";
    $login = "root";
    $password = "";
    $connexion=new PDO("'mysql:host'=.$host.';dbname='.$db_name,$login,$password");
    $sth=$connexion->prepare("INSERT INTO calc(`ope`, `result`) VALUES (?,?) ");
    $sth->execute([$_POST['calcul'],$_POST['result']]);
    echo json_encode($_POST);
}
?>