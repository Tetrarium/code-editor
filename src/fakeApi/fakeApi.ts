import { createServer } from "miragejs";

import { ICodeMessage } from "@/types/types";

function getRandomTiming(from: number, to: number) {
  return Math.random() * (to - from) + from;
};

function getRandomMessage(language: string) {
  const random = Math.random();

  return random < 0.5
    ? { message: `Код на языке ${language} выполнился успешно` }
    : { error: `Код на языке ${language} выполнился с ошибкой` };
}

export function makeServer() {
  const server = createServer({
    routes() {
      this.post('/api/run', (_, request) => {
        const data = JSON.parse(request.requestBody) as unknown as ICodeMessage;

        return getRandomMessage(data.language);
      }, {
        timing: getRandomTiming(300, 3000),
      });
    },
  });

  return server;
}
