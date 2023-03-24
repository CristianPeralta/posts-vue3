import { RequestHandler, Response, Request } from "express";
import Post from "../../models/Post";

const add: RequestHandler = async (req: Request, res: Response) => {
	try {
		const data = req.body;
		const newPost = new Post({
			title: data.title,
			description: data.description,
		});
		const post = await newPost.save();

		return res.json(post);
	} catch (error) {
		if (error) res.status(500).send(error);
	}
};

export default add;
