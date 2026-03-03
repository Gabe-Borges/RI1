import dados from "Heroi.js" with { type: "js" } 
import { compararPersonagens } from ".Comparador.js";

const listaDeHerois = dados.vingadores.map(h => {
    return new Heroi(
        h.nome, 
        h.codinome, 
        h.armaPrincipal, 
        h.armaSecundaria, 
        h.agilidade, 
        h.forca, 
        h.resistencia,
        h.inteligencia
    );
});

console.log("=== INICIANDO TORNEIO DOS VINGADORES ===\n");

for (let i = 0; i < listaDeHerois.length; i++) {
    for (let j = i + 1; j < listaDeHerois.length; j++) {
        const heroiA = listaDeHerois[i];
        const heroiB = listaDeHerois[j];
        
        const resultado = compararPersonagens(heroiA, heroiB);
        console.log(resultado);
        console.log("---------------------------------------\n");
    }
}