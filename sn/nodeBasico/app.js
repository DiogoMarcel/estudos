let http = require('http');
let handle = require('./handle');

// let events = require('events');
// let emiter = new events.EventEmitter();
// require('console-log-hello-world');

// emiter.on('say12', say);

// function say() {
//     console.log('Im saying...');
// }

// emiter.emit('say12')

let s = require('./name');
console.log('a-', s, '-b-', s.name('i am foda'), '-c');

// console.log(handle)
let server = http.createServer(handle.fn);

server.listen(3000, function() {
    console.log('Server is listening at port 3000');
});


// server.on('request', function() {
//     console.log('a new request...');
// })