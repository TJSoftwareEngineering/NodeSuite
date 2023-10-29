// Import required modules
const fs = require('fs'); // File System module
const http = require('http'); // HTTP module
const EventEmitter = require('events'); // Event Emitter module
const { exec } = require('child_process'); // Child Processes module

// Reading a File
fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log('Capability 1: Reading a File');
    console.log('File Contents:');
    console.log(data);
    console.log('------------------------');
  }
});

// Creating an HTTP Server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Capability 2: Creating an HTTP Server\nHello, Node.js!');
});

server.listen(3000, () => {
  console.log('HTTP Server is running on port 3000');
  console.log('Access it by opening http://localhost:3000 in your web browser.');
});

// Using setTimeout
setTimeout(() => {
  console.log('Capability 3: Using setTimeout');
  console.log('This code will run after a 2-second delay.');
  console.log('------------------------');
}, 2000);

// Working with Arrays
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);

console.log('Capability 4: Working with Arrays');
console.log('Original numbers:', numbers);
console.log('Doubled numbers:', doubledNumbers);
console.log('------------------------');

// Event Emitter
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('customEvent', () => {
  console.log('Capability 5: Event Emitter');
  console.log('Custom event emitted!');
  console.log('------------------------');
});

myEmitter.emit('customEvent');


// Child Processes (Cross-platform)
const platform = process.platform;

if (platform === 'win32') {
  exec('dir', (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing command:', error);
      return;
    }
    console.log('Capability 6: Child Processes (Cross-platform)');
    console.log('List of files and directories:');
    console.log(stdout);
    console.log('------------------------');
  });
} else {
  exec('ls', (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing command:', error);
      return;
    }
    console.log('Capability 6: Child Processes (Cross-platform)');
    console.log('List of files and directories:');
    console.log(stdout);
    console.log('------------------------');
});
}
