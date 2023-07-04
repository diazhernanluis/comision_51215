let historialDeOperaciones = [];

const insert = dato => {
    historialDeOperaciones.push(dato);
};

const listar = () => {
    return historialDeOperaciones;
}

export {
    insert,
    listar
}