const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Configure transporter once
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Email templates
const adminMailTemplate = ({ name, email, subject, message }) => ({
  from: `"${name}" <${email}>`,
  to: process.env.TO_EMAIL,
  subject,
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
      <div style="background: linear-gradient(90deg, #7e22ce, #ec4899); padding: 20px; color: white; text-align: center;">
        <h2 style="margin: 0;">📩 New Contact Form Submission</h2>
      </div>
      <div style="padding: 20px; background-color: #f9fafb;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #fff; border: 1px solid #eee; padding: 15px; border-radius: 8px; color: #333; line-height: 1.6;">
          ${message.replace(/\n/g, "<br>")}
        </div>
      </div>
      <div style="background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
        This message was sent from your portfolio contact form.
      </div>
    </div>
  `,
});

const clientMailTemplate = ({ name, email }) => ({
  from: `"Your Portfolio" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "✅ We’ve received your message!",
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
      <div style="background: linear-gradient(90deg, #7e22ce, #ec4899); padding: 20px; color: white; text-align: center;">
        <h2 style="margin: 0;">Thank You for Reaching Out, ${name}!</h2>
      </div>
      <div style="padding: 20px; background-color: #f9fafb; color: #333;">
        <p>Hi <strong>${name}</strong>,</p>
        <p>We’ve received your message and will get back to you as soon as possible.</p>
        <p>In the meantime, feel free to explore our website 🚀.</p>
        <p style="margin-top: 20px;">Cheers,<br/> <strong>Amos Mwangi</strong></p>
      </div>
      <div style="background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
        This is an automated confirmation — no need to reply.
      </div>
    </div>
  `,
});

// Contact route
app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Send to admin
    await transporter.sendMail(adminMailTemplate({ name, email, subject, message }));

    // Auto-reply to client
    await transporter.sendMail(clientMailTemplate({ name, email }));

    res.status(200).json({
      success: true,
      message: "Message sent successfully, client notified!",
    });
  } catch (error) {
    console.error("❌ Email Error:", error);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
