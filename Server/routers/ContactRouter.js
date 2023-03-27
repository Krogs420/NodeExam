import {Router} from "express"
import nodemailer from "nodemailer";

const router = Router();

// POST route for sending email
router.post("/contact", async (req, res) => {
  const { name, mail, message } = req.body;

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
        }
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Naruto Customer Support" <sasuke@uchiha.dk>`,
      to: `${req.body.name} <${req.body.mail}>`,
      text: req.body.message,
    });

    console.log("Message sent: %s", info.messageId);
    res.send("Message sent successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error sending message. Please try again later.");
  }
});

export default router;
