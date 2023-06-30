// Se creará una función llamada “listNumbers” el cual recibirá un número indefinido de argumentos (...numbers)
// Si se pasa un argumento no numérico, entonces deberá mostrar por consola un error indicando “Invalid parameters” 
// seguido de una lista con los tipos de dato (para [1,2,”a”,true], el error mostrará [number,number,string,boolean]
// Escapar del proceso con un código -4. Utilizando un listener, obtener el código de escape del error y mostrar un mensaje 
// “Proceso finalizado por argumentación inválida en una función”


let numeros = [];
let trash = process.argv.shift();


( () => {

    if( process.argv.length > 1) {
        let ejec = process.argv.shift().split("/");

        numeros = process.argv.map(el => parseInt(el) || el);
        const check = numeros.every( el => typeof(el) === 'number');

        if(!check) {
            process.on('exit', () => {
                console.log("bye bye");
            });

            process.exit(5);
        }

        console.log("HOLA MUNDO TE QUIERO MUCHO");
        console.log(numeros);
    }

    process.on('uncaughtException', () => {
        console.log("PORQUE HICISTE ESO?, AHORA TENGO QUE TERMINAR EL PROGRAMA");
    })
})();

