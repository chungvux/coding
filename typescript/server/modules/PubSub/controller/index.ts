import { Request, Response } from "express";
import { EventEmitter } from "../../../utils/event/event-mitter";
import observer from '../observer'

const emitter = new EventEmitter();

const main = (req: Request, res: Response) => {
  emitter.emit('check', true, 1, 2, 3, 4);
  return res.json({
    home: 'Hello World'
  });
}

const home = (req: Request, res: Response) => {
  const data = emitter.callStore('check');
  const article = {
    id: '123456',
    name: 'Using Redis Pub/Sub with Node.js',
    blog: 'Logrocket Blog',
  };
  for (let i = 0; i < 100; i++) {
    observer.publishing('article', JSON.stringify(article));
  }
  return res.json({
    home: data
  });
}

export default {
  main,
  home
}