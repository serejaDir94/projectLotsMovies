require ("dotenv").config()
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: process.env.Email,
        pass: process.env.PASSWORD
    }

})

const mailOptions = {
    from: 'lotsmoviesru@gmail.com' ,
    to: 'lotsmoviesru@gmail.com',
    subject: 'OLOLLOL',
    text: 'qweqweqweqweqwe'
}

transporter.sendMail(mailOptions)