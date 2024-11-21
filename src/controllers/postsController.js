import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // http.cat
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}