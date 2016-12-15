import app from '../app'

const config = {
  nodeEnv: process.env.NODE_ENV,
  webConcurrency: process.env.WEB_CONCURRENCY || 1,
  port: process.env.PORT || 5000,
  timeout: 29000,
  // Twilio Account SID - found on your dashboard
  accountSid: app.env.TWILIO_ACCOUNT_SID.value,

  // Twilio Auth Token - found on your dashboard
  authToken: app.env.TWILIO_AUTH_TOKEN.value,

  // A Twilio number that you have purchased through the twilio.com web
  // interface or API
  twilioNumber: app.env.TWILIO_NUMBER.value
}

module.exports = config
