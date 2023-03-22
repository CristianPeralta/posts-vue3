import { Router, Response, Request } from "express";
const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
	return res.json(200);
});

export default router;
