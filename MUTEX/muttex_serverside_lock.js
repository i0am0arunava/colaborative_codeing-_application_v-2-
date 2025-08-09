const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });

const locks = {}; 

wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    const { type, fileId, userId } = JSON.parse(msg);

    if (type === "LOCK_REQUEST") {
      if (!locks[fileId]) {
        locks[fileId] = userId;
        ws.send(JSON.stringify({ type: "LOCK_GRANTED", fileId }));
      } else {
        ws.send(JSON.stringify({ type: "LOCK_DENIED", fileId }));
      }
    }

    if (type === "LOCK_RELEASE") {
      if (locks[fileId] === userId) {
        delete locks[fileId];
        ws.send(JSON.stringify({ type: "LOCK_RELEASED", fileId }));
      }
    }
  });
});
