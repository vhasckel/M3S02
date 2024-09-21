
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/fundamentos") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello world, fundamentos nodejs aplicado.");
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Rota não encontrada.");
  }
});


const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
