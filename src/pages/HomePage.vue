<script setup>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { blogsService } from '../services/BlogsService.js';
import Pop from '../utils/Pop.js';


    const blogs = computed(() => AppState.blogs)

    async function loadBlogs() {
      try {
        await blogsService.loadBlogs()
      }
      catch (error){
        Pop.error(error);
      }
    }

    onMounted(() => loadBlogs())
</script>

<template>
  <div class="container">
    <div class="row mt-5 justify-content-center">
      <div class="col-6 text-center">
        <h2>Recent Stories</h2>
        <button v-if="AppState.account" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning">Publish a Story</button>
      </div>
    </div>
    <div class="row mt-3 justify-content-center">
      <div class="col-xl-5 col-lg-6 col-md-10">
        <div class="row">
          <div v-for="blog in blogs" :key="blog.id" class="col-md-12 col-6 my-2">
            <BlogCard :blog="blog"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <StoryModal/>
</template>

<style scoped lang="scss">

</style>
