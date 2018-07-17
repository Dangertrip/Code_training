const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

var test = {}
const myEmitter = new MyEmitter();

//myEmitter.on('event',()=>{
//	console.log("event happened!");
//});
myEmitter.on('event', function(a,b){
	console.log(a,b,this);
});

myEmitter.emit('event','a','b');

