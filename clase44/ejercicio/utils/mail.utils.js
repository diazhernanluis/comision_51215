import transporter from '../config/mails.js';
import config from '../config/config.js';
import log from '../config/logger.js';

const sendRecoverPassword = (email, token) => {

    const url = config.url.baseUrl + config.url.recoverPassword + `?token=${token}`;
    const button = `<a href=${url} target="_blanl">
                        <button>Recuperar contraseña</button>
                    </a>`;
    const mailOptions = {
        from: 'noreply@miempresa.com',
        to: email,
        subject: 'Recuperacion de contraseña',
        html: `
            <h1>Por favor haga click en el siguiente boton para recuperar su contraseña</h1>
            <hr>
            ${button}
        `
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if( err ) {
            log.error("Error: ", err);
            return;
        }

        log.info("Mail enviado: ", info);
    });
}

export {
    sendRecoverPassword
}