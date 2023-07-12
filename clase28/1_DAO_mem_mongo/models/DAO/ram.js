
class usersDaoRam {
    constructor() {
        this.usuario = [];
    }

    getNextId = () => (this.usuario.length === 0 ? 1 : this.usuario.length + 1);

    getIndex = (id) => (this.usuario.findIndex( us => us.id === id));

    getAll = () => (this.usuario);

    insert = (info) => {
        let nuevoUsuario = {
            id: this.getNextId(),
            nombre: info.nombre,
            apellido: info.apellido,
            numero: info.numero
        };

        this.usuario.push(nuevoUsuario);
        return nuevoUsuario;
    }

    updateById = (id, info) => {
        let updateUsuario = {
            id,
            nombre: info.nombre,
            apellido: info.apellido,
            numero: info.numero
        }
        this.usuario.splice(this.getIndex(id), 1, updateUsuario);
        return updateUsuario;
    }

    deleteById = (id) => {
        this.usuario.splice(this.getIndex(id), 1);
        return "Borrado";
    }
}

export default usersDaoRam;