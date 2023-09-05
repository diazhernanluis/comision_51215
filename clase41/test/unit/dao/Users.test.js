import mongoose from "mongoose";
import Users from "../../../src/dao/Users.dao.js";
import assert from 'assert';
import * as usersMocks from '../../mocks/users.mock.js';
import {expect} from 'chai';


mongoose.connect('mongodb+srv://coderhouse:coderhouse@ejercicios.t0qmdog.mongodb.net/sarasa');

// HAY QUE USAR FUNCION EN LA PRIMERA PARA QUE TOME EL TIMEOUT
describe('Users dao test', function () {
    this.timeout(6000);
    let userDao;
    before( () => {
        userDao = new Users();
    });

    beforeEach( async () => {
        mongoose.connection.collections.users.drop();
    });

    it('debe devolver todos los usuarios de la base en formato array', async () => {
        const result = await userDao.get();
        assert.strictEqual(Array.isArray(result), true);      
    });

    // DIFERENCIAS ENTRE EQUAL Y STRICT EQUAL Y DEEP STRICT EQUAL
    // EQUAL --> EQUIVALENTE A ==, COMPARA VALOR, NO TIPOS
    // STRICTEQUAL --> EQUIVALENTE A ===, COMPARA VALOR Y TIPOS
    // DEEPEQUAL O DEEPSTRICTEQUAL, ADEMAS DE LO ANTERIOR, CON DEEP SE HACE UNA COMPARACION POR VALOR Y NO POR REFERENCIA
    it('debe agregar correctamente un nuevo usuario con array de mascotas vacio', async () => {
        const newUser = {
            first_name: 'cosme',
            last_name: 'fulanito',
            email: 'cosme@fulanito.com.ar',
            password: 'pass',
            // pets: []
        };

        const id = await userDao.save(newUser);
        const result = await userDao.getBy({_id: id});

        assert(Array.isArray(result.pets), true);
        assert.deepStrictEqual(result.pets, []);
        // assert.strictEqual(result.pets, newUser.pets); --> esto no funciona porque no estan en la misma posicion de memoria
    });

    it.skip('debo poder obtener un usuario por mail con getBy', async () => {
        const newUser = {
            first_name: 'cosme',
            last_name: 'fulanito',
            email: 'cosme@fulanito.com.ar',
            password: 'pass',
        };

        const id = await userDao.save(newUser);
        const result = await userDao.getBy({email: newUser.email});

        assert.deepStrictEqual(result.first_name, newUser.first_name);
        assert.deepStrictEqual(result.last_name, newUser.last_name);
        assert.deepStrictEqual(result.email, newUser.email);
    });

    // A PARTIR DE ACA USA CHAI!
    it('Update del usuario', async () => {
        const id = await userDao.save(usersMocks.usuario1);
        await userDao.update(id, usersMocks.usuario2);
        const result = await userDao.getBy({_id: id});

        expect(result.first_name).deep.equal(usersMocks.usuario2.first_name);
        expect(result.last_name).deep.equal(usersMocks.usuario2.last_name);
        expect(result.email).deep.equal(usersMocks.usuario2.email);

        expect(result).to.be.an('object');
        expect(result.first_name).to.be.a('string');
    });

    it('delete del usuario', async () => {
        const id = await userDao.save(usersMocks.usuario1);
        await userDao.delete(id);
        const result = await userDao.getBy({_id: id});

        expect(result).deep.equal(null);
        expect(result).to.be.null;
    });
});