export function compararPersonagens(p1, p2) {
    console.log(` ---- COMBATE ENTRE PERSONAGENS: ${p1.codinome} vs ${p2.codinome} ----`);

    const atributos = ['forca', 'agilidade', 'resistencia', 'inteligencia'];
    let pontosP1 = 0;
    let pontosP2 = 0;

    atributos.forEach(attr => {
        const dif = p1[attr] - p2[attr];
        const difModulo = Math.abs(dif)
        
        if (dif > 0) {
            console.log(`[${attr.toUpperCase()}]: ${p1.codinome} vence por +${dif} pontos.`);
            pontosP1+=difModulo;
        } else if (dif < 0) {
            console.log(`[${attr.toUpperCase()}]: ${p2.codinome} vence por +${difModulo} pontos.`);
            pontosP2+=difModulo;
        } else {
            console.log(`[${attr.toUpperCase()}]: Empate.`);
        }
    });

    console.log("---- CONCLUSÃO ----");
    if (pontosP1 > pontosP2) {
        return `${p1.codinome} vence ${p2.codinome}.`;
    } else if (pontosP2 > pontosP1) {
        return `${p2.codinome} vence ${p1.codinome}.`;
    } else {
        return `${p1.codinome} e ${p2.codinome} empatam.`;
    }
}