const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/api/send-mail', (req, res) => {
  let { GMAIL_USER, GMAIL_PASS } = process.env;
  var transport = nodemailer.createTransport({
    service: "gmail",
    port: 2525,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });
  const contactForm = {
    from: req.body.email, // Sender address
    to: 'thefloorisyoursdancecenter@gmail.com', // List of recipients
    subject: `New message for The Floor Is Yours from ${req.body.name}`, // Subject line
    text: req.body.message,
    html: `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {font-family: arial; font-size: 20px;}
          p {margin: 20px 0px; font-size: 16px;}
          p.headline {font-weight: 500; font-size: 24px;}
        </style>
      </head>
      <body>
        <p class="headline">
          New message from ${req.body.name}
        </p>
        <p>
          <strong>Interested in:</strong> ${req.body.style}
        </p>
        <p>
          <strong>Message:</strong> ${req.body.message}
        </p>
      </body>
    </html>`
  };
  transport.sendMail(contactForm, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.send(info);
    }
  });
});

module.exports = router;