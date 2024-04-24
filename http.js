import { createServer } from 'node:http';
const hostname = "localhost";
const port = 3000;
const server = createServer(
  (request,response)=>{
    response.setHeader('Content-Type','text/plain');
    response.end('Hello World')
  }
);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); ;

