#!/usr/bin/env node

/**
 * Script to send follow-up emails to subscribers
 * Run this script daily with a cron job:
 * 0 9 * * * cd /path/to/your/project && node send-followup-emails.js
 */

const https = require('https');

const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://cresdynamics.com/api/send-followup'
  : 'http://localhost:3000/api/send-followup';

function sendFollowUpEmails() {
  return new Promise((resolve, reject) => {
    const url = new URL(API_URL);

    const options = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname,
      method: 'GET',
      headers: {
        'User-Agent': 'CRES-Dynamics-Followup-Script/1.0'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          console.log(`[${new Date().toISOString()}] Follow-up script result:`, response);
          resolve(response);
        } catch (error) {
          console.error(`[${new Date().toISOString()}] Error parsing response:`, error);
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      console.error(`[${new Date().toISOString()}] Request error:`, error);
      reject(error);
    });

    req.setTimeout(30000, () => {
      console.error(`[${new Date().toISOString()}] Request timeout`);
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

// Run the script
if (require.main === module) {
  console.log(`[${new Date().toISOString()}] Starting follow-up email script...`);

  sendFollowUpEmails()
    .then((result) => {
      console.log(`[${new Date().toISOString()}] Script completed successfully:`, result);
      process.exit(0);
    })
    .catch((error) => {
      console.error(`[${new Date().toISOString()}] Script failed:`, error);
      process.exit(1);
    });
}

module.exports = { sendFollowUpEmails };
