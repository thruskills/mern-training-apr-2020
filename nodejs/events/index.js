// 1. import events module
const events = require('events');

// 2. Create and event emitter
const eventEmitter = new events.EventEmitter();

// 3. Bind the event emitter with the handler
eventEmitter.on('connection', () => {
  console.log('Event triggerd : connection');
});

// 4. Trigger the event
eventEmitter.emit('connection');

console.log('program ends...');
