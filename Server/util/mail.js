import nodemailer from "nodemailer";
import mailRouter from "../routers/MailRouter.js";

     let testAccount = await nodemailer.createTestAccount();

     let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
     });

     export async function info() {
      let info = await transporter.sendMail({
        from: `"Flemming Flæskesværd" <kristianlaukryger@gmail.com>`,
        to: "kristianlaukryger@gmail.com",
        subject: "Yo yo yo whats puppin",
        text: "Hello world? Or something idk seems to be the standard around here",
        html: "<b>Hello there!</b>",
     });

     console.log("Message sent: %s", info.messageId);

     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
   }

export default info;