const suma = (a, b) => parseInt(a) + parseInt(b);
const resta = (a, b) => parseInt(a) - parseInt(b);
const multiplicacion = (a, b) => parseInt(a) * parseInt(b);
const division = (a, b) => parseInt(a) / parseInt(b);

const mostrarMensaje = m => console.log(m);

export {
    suma,
    resta,
    multiplicacion,
    division,
    mostrarMensaje
}