var net = require('net');
var models = require('./sequelize');

exports.initSocket = () => {
    let socketServer = net.createServer()
        .on("connection", (socket) => {
            socket.on("data", (data) => {
                console.log(data.toString());
                models.DoorAC.create({
                    code_rf: data.toString()
                }).then(doorAC => {
                    console.log(doorAC.toJSON());
                  }).catch(err => {
                      console.log(err)
                  });
            });
        }).on("listening", () => {
            console.log("Socket Server Listening");
        }).on("error", () => {
            console.log("Socket Server Error");
        }).on("close", () => {
            console.log("Socket Server Close");
        });
    socketServer.listen(
        {
            port: 443
        },
        () => {
            console.log('opened server on', socketServer.address());
        });
}