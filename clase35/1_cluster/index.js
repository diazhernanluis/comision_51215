import express from "express";
import cluster from "cluster";
import { cpus } from "os";

const numCpu = cpus().length;
const PORT = 8080;

if(cluster.isPrimary) {
    console.log(numCpu);
    console.log(`process ID: ${process.pid} `);
    
    console.log("Proceso primario, generando exclavos!");
    
    for (let i = 0; i < numCpu; i++) {
        cluster.fork();
    }
    
    cluster.on('exit', worker => {
        console.log(`Worker, ${worker.process.pid} died ${new Date()}`);
        cluster.fork();
    });
} else {

    console.log("- FORK");
    console.log(`Soy un worker con process id: ${process.pid}`)
    const app = express();

    app.get("/", (req, res) => {
        res.status(200).send(`Servidor express en: ${PORT} - PID (${process.pid})`);
    });

    app.listen(PORT, () => {
        console.log(`Running PORT: ${PORT} - PID: ${process.pid}`);
    })
}