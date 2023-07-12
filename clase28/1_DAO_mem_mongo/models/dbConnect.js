import mongoose from 'mongoose';
import config from '../config/config.js';

export default class MongooseSingleton {
    static #instance;

    constructor() {
        mongoose.connect(config.db.cs);
    }

    static getInstance() {
        if(this.#instance) {
            console.log("Already connect");
            return this.#instance;
        }

        this.#instance = new MongooseSingleton();
        console.log("Connected to dB");
        return this.#instance;
    }
}