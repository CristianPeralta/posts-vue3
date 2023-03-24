import { Router, Response, Request } from "express";

import * as postController from "../controllers/post/index";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
	return res.json(200);
});

router.post("/posts", postController.add);
router.get("/posts", postController.get);

export default router;
