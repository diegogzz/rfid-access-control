var net = require('net');
var models = require('./sequelize');

exports.initSocket = () => {
    let socketServer = net.createServer()
        .on("connection", (socket) => {
            socket.on("data", (data) => {
                console.log(data.toString());
                models.DoorAC.create({
                    code_rf: data.toString()
                });
            });
        }).on("listening", () => {
            console.log("listening");
        }).on("error", () => {
            console.log("error");
        }).on("close", () => {
            console.log("close");
        });
    socketServer.listen(
        {
            port: 443
        },
        () => {
            console.log('opened server on', socketServer.address());
        });
}