import express from 'express';
import { createClient } from 'redis';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT = 8080;
const client = createClient({
    url: 'url de redis aca'
});
client.on('error', err => console.log('Redis Client Error', err));
await client.connect();


app.post('/', async (req, res) => {
    try {
        const {token, nombre, apellido} = req.body;
        
        const usuario = {
            nombre,
            apellido,
            rol: 'ADMIN'
        };

        await client.set(token, JSON.stringify(usuario));
    
        res.status(200).json({info: "LISTO"});

    } catch (e) {
        console.log("Error: ", e);
    }
});


app.get('/', async (req, res) => {
    const {token} = req.body;

    const info = JSON.parse(await client.get(token));

    res.status(200).json({valor: info})
})

app.listen(PORT, () => {
    console.log("Running");
})