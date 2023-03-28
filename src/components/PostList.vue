<template>
    <div >
      <h1>Posts</h1>
      <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li v-for="post in posts" class="flex items-center">
            <template v-if="true">
                <span class="font-semibold text-gray-900 dark:text-white"><b>{{ post.title }}</b></span> : 
                <span class="font-semibold text-gray-900 dark:text-white">{{ post.description }}</span>
                <div>
                    <a>
                        <button @click="editPost()"  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            EDIT
                        </button>
                    </a>
                    <a>
                        <button @click="deletePost()" class="bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                            DELETE
                        </button>
                    </a>
                </div>
            </template>
          </li>
      </ul>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue"
    import { Post } from "@/interfaces/Post"

    export default defineComponent({
        data() {
            return {
                posts: [
                {
                    title: "title 0",
                    description: "descsriptjon 0",
                    _id: "123dasd123123"
                }
                ] as Post[],
                titleDraft: '' as string,
                descriptionDraft: '' as string
            }
        },
        created () {
            this.getPosts();
        },
        methods: {
            getPosts () {
                console.log("getting posts...");
                this.posts.push({
                    title: "title 1",
                    description: "descsriptjon 1",
                    _id: "123dasd123123"
                });
            },
            editPost () {
                alert("Edit Post");
            },
            updatePost () {
            },
            deletePost () {
                alert("Delete this Post");
            },
            cancelPost () {
            },
            isEmpty () {
            },
        },
    })
</script>