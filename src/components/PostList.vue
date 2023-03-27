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
                        <span @click="editPost()" class="glyphicon glyphicon-edit"
                                aria-hidden="true"></span>
                    </a>
                    <a>
                        <span @click="deletePost()" class="glyphicon glyphicon-trash"
                                aria-hidden="true"></span>
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
                titleDraft: '' as String,
                descriptionDraft: '' as String
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
            },
            updatePost () {
            },
            deletePost () {
            },
            cancelPost () {
            },
            isEmpty () {
            },
        },
    })
</script>