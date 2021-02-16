var env = require('./readenv');
var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        // type: 'OAuth2',
        user: env.email,
        pass: env.email_pass,
    },
    tls: {
        rejectUnauthorized: false
    },
    logger: true
});

module.exports = transporter;

