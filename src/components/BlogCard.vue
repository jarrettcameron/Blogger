<script setup>
import { AppState } from '../AppState.js';
import { Blog } from '../models/Blog.js';
import { blogsService } from '../services/BlogsService.js';
import Pop from '../utils/Pop.js';

    defineProps({ blog: Blog })

    async function deleteBlog(blog) {
        try {
            const conf = await Pop.confirm('Are you sure you want to delete this blog?')
            if (!conf) return
          await blogsService.deleteBlog(blog)
        }
        catch (error){
          Pop.error(error);
        }
    }
</script>


<template>
    <div class="card shadow selectable">
        <RouterLink :to="{ name: 'Blog Viewer', params: { blogId: blog.id } }" class="text-light">
        <img :src="blog.imgUrl" alt="" class="card-img-top">
        <div class="card-body">
            <span class="card-title">
                <h4>{{ blog.title }}</h4>
            </span>
            <RouterLink :to="{ name: 'Profile View', params: { profileId: blog.creatorId } }" class="account d-flex align-items-center gap-2 text-light">
                    <img class="pfp sz-sm" :src="blog.creator.picture" alt="">
                    <span>{{ blog.creator.name }}</span>
                </RouterLink>
            <p class="mt-1">Updated at <span class="text-warning fw-bold">{{ blog.updatedAt.toLocaleString() }}</span></p>
            <p class="preview text-secondary">{{ blog.body }}</p>
        </div>
    </RouterLink>
</div>
    <button @click="deleteBlog(blog)" v-if="blog.creatorId == AppState.account?.id" class="btn btn-danger">Delete</button>
</template>


<style lang="scss" scoped>
    .card-img-top {
        object-fit: cover;
        height: 35dvh;
    }

    .preview {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .account {
        cursor: pointer;
    }
</style>