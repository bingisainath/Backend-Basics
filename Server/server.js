// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());


app.get("/", (req, res) => res.send("Hello!"));

app.get("/stream", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders(); // Send headers to establish SSE

    let i = 0;
    const interval = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(interval);
            return;
        }
        res.write(`data: hello from server ------[${i++}]\n\n`);
        console.log("Writing res", i);
    }, 1000);

    // Handle client disconnection
    req.on("close", () => {
        clearInterval(interval);
        console.log("Client disconnected");
    });
});

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Listening on port ${port}`));
