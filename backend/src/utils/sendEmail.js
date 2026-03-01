const nodemailer = require("nodemailer");

const sendEmail = async (to, couponCode) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"TaskMan" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your TaskMan Coupon 🎉",
    html: `
      <h2>Welcome to TaskMan 🚀</h2>
      <p>Thanks for signing up.</p>
      <h3>Your Coupon Code:</h3>
      <div style="font-size:22px;font-weight:bold;background:#f3f6ff;padding:12px;border-radius:8px;display:inline-block">
        ${couponCode}
      </div>
      <p>Use this to get 20% OFF.</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;