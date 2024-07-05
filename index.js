const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Initialize the client
const client = new Client({
    authStrategy: new LocalAuth()
});

function sendMessage(id, jsonMessage) {
    try {
        const { phoneNumber, message } = JSON.parse(jsonMessage);
        console.log(`Sending message to ${phoneNumber}: ${message}`);
        // Example: whatsappClient.sendMessage(phoneNumber, message);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
}

// Display the QR code in the terminal
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

// Log when the client is ready
client.on('ready', () => {
    console.log('Current Directory:', __dirname);
    console.log('Current File:', __filename);
    console.log('Client is ready!');
});

// Respond to messages
client.on('message', message => {
    console.log(`Received message: ${message.body}`);

    const id = args[0];
    const jsonMessage = args[1];

    console.log(id);
    console.log(jsonMessage);
    // sendMessage(id, jsonMessage);

    // if (message.body.toLowerCase() === 'hi') {
    //     message.reply('Hello! How can I assist you today?');
    // }

    console.log(`Received message: ${message.body}`);

    // Send to Laravel endpoint
    // sendToLaravel(id, jsonMessage);
});

// Start the client
client.initialize();
