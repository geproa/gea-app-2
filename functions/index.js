



const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const db = admin.firestore();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'geproassist@gmail.com',
    pass: 'rimveneciamilano',
  },
});

exports.sendSuccessEmail = functions.firestore.document('entries/{entryId}')
  .onUpdate(async (change, context) => {
    const entryId = context.params.entryId;
    const entryData = change.after.data();

    // Check if status changed to "success"
    if (entryData.status === 'success') {
      const userEmail = entryData.email; // Assuming email is stored in the entry

      // Send email
      await sendEmail(userEmail, 'Success Message', 'Congratulations! Your entry has been marked as success.');
    }
  });

exports.sendWelcomeEmail = functions.firestore.document('entries/{entryId}')
  .onCreate(async (snapshot, context) => {
    const entryData = snapshot.data();
    const userEmail = entryData.email; // Assuming email is stored in the entry

    // Send email
    await sendEmail(userEmail, 'Welcome Message', 'Welcome! Your entry has been successfully added.');
  });

async function sendEmail(toEmail, subject, text) {
  try {
    await transporter.sendMail({
      from: 'geproassist@gmail.com',
      to: toEmail,
      subject: subject,
      text: text,
    });

    console.log(`Email sent to ${toEmail}`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
