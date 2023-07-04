import * as libreria from '../utils/operaciones.js';
// import * as persistencia from '../models/ram.js';
import * as persistencia from '../models/disco.js';

const sumar = (num1, num2) => {
    let resultado = libreria.suma(num1, num2);

    const dato = {
        tipo: 'suma',
        params: [num1, num2],
        resultado,
        timestamp: Date.now(),
    };

    persistencia.insert(dato)
    return resultado;
}

const restar = (num1, num2) => {
    let resultado = libreria.resta(num1, num2);
    
    const dato = {
        tipo: 'resta',
        params: [num1, num2],
        resultado,
        timestamp: Date.now(),
    };

    persistencia.insert(dato);

    return resultado;
}

const mult = (num1, num2) => {
    let resultado = libreria.multiplicacion(num1, num2);

    const dato = {
        tipo: 'multiplicacion',
        params: [num1, num2],
        resultado,
        timestamp: Date.now(),
    };

    persistencia.insert(dato);


    return resultado;
}

const div = (num1, num2) => {
    try {
        let resultado = libreria.division(num1, num2);

        const dato = {
            tipo: 'division',
            params: [num1, num2],
            resultado,
            timestamp: Date.now(),
        };
    
        persistencia.insert(dato);

        return resultado;    
    } catch (e) {
        return new Error("No se puede dividir por cero");
    }
    
}

const listar = async () => {
    return await persistencia.listar();
}

export {
    sumar,
    restar,
    mult,
    div,
    listar
}