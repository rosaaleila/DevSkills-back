import { Router } from "express";
import UserDeveloperController from "../../src/api/controller/Developer/UserDeveloperController";

const router = Router()

router.post('/', UserDeveloperController.create)
router.get('/')

export default router
