import Post from "./post.js";
import FileService from "./fileService.js";

class PostService {
    async create(post, picture) {
        const fileName = FileService.saveFile(picture);
        const createdPost = await Post.create({...post, picture: fileName});
        return createdPost;
    }

    async getAll() {
        const posts = await Post.find();
        return posts;
    }
    async getOne(id) {
        if (!id) {
            throw new Error(':ccc')
        }
        const post = await Post.findById(id);
        return post;
    }

    async update(post) {
        console.log(post);
        if (!post._id) {
            throw new Error(':cc')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost;
    }

    async delete(id) {
            if (!id) {
                throw new Error(':ccc')
            }
            const post = await Post.findByIdAndDelete(id);
            return post;
    }
}


export default new PostService();