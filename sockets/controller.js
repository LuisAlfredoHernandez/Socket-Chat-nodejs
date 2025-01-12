const { Socket } = require("socket.io");

// remove new Socket instantiation class from function constructor as placeholder, this could throw errors.
// usage just for development purpose aka.

const socketController = (socket = new Socket()) => {
  console.log("cliente conectado", socket.id);
};

module.exports = {
  socketController,
};
