let historialOperaciones = [];

import fs from 'fs';

const fileName = "operaciones.txt";

const checkFile = async() => {
    if(!fs.existsSync(fileName)) {
        await fs.writeFileSync(fileName, '');
    };

    return;
};

const insert = async dato => {
    await checkFile();
    const info = await fs.readFileSync(fileName);
    if ( info.length > 0) {
        historialOperaciones = JSON.parse(info);
    }

    historialOperaciones.push(dato);

    await fs.writeFileSync(fileName, JSON.stringify(historialOperaciones, null, 2));
};

const listar = async () => {
    return JSON.parse(await fs.readFileSync(fileName));
}

export {
    insert,
    listar
}