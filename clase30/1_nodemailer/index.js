import nodemailer from 'nodemailer';
import __dirname from './dirname.js';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'coderhouse.51215@gmail.com',
        // pass: 'rspagwfaakyjqdbn'
    }
});

// const html = '<h1> Esto es un mail de prueba desde Nodemailer</h1>';
const html = '<h1> Esto es un mail de prueba desde Nodemailer con imagenes adjuntas</h1>';

const mailOptions = {
    from: 'cosmefulanito@outlook.com',
    to: 'coderhouse.51215@gmail.com',
    subject: 'Test desde nodemailer',
    html: html,
    attachmnents: [{
        patch: __dirname+'./perro.jpeg',
        cid: "this is fine"
    }]
};

console.log(mailOptions);

transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
        console.log("Error: ", err);
        return;
    }

    console.log(`Mensaje enviado con exito: trackId: ${info}`);
});