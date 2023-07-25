let config = {};

config = {
    server: process.env.PORT
};

config.db = {
    cs: process.env.mongodb || "mongodb+srv://coderhouse:coderhouse@ejercicios.t0qmdog.mongodb.net/codereats",
}


export default config;