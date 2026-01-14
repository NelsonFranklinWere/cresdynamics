/**
 * Test script to verify email configuration
 * This will test if emails can be sent to cresdynamics@gmail.com
 */

const testEmailConfig = async () => {
  console.log('📧 Testing Email Configuration...\n');

  // Check if RESEND_API_KEY is set
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY is not set in environment variables');
    console.log('\n💡 To fix this:');
    console.log('   1. Get your API key from https://resend.com/api-keys');
    console.log('   2. Add it to your .env.local file: RESEND_API_KEY=re_xxxxx');
    return;
  }

  console.log('✅ RESEND_API_KEY is configured');

  // Check recipient email
  const recipientEmail = process.env.CONTACT_FORM_EMAIL || 'cresdynamics@gmail.com';
  console.log(`✅ Recipient email: ${recipientEmail}`);

  // Check sender email
  const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
  console.log(`✅ Sender email: ${senderEmail}\n`);

  // Test sending an email
  console.log('🧪 Attempting to send test email...\n');
  
  try {
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: `CRES Dynamics Test <${senderEmail}>`,
      to: [recipientEmail],
      subject: 'Test Email - CRES Dynamics Contact Form',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0D1B2A;">✅ Email Configuration Test</h2>
          <p>If you received this email, your contact form is configured correctly!</p>
          <p><strong>Recipient:</strong> ${recipientEmail}</p>
          <p><strong>Sender:</strong> ${senderEmail}</p>
          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            This is a test email from the CRES Dynamics contact form system.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('❌ Error sending email:', error);
      if (error.message) {
        console.error('   Message:', error.message);
      }
      return;
    }

    if (data) {
      console.log('✅ Test email sent successfully!');
      console.log(`   Email ID: ${data.id}`);
      console.log(`\n📬 Check your inbox at: ${recipientEmail}`);
      console.log('   (Also check spam/junk folder if not in inbox)');
      console.log('\n💡 Important Notes:');
      console.log('   - Gmail may take a few seconds to receive the email');
      console.log('   - If using onboarding@resend.dev, emails may go to spam initially');
      console.log('   - For production, verify your own domain in Resend dashboard');
    }
  } catch (err) {
    console.error('❌ Failed to send test email:', err.message);
  }
};

// Run the test
testEmailConfig();

