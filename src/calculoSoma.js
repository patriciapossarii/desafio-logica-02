function somarDoisNumeros (valor1,valor2){
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDoisNumeros(valor1,valor2){
    // 1. Soma os dois valores
    const resultadoSomaDeDoisValores = somarDoisNumeros(valor1,valor2);

    // 2. Divide pela quantidade de números passados
    const resultadoMediaDoisValores = resultadoSomaDeDoisValores / 2;
    
    // 3. Retornar o resultado
    return resultadoMediaDoisValores;
}



module.exports = {
    somarDoisNumeros
}




