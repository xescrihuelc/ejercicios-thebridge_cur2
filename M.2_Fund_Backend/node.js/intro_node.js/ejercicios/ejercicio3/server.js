const http = require("http");
const PORT = 8080;

http.createServer(function (req, res) {
    //
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1");
    // res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
    // res.setHeader("Access-Control-Max-Age", 2592000);
    const object = {
        url: req.url,
        method: req.method,
        httpVersion: req.httpVersion,
        message: "Hello!",
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(object));
}).listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
