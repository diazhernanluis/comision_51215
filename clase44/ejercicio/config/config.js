let config = {};

config = {
    server: process.env.PORT
};

config.db = {
    cs: process.env.mongodb,
}

config.jwt = {
    token: process.env.jwtToken
}

config.mail = {
    relay: process.env.relay,
    mailPort: process.env.mailPort,
    mailUser: process.env.mailUser,
    mailPass: process.env.mailPass
}

config.url = {
    baseUrl: process.env.baseUrl,
    recoverPassword: process.env.recoverPassword
}



export default config;