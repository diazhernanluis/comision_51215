import nodemailer from 'nodemailer';
import config from './config.js';

var transporter = nodemailer.createTransport({
    host: config.mail.relay,
    port: config.mail.mailPort,
    auth: {
      user: config.mail.mailUser,
      pass: config.mail.mailPass
    }
  });

export default transporter;