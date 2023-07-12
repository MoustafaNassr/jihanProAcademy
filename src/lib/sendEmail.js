import nodemailer from "nodemailer";

export default async function sendEmail(email) {
  const transporter = nodemailer.createTransport({
    host: "",
    port: "",
    secure: true,
    auth: {
      user: "",
      pass: "",
    },
  });

  const info = await transporter.sendMail({
    from: "Your Name <your-gmail-account@gmail.com>",
    to: "jihan.academy@apexnile.com",
    subject: "New Email Subscription",
    text: `A new user with the email address ${email} has subscribed to your newsletter.`,
  });

  console.log("Message sent: %s", info.messageId);
}
