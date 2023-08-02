import mongoose from "mongoose";
import config from "../config/config.js";

export default class MongoSingleton {
    static #instance;

    constructor() {
        mongoose.connect(config.db.cs);
    }

    static getInstance() {
        if(this.#instance){
            console.log("Already connect");
            return this.#instance;
        }

        this.#instance = new MongoSingleton();
        console.log("Connected");
        return this.#instance;
    }
}