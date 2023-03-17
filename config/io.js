const { Server } = require("socket.io");
const EventEmitter = require("events").EventEmitter;
const emiter = new EventEmitter();
let io = {};

function connectIO(server) {
  io = new Server(server);

  io.on("connection", (socket) => {
    console.log("a user connected");
  });
}
// setInterval(() => {
//     io.emit('message', new Date().toISOString());
//   }, 1000);
const sendAnnouce = (annouce) => {
    io.emit('message', annouce); // Emit a 'annouce' event with the message data
  };
module.exports.actualizationAnnouce = sendAnnouce;
module.exports.connectIO = connectIO;
