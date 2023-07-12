import config from "../config/config.js";
import usersDaoRam from "./DAO/ram.js";
import usersDaoMongo from "./DAO/mongo.js";


export let userDB;

switch (config.db.persistence) {
    case "mongo": userDB = new usersDaoMongo();
        break;

    case "ram": userDB = new usersDaoRam();
        break;

    default: console.log("No se configuro una base de datos");
        process.exit(1);
        break;
}

