import bcrypt from 'bcrypt';
import {fileURLToPath} from 'url';
import { dirname } from 'path';

export const createHash = async(password) =>{
    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password,salts);
}

// AGREGUE EL AWAIT Y DI VUELTA LOS PARAMETROS EN EL COMPARE!!!!
export const passwordValidation = async(user,password) => await bcrypt.compare(user.password, password);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;