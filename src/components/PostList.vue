<template>
      <div class="flex flex-col justify-center items-center h-screen">
        <h2 class="text-2xl font-bold mb-4">Posts</h2>
        <ul class="container my-5 px-6 mx-auto lg:w-6/12 justify-center">
            <li class="bg-white shadow-md rounded-lg p-4 flex justify-between items-center mb-2">
                <div class="sm:col-span-1 sm:col-start-1">
                    <label for="title" class="block text-sm font-medium leading-6 text-gray-900">Title</label>
                </div>

                <div class="sm:col-span-2">
                    <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                </div>

                <div class="sm:col-span-1">
                        <label for="actions" class="block text-sm font-medium leading-6 text-gray-900">Actions</label>
                </div>
            </li>
            <li v-for="post in posts" :key="post._id" class="bg-white shadow-md rounded-lg p-4 flex justify-between items-center mb-2">
                <template v-if="!post.isEditing">
                    <div class="sm:col-span-1 sm:col-start-1">
                        <div class="mt-2">
                            <span type="text" name="title" id="title" class="w-full py-1.5 text-gray-900 sm:text-sm sm:leading-6">
                                {{ post.title }}
                            </span>
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <div class="mt-2">
                            <span type="text" name="description" id="description" class="w-full py-1.5 text-gray-900 sm:text-sm sm:leading-6">
                                {{ post.description }}
                            </span>
                        </div>
                    </div>
                </template>
                <template v-if="post.isEditing">
                    <div class="sm:col-span-1 sm:col-start-1">
                        <div class="mt-2">
                            <input type="text" v-model="titleDraft" class="w-full py-1.5 text-gray-900 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <div class="mt-2">
                            <textarea type="text" rows="1" v-model="descriptionDraft" class="w-full py-1.5 text-gray-900 sm:text-sm sm:leading-6"
                                ></textarea>
                        </div>
                    </div>
                </template>
                <div>
                    <template v-if="!post.isEditing">
                        <button @click="editPost(post)" class="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </button>
                        <button @click="deletePost(post._id as string)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>
                    </template>
                    <template v-if="post.isEditing">
                        <button v-if="isEmpty(titleDraft)" @click="updatePost(post)" class="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </button>
                        <button @click="cancelPost(post)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </template>

                </div>
            </li>
        </ul>
      </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue"
    import { Post } from "@/interfaces/Post"
    import { getPosts, updatePost, deletePost } from "@/services/PostService"

    export default defineComponent({
    data() {
        return {
            defaultProp: { isEditing: false } as Pick<Post, 'isEditing'>,
            posts: [] as Post[],
            titleDraft: "" as string,
            descriptionDraft: "" as string
        };
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            const { data } = await getPosts();
            this.posts = data.map((item: Post)  => {
                return {
                    ...this.defaultProp,
                    ...item
                }
            });
        },
        editPost(post: Post) {
            post.isEditing = !post.isEditing;
            this.titleDraft = post.title
            this.descriptionDraft = post.description
        },
        async updatePost(post: Post) {
            try {
                post.isEditing = !post.isEditing;
                post.title = this.titleDraft;
                post.description = this.descriptionDraft;
                await updatePost(post);
                this.$router.go(0);
            } catch (error) {
                console.log(error);
            }
        },
        async deletePost(id: string) {
            try {
                await deletePost(id);
                this.$router.go(0);
            } catch (error) {
                console.log(error);
            }
        },
        cancelPost(post: Post) {
             post.isEditing = !post.isEditing;
        },
        isEmpty(str: string) {
            return str.replace(/^\s+/g, '').length;
        },
    }
})
</script>