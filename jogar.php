<?php
session_start();

$_SESSION['jogada'] = rand(1, 3); 
$_SESSION['status'] = true; 
$_SESSION['placar'] = [
    'jogador' => 0,
    'sistema' => 0, 
]; 

if($_SESSION['jogada'] == 1){
    $_SESSION['jogada'] = 'Pedra';
}else if($_SESSION['jogada'] == 2){
    $_SESSION['jogada'] = 'Papel';
}else if($_SESSION['jogada'] == 3){
    $_SESSION['jogada'] = 'Tesoura';
}

die(json_encode([
    'placar' => $_SESSION['placar'],
    'status' => true 
])); 