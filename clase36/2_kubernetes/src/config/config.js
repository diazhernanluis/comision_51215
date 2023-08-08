let config = {};

config.server = {
    port: process.env.PORT,
}

config.db = {
    cs: process.env.mongodb,
}

export default config;