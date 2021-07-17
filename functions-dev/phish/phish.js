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

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

// keep this in sync with the version in src/check-phish/CheckPhish.js
const SUBJECTS = [
  'You account haccked!',
  'Bad news for you, buckaroo',
  'Oopsie poopsie! You have a problem',
  'Blub blub, no fishes here',
  'Account security validation check',
  'Open urgently, your security is at risk',
  'Acount invaded by th ehackers',
  "I've got 99 problems and a hacker is 98 of them",
  '"Mail, you have" -Yoda, probably',
  'We might "subject" you to a few "phishy" puns',
  'EMARGENTSY ACCONT ISHUES'
];

const getRandomSubject = () => SUBJECTS[getRandomInt(0, SUBJECTS.length)];

exports.handler = async (event, context) => {
  try {
    const { email } = JSON.parse(event.body);

    await transporter.sendMail({
      from: 'fischermanbob@yahoo.com',
      to: email,
      subject: getRandomSubject(),
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
