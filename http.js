const hostname = "localhost";
const port = 3000;
import { createServer } from 'node:http';
var server = createServer(
  (request,response)=>{
    response.setHeader('Content-Type','text/plain');
    response.end('Hello World')
  }
);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); ;

