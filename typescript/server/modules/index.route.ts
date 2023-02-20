import express, { Router } from "express";
import pubsub from './PubSub/router';

const router: Router = express.Router();

router.use('/pubsub', pubsub);


export default router;