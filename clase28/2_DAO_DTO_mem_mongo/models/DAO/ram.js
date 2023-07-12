import { userDTO } from "../DTO/usersDTO.js";

class usersDaoRam {
    constructor() {
        this.usuario = [];
    }

    getNextId = () => (this.usuario.length === 0 ? 1 : this.usuario.length + 1);

    getIndex = (id) => (this.usuario.findIndex( us => us.id === id));

    getAll = () => (this.usuario);

    insert = (info) => {
        const id = this.getNextId();
        const nuevoUsuario = userDTO(id, info);
        this.usuario.push(nuevoUsuario);
        return nuevoUsuario;
    }

    updateById = (id, info) => {
        const updateUsuario = userDTO(id, info);
        this.usuario.splice(this.getIndex(id), 1, updateUsuario);
        return updateUsuario;
    }

    deleteById = (id) => {
        this.usuario.splice(this.getIndex(id), 1);
        return "Borrado";
    }
}

export default usersDaoRam;