import express from "express";

const app = express();

app.use('/', (req, res) => {
    res.status(200).send("Hola en YARN!");
});

app.listen(8080, () => {
    console.log("running");
})