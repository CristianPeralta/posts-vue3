<template >
    <div >
      <h1>Add Post</h1>
      <form>
          <div>
            <div>
              <input type="text" name="title" placeholder="Title" v-model="title">
              <textarea rows="15" cols="15" 
                  placeholder="Description" 
                  v-model="description">
              </textarea>
              <button class="app_post_btn" @click="addPost">Add</button>
            </div>
          </div>
      </form>
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
