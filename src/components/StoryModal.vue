<script setup>
import { ref } from 'vue';
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js';
import { Modal } from 'bootstrap';

const formData = ref({
    title: '',
    body: '',
    imgUrl: ''
})

async function postBlog() {
    try {
        await blogsService.postBlog(formData.value)
        formData.value = {title: '',
    body: '',
    imgUrl: ''}
        Modal.getOrCreateInstance('#exampleModal').hide()
    }
    catch (error){
        Pop.error(error);
    }
}

</script>


<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Publish a Story</h5>
                        <button role="button" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="postBlog()">
                        <div class="form-floating mb-3">
                            <input v-model="formData.title" id="title" class="form-control" type="text" required>
                            <label for="title">Title</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="formData.imgUrl" id="imgUrl" class="form-control" type="url" required>
                            <label for="imgUrl">Image URL</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea v-model="formData.body" id="body" class="form-control" style="height: 200px;" required></textarea>
                            <label for="body">Body</label>
                        </div>
                        <button class="btn btn-warning">Post Story</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>