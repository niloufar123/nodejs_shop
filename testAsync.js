const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url,req.method,req.headers)
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<htmh><body>test</body></html>");
    return res.end();
  }

  fs.writeFileSync("message.txt", "myMessage");
  console.log("writeFileSync");

  fs.writeFile("message.txt", "myMessage", (err) => {
      if(err) console.log('err')
    console.log('call/back');
  });
  console.log('writeFile')
});

server.listen(3000);
