// Create a file named “index.js”
console.log('Nakamu');

// Part 3: Node Package Manager
// To get started with some of the basic functions of npm, use the “init” command in the same directory that you 
// previously created your test index.js file. This will give you the following screen:
// Part 4: Creating a Server
// First, we want to use the require keyword to include the http module, 
// which is built into Node (and does not need to be installed separately by npm). 
// This module allows node to transfer data over the Hyper Text Transfer Protocol (HTTP) used by the internet.

const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {  
    res.statusCode = 200; 
     res.setHeader('Content-Type', 'text/plain'); 
     res.write('<h1 style="color: red">Hello World!</h1>');
       res.write('<p>I wonder what else we can send...</p>'); 
        res.end();
    });

      server.listen(port, hostname, () => { 
         console.log(`Server running at http://${hostname}:${port}/`);
        });

        const express = require('express');
        const app = express();
        
        // Default route
        app.get('/', (req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1 style="color: red">Hello World!</h1>');
            res.write('<p>I wonder what else we can send...</p>');
            res.end();
        });
        
        // Route 1: About
        app.get('/about', (req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1>About Us</h1>');
            res.write('<p>We are a team of developers.</p>');
            res.end();
        });
        
        // Route 2: Contact
        app.get('/contact', (req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1>Contact Us</h1>');
            res.write('<p>Email us at contact@example.com</p>');
            res.end();
        });
        
        // Start the server
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
        