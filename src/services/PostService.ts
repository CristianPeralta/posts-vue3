import Api from "./Api";
import { AxiosResponse } from "axios";
import { Post } from "@/interfaces/Post";

export const createPost = async (post: Post) => 
    await Api.post("/posts", post);

export const getPosts = async (): Promise<AxiosResponse> => 
    await Api.get("/posts");

export const updatePost = async (post: Post) => 
    await Api.put("/posts", post);

export const deletePost = async (id: string) => 
    await Api.delete(`/posts/${id}`);
