import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { api } from "./AxiosService.js"

class BlogsService {
    async deleteBlog(blog) {
        const index = AppState.blogs.findIndex(x => x.id == blog.id)
        if (index == -1) throw new Error("Couldn't find blog!")

        await api.delete(`/api/blogs/${blog.id}`)
        AppState.blogs.splice(index, 1)

    }

    constructor() {

    }

    async postBlog(formData) {
        const response = await api.post('/api/blogs', formData)
        AppState.blogs.unshift(new Blog(response.data))
    }

    async loadUserBlogs(userId) {
        const response = await api.get(`/api/blogs?creatorId=${userId}`)
        AppState.userBlogs = response.data.map(x => new Blog(x))
    }

    async loadBlogById(blogId) {
        const response = await api.get(`/api/blogs/${blogId}`)
        AppState.currentBlog = new Blog(response.data)
    }

    async loadBlogs() {
        const response = await api.get('/api/blogs')
        AppState.blogs = response.data.map(x => new Blog(x))
    }
}

export const blogsService = new BlogsService()