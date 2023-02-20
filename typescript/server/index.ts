import express, { Express } from "express";
const app: Express = express();
import observer from "./modules/PubSub/observer";
import router from './modules/index.route';


app.use(router);

observer.publisher.connect()
  .then(() => {
    app.listen(3000, () => {
      console.log('App listens on http://localhost:3000');
    });
  }).catch(err => {
    const msg = err.message || err ||'Something went wrong !!!';
    console.log(msg);
  });
