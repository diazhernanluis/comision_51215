import UserDTO from '../../../src/dto/User.dto.js';
import Users from '../../../src/dao/Users.dao.js';
import * as usersMocks from '../../mocks/users.mock.js';
import mongoose from 'mongoose';
import {expect} from 'chai';


describe('User DTO test', function () {
    this.timeout(6000);
    let userDao;
    before( () => {
        userDao = new Users();
    });

    afterEach( async () => {
        await mongoose.connection.collections.users.drop();
    });

    it('UserDTO debe unificar nombre y apellido', async () => {
        let usuario = usersMocks.usuario1;
        const id = await userDao.save(usuario);
        const userDB = await userDao.getBy({_id: id});

        const result = UserDTO.getUserTokenFrom(userDB);

        expect(result).to.be.an('object');
        expect(result.name).to.equal(usuario.first_name + ' ' + usuario.last_name);
    });

    it('UserDTO debe no guardar la password', async () => {
        let usuario = usersMocks.usuario1;
        const id = await userDao.save(usuario);
        const userDB = await userDao.getBy({_id: id});

        const result = UserDTO.getUserTokenFrom(userDB);

        expect(result).to.be.an('object');
        expect(result.password).to.be.undefined;
    });
});