const { Server } = require("socket.io");
const socketRoutes = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
    transports: ["websocket", "polling"],
  });

  io.on("connection", async (socket) => {
    socket.on("newProduct", (product) => {
      io.emit("newProduct", product);
    });
    socket.on("updatedProduct", (product) => {
      io.emit("updatedProduct", product);
    });
    return io;
  });

  return io;
};

module.exports = socketRoutes;
