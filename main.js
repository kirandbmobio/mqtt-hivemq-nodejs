var mqtt = require('mqtt')

var options = {
    host: 'f2a84ecc707c45d5818081516d177f10.s1.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'kiran1234',
    password: 'Kiran@9210'
}

//initialize the MQTT client
var client = mqtt.connect(options);

//setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    //Called each time a message is received
    console.log('Received message:', topic, message.toString());
});

// subscribe to topic 'my/test/topic'
client.subscribe('my/test/topic');

// publish message 'Hello' to topic 'my/test/topic'
client.publish('my/test/topic', 'Hello');
// subscribe to topic 'my/test/topic'
client.subscribe('my/test/topic1');

// publish message 'Hello' to topic 'my/test/topic'
client.publish('my/test/topic1', 'Hello1');
