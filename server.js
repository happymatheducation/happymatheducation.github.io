const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

let colorFromBackEnd = '#765432';

wss.on('connection', (ws) => {
    console.log('Client connected');

    // Send initial color to client
    ws.send(colorFromBackEnd);

    // Handle color change requests from clients
    ws.on('message', (message) => {
        let colorFromFrontEnd = message;
        ws.send(colorFromFrontEnd);
        console.log(message)
    });

    // Close connection when client disconnects
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Broadcast color updates to all connected clients
function broadcast(colorFromBackEnd) {
    wss.clients.forEach((client) => {
        client.send(colorFromBackEnd);
    });
}
