import { vingadores } from './Vingador.js'; 

const listaDeHerois = vingadores; {
    return new Vingador(
        h.nome, 
        h.codinome, 
        h.armaPrincipal, 
        h.armaSecundaria, 
        h.agilidade, 
        h.forca, 
        h.resistencia,
        h.inteligencia
    );
};

console.log("=== INICIANDO TORNEIO DOS VINGADORES ===\n");

for (let i = 0; i < vingadores.length; i++) {
    for (let j = i + 1; j < vingadores.length; j++) {
        const heroiA = vingadores[i];
        const heroiB = vingadores[j];
        
        const resultado = compararPersonagens(heroiA, heroiB);
        console.log(resultado);
        console.log("---------------------------------------\n");
    }
}