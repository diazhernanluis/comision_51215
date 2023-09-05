import {expect} from 'chai';
import { usuario1, usuario2 } from '../../mocks/users.mock.js';
import { deleteUser } from '../../utils/cleanDB.util.js';
import supertest from 'supertest';


const requester = supertest('http://localhost:8080');

describe('Testing users endpoints', () => {

    // before( async () => {
    //     await deleteUser(requester);
    // })

    // it('debe registrar correctamente el usuario', async () => {
    //     const result = await requester.post('/api/sessions/register').send(usuario1);
    //     console.log(result.body);
    //     expect(result.body.payload).to.be.ok;
    // });

    it('debe loguear correctametne el usuario y DEVOLVER UNA COOKIE!!!', async () => {
        const mockUser = {
            email: usuario1.email,
            password: usuario1.password
        };

        const result = await requester.post('/api/sessions/login').send(mockUser);
        const cookieResult = result.headers['set-cookie'][0];

        console.log(cookieResult);

        expect(cookieResult).to.be.ok;

        const cookie = {
            key: cookieResult.split('=')[0],
            value: cookieResult.split('=')[1],
        };
        expect(cookie.key).to.be.equal('coderCookie');
        expect(cookie.value).to.be.ok;

    });
});