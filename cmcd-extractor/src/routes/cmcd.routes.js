import {Router} from 'express';
import { cmcdResponseMode, cmcdStateIntervalMode } from '../controllers/cmcd.controller.js';

const router = Router();

router.get("/response-mode", cmcdResponseMode);
router.post("/response-mode", cmcdResponseMode);

router.get("/state-interval-mode", cmcdStateIntervalMode);
router.post("/state-interval-mode", cmcdStateIntervalMode);

export default router;