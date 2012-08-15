var twitter = require('ntwitter');
var credentials = require('./credentials.js');
var io = require('socket.io').listen(8080);

var count= 1;

var t = new twitter({
    consumer_key: credentials.consumer_key,
    consumer_secret: credentials.consumer_secret,
    access_token_key: credentials.access_token_key,
    access_token_secret: credentials.access_token_secret
});


io.sockets.on('connection', function(socket) {

    t.stream(
	'statuses/filter', 
	{ track: ['heart', 'thanks'] },
	//{locations:'-33.90,151.20,-33.92,151.21,-33.98,151.22'},
    function(stream) {
      stream.on('data',function(data){
	  
		//var str = data.text;
		//if (str.indexOf("heart") !== -1){
		   io.sockets.emit('twitter', data.text);
		//}

			//count = 1;
			//socket.emit('twitter', count);
		 //socket.emit('twitter',data.text);
      });
    });
});

