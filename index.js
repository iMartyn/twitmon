var monitor_hashtag = '3dcube'
var util = require('util'),
    twitter = require('twitter');
var twit = new twitter({
    consumer_key: 'IvZ19SGREFQR5xw0PBpI57HlG',
    consumer_secret: 'pyjbJaBa6XYPyR8fVjHPmUgWtKoLqQdjP4boit906BN7A1QHbw',
    access_token_key: '77973285-7N6SczFQ6OZfU8ZikH6gJq99xWHejpPMK024bMAyO',
    access_token_secret: '1d8yEaC4zPFlC5qpzLkom8u0Ip2I2qUjmcyJygyzHbtvH'
});
twit.verifyCredentials(function(data) {
    console.log('We have (probably) got a twitter connection.');
});
twit.stream('user', {track:monitor_hashtag}, function(stream) {
    stream.on('data', function(data) {
        if ('text' in data && data.text.indexOf('#'+monitor_hashtag) > -1) {
            console.log(util.inspect(data.text));
        }
    });
});
