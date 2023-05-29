<template>
  <div class="content_box">
    <div class="title_box">
      <input type="text" placeholder="제목을 입력하세요" v-model="postinfo.title">
    </div>
    <hr>
    <div class="post_box">
      <textarea placeholder="내용을 입력하세요" v-model="postinfo.content"></textarea>
    </div>
    <hr>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations} = createNamespacedHelpers('writepost')

export default {
  name: "WritePostContent",
  computed: {
    postinfo: {
      get() {
        return this.pinfo;
      },
      set(value) {
        this.updateWritePost(value);
      }
    },
    ...mapState({
      pinfo: state => state.writepost,
    }),
  },
  methods: {
    ...mapMutations(['updateWritePost']),
  }
};
</script>

<style scoped>
.content_box {
  width: 100%;
  height: 50%;
}

.title_box {
  width: 90%;
  height: 15%;
  display: block;
  margin: 0 auto;
}

.post_box {
  width: 90%;
  height: 80%;
  display: block;
  margin: 0 auto;
}

input[type=text] {
  width: 100%;
  height: 100%;
  border: none;
  font-size: 1.2rem;
  overflow-y: scroll;
}

textarea {
  width: 100%;
  height: 100%;
  border: none;
  font-size: 1.2rem;
}
</style>