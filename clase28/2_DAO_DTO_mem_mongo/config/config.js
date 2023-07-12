let config = {};

config = {
    server: process.env.PORT
};

config.db = {
    cs: process.env.mongodb,
    persistence: process.env.persistence
}


export default config;