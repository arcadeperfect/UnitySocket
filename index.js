// Create a new WebSocket connection
var socket = new WebSocket("ws://127.0.0.1:4000");

socket.addEventListener('close', function (event) {
    console.log('Connection closed', event);
});
// Event listener for connection open
socket.addEventListener('open', function (event) {
    console.log('Connection established successfully');
});

// Event listener for connection errors
socket.addEventListener('error', function (event) {
    console.log('Error connecting to WebSocket server:', event);
});

// Receive messages from server
socket.onmessage = (event) => {
    console.log(event.data);
  };

// Event listener for second_size slider
document.getElementById('second_size').addEventListener('input', function (event) {
    console.log('Slider second_size value:', event.target.value);
    socket.send(event.target.value);
});