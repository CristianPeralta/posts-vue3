<template >
    <div class="container my-5 px-6 mx-auto">
        <section class="mb-5 text-gray-800 text-center">
            <div class="flex flex-wrap justify-center">
                <div class="grow-0 shrink-0 flex-basis w-full lg:w-6/12 px-3">

                    <h2 class="text-3xl font-bold mb-6">New Post</h2>
                    <div class="md:flex flex-row">
                        <input
                            id="title-form"
                            type="text"
                            class="form-control block w-full 
                                px-4 py-2 mb-2 md:mb-0 md:mr-2 
                                text-xl font-normal text-gray-700 bg-white 
                                bg-clip-padding border border-solid border-gray-300 
                                rounded transition ease-in-out m-0 
                                focus:text-gray-700 focus:bg-white 
                                focus:border-blue-600 focus:outline-none"
                            placeholder="Title"
                            v-model="title"
                            required
                        />
                        <textarea
                            class="form-control block w-full 
                                    px-4 py-2 mb-2 md:mb-0 md:mr-2 
                                    text-xl font-normal text-gray-700 bg-white 
                                    bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 
                                    focus:text-gray-700 focus:bg-white 
                                    focus:border-blue-600 focus:outline-none
                                    text-justify"
                            id="description-form"
                            rows="1"
                            placeholder="Description"
                            v-model="description"
                            ></textarea>
                        <button
                            type="submit"
                            class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            @click="addPost()"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue"

export default defineComponent({
    data() {
        return {
            title: '' as string,
            description: '' as string,
        }
    },
    methods: {
        addPost () {
            alert(`submit new post: title => ${this.title} , description => ${this.description}`);
            this.$router.go(0);
        }
    }
})
</script>
