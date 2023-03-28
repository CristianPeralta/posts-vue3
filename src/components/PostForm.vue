<template >
    <div >
      <h1>Add Post</h1>
        <div>
          <div>
            <input type="text" name="title" placeholder="Title" v-model="title">
          </div>
          <div>
            <textarea rows="15" cols="15" 
                placeholder="Description" 
                v-model="description">
            </textarea>
          </div>
          <div>
            <button class="app_post_btn" @click="addPost">Add</button>
          </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue"

export default defineComponent({
    data() {
        return {
            title: '' as string,
            description: 's' as string,
        }
    },
    methods: {
        addPost () {
            alert("submit new post");
        }
    }
})
</script>
