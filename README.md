# realtime-online-users-counter

Real-time online users counter developed with Node.js, Express & Socket.io

The objective of this project is to show how the JavaScript library ***Socket.IO*** offers the ability to send and receive any event with any data.

This project consists of two parts: **Server part** (for Node.js and Express) and **Clients part** (for web browsers).

Socket.IO is implemented in both server and clients to establish a communication based on an event-driven architecture.

#### How was it implemented?

- When a client connects to the server, the server transmits the current number of online clients connected to all clients.

- When a client disconnects from the server, the server transmits the current number of online clients connected to all clients.

## Technologies Implemented

**Server**

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)

**Client**

- [JQuery](https://jquery.com/)
- [Bulma CSS](https://bulma.io/)


## Installation

Clone the project and then execute the next command.

```bash
npm init
```

## Usage

Before running this application, you must change the IP address and port number inside the ___./app.js___ file (for the server) and the ___./public/javascripts/index.js___ file (for the client).

1. Editing ***./app.js*** file.
2. Editing ***./public/javascripts/index.js*** file.
3. Finally run it.

```bash
node app.js
```

## Example

![example](https://github.com/luisfrojas/realtime-online-users-counter/blob/master/public/images/example.gif)
