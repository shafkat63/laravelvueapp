<template>
  <div class="max-w-3xl mx-auto p-6">
    <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Posts CRUD</h2>

    <form @submit.prevent="submitPost" class="bg-white shadow-md rounded-lg p-6 mb-8 space-y-4">
      <div>
        <input
          v-model="form.title"
          placeholder="Title"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <textarea
          v-model="form.body"
          placeholder="Body"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          {{ form.id ? 'Update' : 'Create' }}
        </button>
      </div>
    </form>

    <ul class="space-y-4">
      <li
        v-for="post in posts"
        :key="post.id"
        class="bg-white shadow-md rounded-lg p-4"
      >
        <h3 class="text-xl font-semibold text-gray-800">{{ post.title }}</h3>
        <p class="text-gray-600">{{ post.body }}</p>
        <div class="mt-4 space-x-2">
          <button
            @click="editPost(post)"
            class="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition"
          >
            Edit
          </button>
          <button
            @click="deletePost(post.id)"
            class="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../axios'

const posts = ref([])
const form = ref({ id: null, title: '', body: '' })

const fetchPosts = async () => {
  const res = await api.get('/posts')
  posts.value = res.data
}

const submitPost = async () => {
  if (form.value.id) {
    await api.put(`/posts/${form.value.id}`, form.value)
  } else {
    await api.post('/posts', form.value)
  }
  form.value = { id: null, title: '', body: '' }
  fetchPosts()
}

const editPost = (post) => {
  form.value = { ...post }
}

const deletePost = async (id) => {
  await api.delete(`/posts/${id}`)
  fetchPosts()
}

onMounted(fetchPosts)
</script>
