const sumar = () => {
    let suma = 0;
    for (let i = 0; i < 5; i++) {
        suma +=i;
    }
    return suma;
}

process.on('finish', () => {
    // const resultado = sumar();
    process.send('resultado');
})