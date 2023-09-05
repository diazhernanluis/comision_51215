import { usuario1 } from "../mocks/users.mock.js";


const deleteUser = async (requester) => {
    const getAllUsers = await requester.get('/api/users');
    const user = getAllUsers.body.payload.find(el => el.email === usuario1.email);
    
    await requester.delete(`/api/users/${user._id}`);
};

export {
    deleteUser
}