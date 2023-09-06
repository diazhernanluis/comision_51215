import { expect } from 'chai';
import supertest from 'supertest';
import { user1, userSinRol } from '../mocks/users.mocks.js';


const requester = supertest('http://localhost:8080');


describe(' Integration test - user.js', () => {
    it('get users', async () => {
        const result = await requester.get('/v1/api/user');

        expect(result.body).to.be.an('array');
        expect(result.ok).to.be.true;
        expect(result.statusCode).to.be.equal(200);
    });

    it('insert user con rol admin', async () => {

        const result = await requester.post('/v1/api/user').send(user1);

        expect(result.ok).to.be.true;
        expect(result.statusCode).to.be.equal(200);
        expect(result.body).to.be.an('object');
        expect(result.body.rol).to.be.equal('admin')
    });

    it('insert user sin rol - debe poner rol user por defecto', async () => {

        const result = await requester.post('/v1/api/user').send(userSinRol);

        expect(result.ok).to.be.true;
        expect(result.statusCode).to.be.equal(200);
        expect(result.body).to.be.an('object');
        expect(result.body.rol).to.be.equal('user')
    });

    it('update user - debe fallar si no envio el Id', async () => {
        const result = await requester.put('/v1/api/user').send(user1);

        expect(result.error.text).to.deep.equal('Id es mandatorio');
        expect(result.ok).to.be.false;
        expect(result.statusCode).to.be.equal(400);
    });

    it('update user - update correcto', async () => {
        const result = await requester.post('/v1/api/user').send(user1);

        expect(result.ok).to.be.true;

        const id = result.body._id;

        const resultUpdate = await requester.put(`/v1/api/user?id=${id}`);
        expect(resultUpdate.ok).to.be.true;
        expect(result.statusCode).to.be.equal(200);
    })
});