import { RequestHandler, Response, Request } from "express";
import Post from "../../models/Post";

const get: RequestHandler = async (req: Request, res: Response) => {
	try {
		const posts = await Post.find({});
		return res.json(posts);
	} catch (error) {
		if (error) res.status(500).send(error);
	}
};

export default get;
