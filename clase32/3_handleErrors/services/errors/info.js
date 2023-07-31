export const generateUserErrorInfo = (user) => {
    return `One or more properties were incomplete or not valid.
    List of required properties:
    * nombre: needs to be a string, received: ${user.nombre};
    * apellido: needs to be a string, received: ${user.apellido};
    * email: needs to be a string, received: ${user.email}`;
}