import Api from "./Api";
import { AxiosResponse } from "axios";
import { Post } from "@/interfaces/Post";

export const createPost = async (post: Post) => 
    await Api.post("/posts", post);

export const getPosts = async (): Promise<AxiosResponse> => 
    await Api.get("/posts");
