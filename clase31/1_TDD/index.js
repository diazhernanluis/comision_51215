// Aplicar bajo el modelo de trabajo de TDD:

// Una función de login (con usuarios hardcodeados user = coderUser , password = 123)

// Si se pasa un password vacío, la función debe consologuear (“No se ha proporcionado un password”)
// Si se pasa un usuario vacío, la función debe consologuear (“No se ha proporcionado un usuario”)
// Si se pasa un password incorrecto, consologuear (“Contraseña incorrecta”)
// Si se pasa un usuario incorrecto, consologuear (“Credenciales incorrectas”)
// Si  el usuario y contraseña coinciden, consologuear (“logueado”)

// user correcto: coder
// pass correcto: house

const login = (user, pass) => {
    const userOK = "coder";
    const passOK = "house";

    if(!pass) {
        return "No se ha proporcionado un password";
    }

    if(!user) {
        return "No se ha proporcionado un usuario";
    }

    if(pass !== passOK){
        return "Contraseña incorrecta";
    }

    if(user !== userOK) {
        return "Credenciales incorrecta";
    }

    if(user === userOK && pass === passOK) {
        return "Logueado"
    }
}

let testPasados = 0;
let testTotales = 5;


console.log("Test del archivo index.js");
console.log("TEST 1: La funcion debe devolver: No se ha prorcionado un password");
let result = login("coder", "");

if( result === "No se ha proporcionado un password") {
    console.log("Test 1: Pasado");
    testPasados++;
} else {
    console.error("* Test 1 fails: se esparaba No se ha prorcionado un password y se obtuvo: ", result);
}

console.log(" --------------  ");
console.log("TEST 2: La funcion debe devolver: No se ha proporcionado un usuario");
result = login("", "house");

if( result === "No se ha proporcionado un usuario") {
    console.log("Test 2: Pasado");
    testPasados++;
} else {
    console.error("* Test 2 fails: se esparaba No se ha prorcionado un usuario y se obtuvo: ", result);
}

console.log(" --------------  ");
console.log("TEST 3: La funcion debe devolver: Contraseña incorrecta");
result = login("coder", "fulanito");

if( result === "Contraseña incorrecta") {
    console.log("Test 3: Pasado");
    testPasados++;
} else {
    console.error("* Test 3 fails: se esparaba Contraseña incorrecta y se obtuvo: ", result);
}

console.log(" --------------  ");
console.log("TEST 4: La funcion debe devolver: Credenciales incorrectas");
result = login("cosmes", "house");

if( result === "Credenciales incorrecta") {
    console.log("Test 4: Pasado");
    testPasados++;
} else {
    console.error("* Test 4 fails: se esparaba Credenciales incorrectas y se obtuvo: ", result);
}

console.log(" --------------  ");
console.log("TEST 5: La funcion debe devolver: Logueado");
result = login("coder", "house");

if( result === "Logueado") {
    console.log("Test 5: Pasado");
    testPasados++;
} else {
    console.error("* Test 5 fails: se esparaba Logueado y se obtuvo: ", result);
}

if(testPasados === testTotales) {
    console.log("TODOS LOS TESTS HAN PASADO SACTIFACTORIAMENTE");
} else {
    console.log("*** ALGUNOS TEST HAN FALLADO ***");
}