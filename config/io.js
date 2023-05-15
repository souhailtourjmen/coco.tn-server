require("dotenv").config();
const { Server } = require("socket.io");
const { updatedChatRoom } = require("../services/chatSevice/roomService");
const EventEmitter = require("events").EventEmitter;
const emiter = new EventEmitter();
let io = {};

function connectIO(server) {
  io = new Server(server);

  io.on("connection", (socket) => {
    // When a user starts a chat
    socket.on("startChat", (data) => {
      if (data?.chatRoomId) {
        // Join both users to the private room
        socket.rooms.forEach((room) => {
          if (room !== socket.id) {
            socket.leave(room);
          }
        });
        socket.join(data?.chatRoomId);
        console.log(socket.rooms);
      }
    });
    // When a user sends a message
    socket.on("sendMessage", async (chat) => {
      const { chatRoomId, _chat } = chat;
      const { success, data, message } = await updatedChatRoom(
        chatRoomId,
        _chat
      );
      console.log(data);
      // Broadcast the message to the private room
      io.in(chat.chatRoomId).emit("receiveMessage", { chatRoomId, data });
    });
  });
}

const sendAnnouce = (annouce) => {
  io.emit("message", annouce); // Emit a 'annouce' event with the message data
};
module.exports.actualizationAnnouce = sendAnnouce;
module.exports.connectIO = connectIO;
