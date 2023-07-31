import EErrors from '../../services/errors/enums.js';

export default (error, req, res, next) => {
    console.log(error.cause);
    switch (error.code) {
        case EErrors.INVALID_TYPE_ERROR:
            res.send({error: error.name});
            break;
        case EErrors.ROUTING_ERROR:
                res.send({error: 'error de ruteo'});
                break;
        case EErrors.ROUTING_ERROR:
                res.send({error: 'error de parametros'});
                break;
        default:
            res.send({error: "unhandled error"});
            break;
    }
}


// ME QUEDA PENDIENTE CON JSON
// export default {
//     [EErrors.INVALID_TYPE_ERROR]: () => res.send({error: error.name}),
//     [EErrors.ROUTING_ERROR]: () => res.send({error: 'error de ruteo'}),
// }