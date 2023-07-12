
export const userDTO = (id, info) => ({
    'id': id,
    'nombre': info.nombre,
    'apellido': info.apellido,
    'numero': info.numero,
    'active': true,
});