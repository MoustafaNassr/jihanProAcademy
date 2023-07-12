import nodemailer from "nodemailer";

export default async function sendEmail(email) {
  const transporter = nodemailer.createTransport({
    host: "smtp.yahoo.mail.com",
    port: 465,
    secure: true,
    auth: {
      user: "jihan.academy@apexnile.com",
      pass: "112233",
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
