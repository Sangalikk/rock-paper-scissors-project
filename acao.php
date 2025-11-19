<?php
session_start();

if (!(isset($_SESSION['status']) && $_SESSION['status']))
    die(json_encode(['status' => false]));

$jogada = $_POST['jogada']; 

if($jogada == $_SESSION['jogada']){
    $resultado = 0;
}else if($jogada == 'Pedra' && $_SESSION['jogada'] == 'Tesoura'){
    $resultado = 1;
}else if($jogada == 'Papel' && $_SESSION['jogada'] == 'Tesoura'){
    $resultado = -1;
}else if($jogada == 'Tesoura' && $_SESSION['jogada'] == 'Pedra'){
    $resultado = -1;
}else if($jogada == 'Tesoura' && $_SESSION['jogada'] == 'Papel'){
    $resultado = 1;
}else if($jogada == 'Pedra' && $_SESSION['jogada'] == 'Papel'){
    $resultado = -1;
}else if($jogada == 'Papel' && $_SESSION['jogada'] == 'Pedra'){
    $resultado = 1;
}
$_SESSION['status'] = $resultado !== 1; 

die(json_encode([
    'status' => $_SESSION['status'],
    'resultado' => $resultado, 
    'placar' => $_SESSION['placar']
]));