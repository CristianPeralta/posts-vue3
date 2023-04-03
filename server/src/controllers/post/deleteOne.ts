import { RequestHandler, Response, Request } from "express";
import Post from "../../models/Post";

const deleteOne: RequestHandler = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		await Post.findByIdAndRemove(id);
		return res.json(200);
	} catch (error) {
		if (error) res.status(500).send(error);
	}
};

export default deleteOne;
