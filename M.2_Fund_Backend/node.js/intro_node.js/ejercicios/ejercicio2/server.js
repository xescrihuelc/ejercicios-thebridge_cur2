const http = require("http");
// const fs = require("fs");
const datas = require("./data.js");
const PORT = 8080;

http.createServer(function (req, res) {
    //

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ url: req.url, missatje: "borinot" }));

    //
    //
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.end(`
    // <!DOCTYPE html>
    // <html lang="es">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>${datas.objecto.title}</title>
    // </head>
    // <body>
    //     <h1>${datas.objecto.title}</h1>
    //     <h2>${datas.objecto.subtitle}</h2>
    //     <br/>
    //     <p>${datas.objecto.description}</p>
    // </body>
    // </html>
    // `);
}).listen(PORT);
