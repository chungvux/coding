import express, { Router } from "express";
import controller from "../controller";

const router: Router = express.Router()

router.get('/', controller.main);
router.get('/home', controller.home);


export default router;