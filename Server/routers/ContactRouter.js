import {Router} from "express"
import nodemailer from "nodemailer";

const router = Router();


router.get("/mail", async (req, res) => {
  res.send({message: "Hej"});
})
// POST route for sending email
router.post("/mail", async (req, res) => {
  const { name, mail, message } = req.body;

  console.log("Hello")
  try {
    // Create a transporter object with SMTP settings
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        },
        tls: {
            rejectUnauthorized: false // allow self-signed certificates
        }
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Naruto Customer Support" <sasuke@uchiha.dk>`,
      to: `${req.body.name} <${req.body.mail}>`,
      subject: "hej",
      text: req.body.message,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview url:%s", nodemailer.getTestMessageUrl(info));
    res.send("Message sent successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error sending message. Please try again later.");
  }
});

export default router;
