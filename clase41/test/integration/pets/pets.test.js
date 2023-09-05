import {expect} from 'chai';
import supertest from 'supertest';
import { pet1, pet3, petSinNombre } from '../../mocks/pets.mock.js';

const requester = supertest('http://localhost:8080');

describe('Testing pets routes', () => {
    it('it should return an object with all the pets in the DB', async () => {
        const result = await requester.get('/api/pets').send();

        // console.log(result);
        // console.log(result.statusCode);
        // console.log(result.ok);
        // console.log(result.body);
        // console.log(result.headers);

        expect(result.body).to.be.an('object');
        expect(result.body.status).deep.equal('success');
        expect(result.body.payload).to.be.an('array');
        expect(result.ok).to.be.true;
    });

    it(' it should create a pet / debe crear una mascota', async () => {
    
        const result = await requester.post('/api/pets').send(pet1);
        
        expect(result.body.payload).to.have.property('_id');
        expect(result.body.status).deep.equal('success');
        expect(result.ok).to.be.true;
        expect(result.statusCode).to.be.equal(200);
    });

    it(' It should fails if name it is not provide / Debe fallar si no se le provee el nombre', async() => {
        const bodyResponse = {
            status:"error",
            error:"Incomplete values"
        };

        const result = await requester.post('/api/pets').send(petSinNombre);

        expect(result.ok).to.be.false;
        expect(result.body.status).to.be.equal(bodyResponse.status);
        expect(result.body.error).to.be.equal(bodyResponse.error);
        expect(result.statusCode).to.deep.equal(400)
    });

    it('it should update correctly / debe actualizar correctamente', async () => {
        const bodyResponse = {
            status: 'success',
            message: 'pet updated'
        };
        const resultPost = await requester.post('/api/pets').send(pet1);
        const id = resultPost.body.payload._id;

        const result = await requester.put(`/api/pets/${id}`).send(pet3);

        expect(result.body).to.deep.equal(bodyResponse);
        expect(result.ok).to.be.true;
        expect(result.statusCode).to.deep.equal(200);

        // esto no es performante, deberiamos buscar con getBy, pero el de este codigo no anda muy bien
        // por ende hacemos la busqueda a mano
        const getPets = await requester.get('/api/pets');
        const pet = getPets.body.payload.find( el => el._id === id);

        expect(pet.name).to.be.equal(pet3.name)
    });

    it(' it should delete pet / debe eliminar la mascota', async () => {
        const bodyResponse = {
            status: 'success',
            message: 'pet deleted'
        };

        const resultPost = await requester.post('/api/pets').send(pet1);
        const id = resultPost.body.payload._id;

        const result = await requester.delete(`/api/pets/${id}`);

        expect(result.body).to.deep.equal(bodyResponse);
        expect(result.ok).to.be.true;
        expect(result.statusCode).to.deep.equal(200);

        const getPets = await requester.get('/api/pets');
        const pet = getPets.body.payload.find( el => el._id === id);

        expect(pet).to.be.equal(undefined);
    });
});