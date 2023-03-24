import { RequestHandler, Response, Request } from "express";
import Post from "../../models/Post";

const updateOne: RequestHandler = async (req: Request, res: Response) => {
	try {
		const data = req.body;
		const post = await Post.findById(data._id);
		if (!post) {
			return res.status(404).send("Post Not found");
		}
		post.title = data.title ? data.title : post.title;
		post.description = data.description ? data.description : post.description;
		await post.save();
		return res.json(200);
	} catch (error) {
		if (error) res.status(500).send(error);
	}
};

export default updateOne;
