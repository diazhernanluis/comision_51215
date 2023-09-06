import { expect } from "chai";
import mongoose from "mongoose";

import * as userServices from '../../services/users.services.js';

mongoose.connect('mongodb+srv://coderhouse:coderhouse@ejercicios.t0qmdog.mongodb.net/testing');

describe(' Unit test - userServices.js', async function () {
    this.timeout(6000);

    before('', async function () {
        // await mongoose.connection.dropDatabase('testing');
    });

    it('user db test', async () => {
        const result = await userServices.getAll();

        expect(result).to.be.an('array');
        expect(result[0].nombre).to.be.a('string');
        expect(result[0].orders).to.be.an('array');
    })
})