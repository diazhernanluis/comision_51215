import express from "express";
import compression from "express-compression";

const app = express();
app.use(compression({
    brotli: { enabled: true, zlib: {}} // LE INDICAMOS QUE USE BRTOLI COMO COMPRESOR DE INFORMACION
}));


const PORT = 8080;

app.use('/string', (req, res) => {

    let string = "Hola, soy un string muy grande";

    for (let i = 0; i < 100000; i++) {
        string += ', Agrego otro string muy grande';
    }

    res.status(200).send(string);
});

app.listen(PORT, () => {
    console.log("running");
})