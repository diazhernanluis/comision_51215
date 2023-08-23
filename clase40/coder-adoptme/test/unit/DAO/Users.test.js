import Users from "../../../src/dao/Users.dao.js";
import mongoose from "mongoose";
import assert from 'assert';
import {expect, use} from 'chai';
import * as userMocks from '../../mocks/users.mocks.js';

mongoose.connect('mongodb+srv://coderhouse:coderhouse@ejercicios.t0qmdog.mongodb.net/testing');

describe('Testeo de User.controllers', function () {

    this.timeout(6000);
    let userDao;

    before( () => {
        userDao = new Users();
    })

    beforeEach( () => {
        mongoose.connection.collections.users.drop();
    })

    // DIFERENCIAS ENTRE EQUAL, STRICTQUAL Y DEEP STRICT EQUAL

    // EQUAL --> EQUIVALE A HACER: VALOR == VALOR, O SEA, COMPARA VALOR, NO TIPOS
    // STRICTEQUAL --> EQUIVALE A HACER: VALOR === VALOR, O SEA, COMPARA VALOR Y TIPOS
    // DEEPEQUAL O DEEPSTRICTEQUAL, IGUAL A LOS ANTERIORES, PERO HACE UNA COMPARACION POR VALOR Y NO POR REFERENCIA!

    it('GET - debe devolver todos los usuarios en formato array', async () => {
        const result = await userDao.get();
        assert.strictEqual(Array.isArray(result), true);
    });


    it('Debe agregar correctamente un nuevo usuario con array de mascotas vacio', async () => {
      const newUser = {
        first_name: 'cosme',
        last_name: 'fulanito',
        email: 'cosme@fulanito.com.ar',
        password: 'pass'
      };

      const id = await userDao.save(newUser);
      const result = await userDao.getBy({_id: id});

      assert.strictEqual(Array.isArray(result.pets), true);
      assert.deepStrictEqual(result.pets, []);
    });


    it.skip('debo poder obtener un usuario por mail con getBy', async () => {
        const newUser = {
            first_name: 'cosme',
            last_name: 'fulanito',
            email: 'cosme@fulanito.com.ar',
            password: 'pass',
        };

        const user = await userDao.save(newUser);

        const result = await userDao.getBy({email: user.email});

        assert.deepStrictEqual(result.first_name, newUser.first_name);
        assert.deepStrictEqual(result.last_name, newUser.last_name);
        assert.deepStrictEqual(result.email, newUser.email);
    });

    it('debo poder hacer un update de un usuario', async () => {
        
        const user = await userDao.save(userMocks.usuario1);

        await userDao.update({_id: user._id}, userMocks.usuario2);
        const result = await userDao.getBy({_id: user._id});

        expect(result.first_name).deep.equal(userMocks.usuario2.first_name);
        expect(result.last_name).deep.equal(userMocks.usuario2.last_name);
        expect(result.email).deep.equal(userMocks.usuario2.email);
        expect(result).to.be.an('object');
        expect(result.first_name).to.be.a('string');
    });

    it('delete del usuario', async () => {
        const id = await userDao.save(userMocks.usuario1);
        await userDao.delete(id);

        const result = await userDao.getBy({_id: id});
        expect(result).deep.equal(null);
        expect(result).to.be.null
    })
})