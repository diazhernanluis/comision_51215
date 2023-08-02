import express from 'express';
import { getAllUsers, login, register} from '../controllers/userController.js';
import { fakerES as faker } from "@faker-js/faker"

const router = express.Router();

router.get('/', getAllUsers);

router.post('/login', login);

router.post('/register', register);

router.get('/api/test/user', (req, res) => {
    const nombre = faker.person.firstName();
    const apellido = faker.person.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    res.send({nombre, apellido, email, password}); 
})

export default router;