<script setup>
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import Pop from '../utils/Pop.js';
import { profilesService } from '../services/ProfilesService.js';
import { blogsService } from '../services/BlogsService.js';

    let storiesSelected = ref(true)

    const userBlogs = computed(() => AppState.userBlogs)

    const route = useRoute()

    const profile = computed(() => AppState.currentProfile)

    async function getProfileById() {
        try {
            await profilesService.getProfileById(route.params.profileId)
        }
        catch (error){
          Pop.error(error);
        }
    }

    async function getUserBlogs() {
        try {
          await blogsService.loadUserBlogs(route.params.profileId)
        }
        catch (error){
          Pop.error(error);
        }
    }

    onMounted(() => {
        getProfileById()
        getUserBlogs()
    })

    onUnmounted(() => {
        AppState.currentProfile = null
        AppState.userBlogs = null
    })

</script>


<template>
    <div class="container">
        <div v-if="profile" class="mt-3 row justify-content-center">
            <div class="col-6 bg-body rounded">
                <div class="mt-2 mb-3 row justify-content-center">
                    <div class="col-12">
                        <img :src="profile.coverImg" class="pf-banner" alt="">

                    </div>
                    <div class="col-12 mb-5 pb-5 position-relative">
                        <div class="position-absolute" style="top: -50px;">
                            <img class="border ms-3 aspect sz-md rounded" :src="profile.picture" alt="">
                            <h3 class="ms-1 mt-1">{{ profile.name }}</h3>
                        </div>
                    </div>
                </div>

            </div>
            <div class="w-100"></div>
            <div class="col-6 mt-3">
                <button @click="storiesSelected = !storiesSelected" class="btn w-50" :class="{ 'text-warning selected': storiesSelected }">Stories</button>
                <button @click="storiesSelected = !storiesSelected" class="btn w-50" :class="{ 'text-warning selected': !storiesSelected }">Comments</button>
                <div v-if="storiesSelected" class="mt-3 row justify-content-center">
                    <div v-for="blog in userBlogs" :key="blog.id" class="col-11 my-2">
                        <BlogCard :blog="blog"/>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-center mt-3">
            <h1>Loading..</h1>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .pf-banner {
        height: 25dvh;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }

    .btn {
        border: none;
    }

    .selected,.selected:active {
        border-radius: 0;
        border: none;
        border-bottom: 1px solid var(--bs-warning);
    }
</style>