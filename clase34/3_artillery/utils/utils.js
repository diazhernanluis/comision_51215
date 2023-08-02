import bcrypt from 'bcrypt';

const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));


const passwordValidation = (password, user) => bcrypt.compareSync(password, user.password);


export {
    createHash,
    passwordValidation
}