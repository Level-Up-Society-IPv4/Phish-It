require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.yahoo.com',
  port: 587,
  auth: {
    user: 'fischermanbob',
    pass: process.env.YAHOO_PASSWORD
  }
});

exports.handler = async (event, context) => {
  try {
    const { email } = JSON.parse(event.body);

    await transporter.sendMail({
      from: 'fischermanbob@yahoo.com',
      to: email,
      subject: 'You account haccked!',
      html: 'Hello User ,\n\nYour accont iss hacked! Plese click here: '
        + '<a href="https://phish-me.netlify.app/phish-reveal">https://www.google.com/account</a>\n\nFrom Google'
    });

    return {
      statusCode: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to send email'
      }),
    };
  }
};
