// Realizar el envío de un sms conectado con tu teléfono personal, el cual enviará el mensaje:
// `Gracias, ${nombre}, tu solicitud del producto ${producto} ha sido aprobada`
// Donde nombre y producto deberán recibirse por query params.

const sId = "AC31d9233f4cb713b143c8a7b7cb077e4d";
// const authToken = "7e7da813e4df0cadd137a683e35c0044";

import twilio from "twilio";
import __dirname from "./dirname.js";

const client = twilio(sId, authToken);
const numero = 1168567737;

const producto = Math.random() * 100000;
const option = process.argv[2];
const nombre = process.argv[3];

if( option === "wapp") {
    client.messages.create({
        body: `Gracias, ${nombre}, tu solicitud del producto ${producto} ha sido aprobada`,
        from: "whatsapp:+14155238886",
        to:`whatsapp:+549${numero}`,
        mediaUrl: ['https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'],
    }).then( messages => {
        console.log(messages.accountSid);
    }).catch( err => {
        console.log("Error: ", err);
    });
} else if (option === "sms") {
    client.messages.create({
        body: `Gracias, ${nombre}, tu solicitud del producto ${producto} ha sido aprobada`,
        from: '18508012963',
        to: `+54${numero}`
    }).then( messages => {
        console.log(messages.accountSid);
    }).catch( err => {
        console.log("Error: ", err);
    });
} else {
    console.log("Opcion no valida");
}