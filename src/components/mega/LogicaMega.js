function gerarNumero(qtdeNro) {

    const numeros = [];
    
    for (let i = 0; i < qtdeNro;) {

        let numero = Math.floor(Math.random() * (60 - 1)) + 1;
        
        if (numeros.indexOf(numero) === -1) {
            numeros.push(numero);
            i += 1
        }

    }
    
    numeros.sort((a,b) => a - b);
    console.log(numeros)
    
}


gerarNumero(6);
