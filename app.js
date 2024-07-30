const express = require("express");
const http = require("http");

const app = express();
const fs = require("fs");
const clientPath = `${__dirname}`;
app.use(express.static(clientPath));
const server = http.createServer(app);
const port = process.env.PORT || 3000;

/* const redo = () => {
	io.emit("obstacleUpdate", {
		width: 10,
		multiplier: Math.random(),
		color: "red",
		position: "top",
	});
	requestAnimationFrame(redo);
};
requestAnimationFrame(redo);
 */
//

// Handling request

// Server Setup
server.listen(port, () => {
	console.log(`server is running at ${port}`);
});
console.log(clientPath);
