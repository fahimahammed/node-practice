const EventEmitter = require('events');

const emitter = new EventEmitter();

// register a listener for bell ring event
emitter.on('bellRing', () => {
    console.log("We need to run!");
});

// raise an event
setTimeout(() => {
    emitter.emit('bellRing');
}, 2000);


