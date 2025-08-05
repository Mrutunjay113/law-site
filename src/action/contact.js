"use server";

import nodemailer from "nodemailer";

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: process.env.SMTP_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(formData) {
  try {
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    // Basic validation
    if (!fullName || !email || !message) {
      return { error: "Please fill in all required fields." };
    }

    if (!email.includes("@")) {
      return { error: "Please enter a valid email address." };
    }

    // Email options
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || "contact@yourdomain.com",
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #007bff;">Name:</strong> ${fullName}</p>
            <p><strong style="color: #007bff;">Email:</strong> ${email}</p>
            <p><strong style="color: #007bff;">Phone:</strong> ${phone || "Not provided"}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          <div style="text-align: center; margin-top: 30px; color: #6c757d; font-size: 14px;">
            <p>This message was sent from your website contact form.</p>
          </div>
        </div>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    if (info.messageId) {
      return {
        success: "Thank you for your message. We will get back to you soon!",
      };
    } else {
      return { error: "Failed to send email. Please try again." };
    }
  } catch (error) {
    console.error("Email error:", error);
    return { error: "Something went wrong. Please try again." };
  }
}
