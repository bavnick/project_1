var nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
service: 'gmail',
secure: false,
port: 25,
auth: {
user: 'arunvigneshh@gmail.com',
pass: 'duckluck123'
},
tls: {
rejectUnauthorized: false
}
});
let HelperOptions = {
from: '"Arunvignesh" <arunvigneshh@gmail.com',
to: 'srisainaveen7@gmail.com',
subject: 'Email detector',
text: 'This message is send to you by email.js file with the help of node mailer'
};
transporter.sendMail(HelperOptions, (error, info) => {
if (error) {
return console.log(error);
}
console.log("The message was sent!");
console.log(info);
});
