import {arrayObstaculos} from "./colisao.js"
import { timerObstaculos } from "./pontuacao.js"
let randomizer = 0, i;
let tempo=0;
function randomizerObstaculos(){
    console.log("randomizer");
    randomizer = getRandomInt(0, 2);
    for(i=0; i<arrayObstaculos.length; i++){
        if(i != randomizer){
            arrayObstaculos[i].style.animation = "none";
        }
    }
    arrayObstaculos[randomizer].style.animation = `carroparado linear infinite ${(timerObstaculos + 100) / 1000}s`;

    
    setTimeout(randomizerObstaculos, timerObstaculos);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//conta tempo
function contatempo(){
    tempo=tempo++;
}
function getTempo(){
    return tempo;
}
function zeratempo(){
    tempo=0;
}

export {randomizerObstaculos, zeratempo, contatempo, getTempo};