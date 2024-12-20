import { createServer } from "miragejs";

// function getRandomTiming(from: number, to: number) {
//   return Math.random() * (to - from) * from;
// };

export function makeServer() {
  const server = createServer({
    routes() {
      this.post('/api/run', (_, request) => {
        const data = JSON.parse(request.requestBody);

        console.log(data);

        return { result: 'Execute code succed' };
      }, {
        timing: 2000,
      });
    },
  });

  return server;
}
