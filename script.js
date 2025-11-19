const btnIniciar = document.getElementById('btnIniciar');
const form = document.getElementById('form')
const pedra = document.getElementById('pedra')
const papel = document.getElementById('papel')
const tesoura = document.getElementById('tesoura')
const mensagem = document.getElementById('mensagem')
const btnReiniciar = document.getElementById('btnReiniciar')
const placarJ = document.getElementById('jogador')
const placarS = document.getElementById('sistema')
const btnZerar = document.getElementById('btnZerar')

let jogada = null
let placarJogador = 0
let placarSistema = 0

pedra.addEventListener('click', () => {
    jogada = 'Pedra'
})
papel.addEventListener('click', () => {
    jogada = 'Papel'
})
tesoura.addEventListener('click', () => {
    jogada = 'Tesoura'
})


btnIniciar.addEventListener('click', async () => {
    const resposta = await fetch('jogar.php')
    const dados = await resposta.json()
    if(dados.status){
        btnIniciar.classList.add('esconder')
        form.classList.remove('esconder')
    }
})
btnReiniciar.addEventListener('click', async () => {
    const resposta = await fetch('jogar.php')
    await resposta.json()
    form.classList.remove('esconder')
    btnReiniciar.classList.add('esconder')
    mensagem.innerText = ''
})
btnZerar.addEventListener('click', async () => {
    const resposta = await fetch('zerar.php')
    const data = await resposta.json()
    if(data.status){
        placarJogador = 0
        placarSistema = 0
        placarJ.innerText = 0
        placarS.innerText = 0
        mensagem.innerText = ''
    }
})
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    if (!jogada) {
        mensagem.innerText = 'Selecione uma jogada';
        return; 
    }
    const body = new FormData()
    body.set('jogada', jogada)
    btnReiniciar.classList.remove('esconder')
    form.classList.add('esconder')
    const resposta = await fetch('acao.php', {
        method:'post',
        body
    })
    const data = await resposta.json()
    if(data.resultado == 1){
        mensagem.innerText = 'Ganhou!'
        placarJogador++
        data.placar.jogador = placarJogador
        placarJ.innerText = data.placar.jogador
    }else if(data.resultado == -1){
        mensagem.innerText = 'Perdeu!' 
        placarSistema++
        data.placar.sistema = placarSistema
        placarS.innerText = data.placar.sistema 
    }else if(data.resultado == 0){
        mensagem.innerText = 'Empatou!'
    }
})

