<script setup>
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { computed, onMounted, onUnmounted } from 'vue';
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js';

    const blog = computed(() => AppState.currentBlog)

    const route = useRoute()

    async function getBlogById() {
        try {
          await blogsService.loadBlogById(route.params.blogId)
        }
        catch (error){
          Pop.error(error);
        }
    }

    onMounted(() => getBlogById())

    onUnmounted(() => AppState.currentBlog = null)
</script>


<template>
    <div class="container-fluid">
        <div v-if="blog" class="row my-5 justify-content-center">
            <div class="col-7 bg-page rounded p-5 border">
                <img class="mb-3 blogimg img-fluid" :src="blog.imgUrl" alt="">
                <h3>{{ blog.title }}</h3>
                <RouterLink :to="{ name: 'Profile View', params: { profileId: blog.creatorId } }" class="account d-flex align-items-center gap-2 text-light">
                    <img class="pfp sz-sm" :src="blog.creator.picture" alt="">
                    <span>{{ blog.creator.name }}</span>
                </RouterLink>
                <p class="mt-1 text-secondary">Updated at <span class="text-warning fw-bold">{{ blog.updatedAt.toLocaleString() }}</span></p>
                <p>{{ blog.body }}</p>
            </div>
        </div>
        <div v-else class="text-center mt-3">
            <h1>Loading..</h1>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .blogimg {
        aspect-ratio: 3/1;
        object-fit: cover;
        object-position: center;
    }

    .account {
        cursor: pointer;
    }
</style>