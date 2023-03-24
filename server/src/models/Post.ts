import { Schema, model } from "mongoose";

interface IPost {
	title: string;
	description: string;
}

const postSchema = new Schema({
	title: { type: String, required: "Title is required" },
	description: { type: String, default: "Description ..." },
});

const Post = model<IPost>("Post", postSchema);

export default Post;
