import twilio from 'twilio'
import config from '../config'
import { Router } from 'express'
const router = new Router()

var client = twilio(config.accountSid, config.authToken);
// Remove this
// import fakeDB from '../fakeDB.js'

  // Handle an AJAX POST request to place an outbound call
  router.get('/', function(request, response) {
    // This should be the publicly accessible URL for your application
    // Here, we just use the host for the application making the request,
    // but you can hard code it or use something different if need be
    // var salesNumber = request.body.salesNumber;

console.log('here')
    var salesNumber = "adf"
    var url = 'http://demo.twilio.com/docs/voice.xml'
    // var url = 'http://' + request.headers.host + '/api/v0/call/outbound/' + encodeURIComponent(salesNumber)

    // Place an outbound call to the user, using the TwiML instructions
    // from the /outbound route
    client.makeCall({
      to: '+17049969604',
      from: config.twilioNumber,
      url: url
    }, function(err, message) {
      console.log(err);
      if (err) {
        response.status(500).send(err);
      } else {
        response.send({
          message: 'Thank you! We will be calling you shortly.'
        });
      }
    });
  });

  // Return TwiML instuctions for the outbound call
  router.post('/outbound/:salesNumber', function(request, response) {
    var salesNumber = request.params.salesNumber;
    var twimlResponse = new twilio.TwimlResponse();

    twimlResponse.say('Meeting Mate is now recording your meeting.',
      { voice: 'alice' });

    twimlResponse.dial(salesNumber);

    response.send(twimlResponse.toString());
  });

  module.exports = router