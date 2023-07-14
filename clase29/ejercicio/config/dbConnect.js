import mongoose from 'mongoose';
import config from './config.js';


export default class MongoSingleton {
    static #instance;

    constructor() {
        mongoose.connect(config.db.cs);
    }

    static getIstance() {
        if(this.#instance) {
            console.log('Already connected!');
            return this.#instance;
        }

        this.#instance = new MongoSingleton();
        console.log(`Connected`);
        return this.#instance;        
    }
}