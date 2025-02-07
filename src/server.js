import net from "net";

const server = net.createServer((socket) => {
    socket.on("data", (data) => {
        console.log(data.toString());
    });
});

server.listen(8080, () => {
    console.log("Server listening on port 8080.");
});
