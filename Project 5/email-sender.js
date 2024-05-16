// email-sender.js

const nodemailer = require('nodemailer');

// Create a transporter
let transporter = nodemailer.createTransport({
    service: 'your_email_service_provider', // e.g., 'gmail', 'hotmail', etc.
    auth: {
        user: 'your_email_address',
        pass: 'your_email_password'
    }
});

// Email message options
let mailOptions = {
    from: 'your_email_address',
    to: 'recipient_email_address',
    subject: 'Test Email',
    text: 'This is a test email from Node.js'
};

// Send mail
transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log('Error occurred. ' + err.message);
        return process.exit(1);
    }
    console.log('Email sent: ' + info.response);
    transporter.close();
});
