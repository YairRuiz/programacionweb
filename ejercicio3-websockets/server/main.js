var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

var messages = [
	{
		id: 0,
		text: ` `,
		author: ` `,
	},
];

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.status(200).send("This is the root");
});

app.get("/hello", (req, res) => {
	res.status(200).send("Hello World!!!!!!!!!!!");
});

io.on("connection", (socket) => {
	console.log("Someone has connected with sockets!");

	socket.emit("messages", messages);

	socket.on("new-message", (data) => {
		messages.push(data);
		console.log(data);

		io.sockets.emit("messages", messages);
	});
});

server.listen(8080, () => {
	console.log("Server is running in http://localhost:8080");
});
