import { setPlayerPodePular }  from "./pulo.js";
import { player, colisao, popUp, obstaculoUm, obstaculoDois } from "./colisao.js"
import { Marcaponto, ResetaPontos, timerObstaculos} from "./pontuacao.js";
import { randomizerObstaculos } from "./randomizerObstaculos.js";
import { zeratempo, contatempo } from "./randomizerObstaculos.js";


const buttonComecarJogo = document.querySelectorAll(".buttonStart");
const buttonMenuInicial = document.querySelector(".buttonMenu");

const menu = document.querySelector(".menu");
const areaJogo = document.querySelector(".areajogo1");

var jogoEmExecucao = false;
let intervaloChecarColisao;
let intervaloPontuacao;
let intervaloRandomizer;
let intervalotempo;

/* Ações botão do menu e botão de restart */

//Sumir o menu inicial e aparecer a tela de jogo
buttonMenuInicial.addEventListener("click", () => { //Botao do menu inicial
  menu.style.display = "none"; 
  areaJogo.style.display = "block";
})
//Comecar o jogo no onClick do botão do menu e do botão de restart
buttonComecarJogo.forEach((button, index) => {
  button.addEventListener('click', comecarJogo)
})

function comecarJogo(){
  zeratempo();
  jogoEmExecucao = true;
  obstaculoUm.style.left = "auto";
  obstaculoUm.style.right = "-20%";
  obstaculoDois.style.left = "auto";
  obstaculoDois.style.right = "-20%";
  popUp.style.display = "none";
  player.classList.remove("pula");
  player.style.bottom = '0px';
  setPlayerPodePular(true);
  ResetaPontos();
  randomizerObstaculos();

  intervaloChecarColisao = setInterval(colisao, 10);
  intervaloPontuacao = setInterval(Marcaponto, 2000);
  intervaloRandomizer = setInterval(randomizerObstaculos, 2000);
  intervalotempo = setInterval(contatempo, 1000);
}

function setJogoEmExecucao(value) {
    jogoEmExecucao = value; 
}

export {setJogoEmExecucao, jogoEmExecucao, intervaloChecarColisao, intervaloPontuacao, intervaloRandomizer};

