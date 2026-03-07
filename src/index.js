import { vingadores } from './Vingador.js'; 
import { compararPersonagens } from './Comparador.js';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("--- COMPARAÇÃO ENTRE PERSONAGENS ---")
console.log("Selecione seus personagens: ")
console.log(vingadores.map(v => v.codinome).join(", "));
console.log("------------------------------------\n");

function IniciarComparacao(){
    rl.question("Digite o codinome do primeiro personagem: ", (respostaA) =>{
        const PsngA = buscarNome(respostaA);

        if (respostaA.toLowerCase() === 'batman') {
            console.log(` Vingança!`);
            return IniciarComparacao();
        }
    
        if (!PsngA) {
            console.log(`\n[ERRO] Personagem "${respostaA}" não foi encontrado! tente novamente.\n`);
            return IniciarComparacao();
        }

        console.log(` 1° Personagem selecionado: ${PsngA.codinome}\n`);
    
        rl.question("Digite o codinome do segundo personagem: ", (respostaB) =>{
            const PsngB = buscarNome(respostaB);
    
            if (!PsngB) {
                console.log(`\n[ERRO] Personagem "${respostaB}" não foi encontrado! tente novamente.\n`);
                return IniciarComparacao();
            }
            console.log(` 2° Personagem selecionado: ${PsngB.codinome}\n`);

            const resultado = compararPersonagens(PsngA , PsngB);
            console.log(resultado);

            perguntarNovamente();
        });
    });
}

function perguntarNovamente() {
    rl.question('\nDeseja realizar outra comparação? (S/N): ', (resposta) => {
        const opcao = resposta.toUpperCase();
        
        if (opcao === 'S' || opcao === 'SIM') {
            console.log("\n------------------------------------");
            console.log("NOVA COMPARAÇÃO INICIADA");
            console.log("------------------------------------\n");
            IniciarComparacao();
        } else {
            console.log("\nEncerrando.");
            rl.close();
        }
    });
}

function buscarNome(textoInput){
    if (!textoInput) return null

    return vingadores.find(h =>
        h.codinome.toLowerCase().includes(textoInput.toLowerCase())

    )
}

IniciarComparacao();