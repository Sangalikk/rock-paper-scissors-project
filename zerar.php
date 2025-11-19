<?php
session_start();

$_SESSION['status'] = true; 
$_SESSION['placar'] = [
    'jogador' => 0,
    'sistema' => 0
];

die(json_encode([
    'placar' => $_SESSION['placar'],
    'status' => $_SESSION['status']
])); 