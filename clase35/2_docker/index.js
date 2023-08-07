// - docker build -t __nombredelcontenedor__ . (el punto hace referncia al dockerfile)

// - docker run -p 8080:8080 __nombredelcontenedor__

import express from "express";

const app = express();
const PORT = 8080;

let contadorVisitas = 0;

app.get('/', (req, res) => {
    contadorVisitas++;

    res.status(200).send(`<h1>Visitas: ${contadorVisitas.toString()}</h1>
                            <hr>
                            <p> Running on PORT: ${PORT}</p>
    `);
});


app.listen(PORT, () => {
    console.log("Running");
})