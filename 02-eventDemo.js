const EventEmitter = require('events').EventEmitter;

let emitter = new EventEmitter();

const handler = function(data) {
    console.log('myEvent fired with data', data);
};

const anotherHandler = data => {
    console.log('Another handler with data:', data);
}

emitter.on('myEvent', anotherHandler);
emitter.on('myEvent', handler);

emitter.emit('myEvent', 44);
emitter.emit('myEvent', 55);
emitter.emit('myEvent', 66);

emitter.off('myEvent', handler);

emitter.emit('myEvent', 77);
emitter.emit('myEvent', 88);
