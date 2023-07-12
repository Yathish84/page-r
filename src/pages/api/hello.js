// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// npm install nodemailer

const nodemailer = require('nodemailer');




const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'support@quantsigns.com',
    pass: 'Quant!23signs'
  },
  tls: {
    ciphers:'SSLv3'
  }
});


  const { email, password } = req.body;

  


    const mailOptions = {
      from: 'support@quantsigns.com',  // sender
      to: email,  // receiver
      subject: 'Welcome to our platform',
      text: 'Welcome! We\'re glad to have you here.',
      replyTo: 'support@quantsigns.com' 
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: 'Failed to send email' });
      } else {
        console.log('Email sent: ' + info.response);
        return res.status(200).json({ message: 'Login successful, Welcome email sent' });
      }
    });



