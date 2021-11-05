
const fs = require("fs");

const RouteHandler=(req,res)=>{
    const url = req.url;
    const method = req.method;
  
    if (url === "/") {
      res.setHeader("Content-Type", "text/html");
      res.write(
        '<htmh><body><form action="/message" method="POST"><input type="text" name="test" /><button type="submit">send</button></form></body></html>'
      );
      return res.end();
    }
    if (url === "/message" && method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
     return req.on("end", (chunk) => {
        const messageBuffer = Buffer.concat(body).toString();
        const myMessage = messageBuffer.split("=")[1];
        fs.writeFile('message.txt', myMessage, err => {
          res.statusCode = 302;
          res.setHeader('Location', '/');
          return res.end();
        });
      });
    }
  
    res.setHeader("Content-Type", "text/html");
    res.write("<htmh><body><h1>Hello World!</h1></body></html>");
    res.end();
}

// exports.RouteHandler=RouteHandler
module.exports={RouteHandler}