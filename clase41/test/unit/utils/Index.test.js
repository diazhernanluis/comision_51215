import {createHash, passwordValidation} from '../../../src/utils/index.js';
import Users from "../../../src/dao/Users.dao.js";
import assert from 'assert';
import * as usersMocks from '../../mocks/users.mock.js';
import {expect} from 'chai';


describe('Utils test', function () {

    it('create hash', async () => {
        const password = "unaPassword";
        
        const result = await createHash(password);

        expect(result).to.be.a('string');
        expect(result).to.not.equal(password);
    });


    it('it should fail if password does not match', async () => {
        const user = {
            password: 'unaPassword'
        }
        
        const passHashed = await createHash(user.password);

        user.password = 'somepass';

        const result = await passwordValidation(user, passHashed);

        expect(passHashed).to.be.a('string');
        expect(passHashed).to.not.equal(user.password);
        expect(result).to.be.false;
    });
});