import transporter from '../config/mails.js';
import config from '../config/config.js';


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
            console.log("Error: ", err);
            return;
        }

        console.log("Mail enviado: ", info);
    });
}

export {
    sendRecoverPassword
}