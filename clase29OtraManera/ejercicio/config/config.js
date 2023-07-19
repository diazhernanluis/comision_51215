let config = {};

config = {
    server: process.env.PORT
};

config.db = {
    cs: process.env.mongodb,
}


export default config;