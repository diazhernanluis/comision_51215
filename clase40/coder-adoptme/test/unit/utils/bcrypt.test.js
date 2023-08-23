import {createHash, passwordValidation} from '../../../src/index.js';
import { expect } from 'chai';


describe(' Test bcrypt', function () {

    it('create hash', async () => {
        const password = 'unaPassword';

        const result = await createHash(password);

        expect(result).to.be.a('string');
        expect(result).to.not.equal(password);
    });

    it('create and validate hash', async () => {
        const user = {
            password: 'unaPassword'
        };

        const passHashed = await createHash(user.password);

        const result = await passwordValidation(user, passHashed);

        expect(result).to.be.true;
    })
})