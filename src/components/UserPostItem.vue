<template>
  <div class="post_box">
    <div class="post_main">내가 작성한 글</div>
    <hr />
    <div class="post_list">
      <template v-for="(item, index) in list" v-bind:key="index">
        <div class="info_line">
          {{ item[index] }}
        </div>
        <hr />
      </template>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('userinfo')

export default {
  name: "UserPostItem",
  computed: {
    ...mapState({
      list: state => state.userinfo.postTitle
    }),
  },
};
</script>

<style scoped>
.post_box {
  width: 100%;
  height: 57%;
}

.post_main {
  width: 90%;
  height: 15%;
  display: block;
  margin: 0 auto;
  font-size: 2rem;
  line-height: 200%;
}
.post_list {
  width: 90%;
  height: 80%;
  display: block;
  margin: 0 auto;
}
.info_line {
  width: 100%;
  height: 25%;
  font-size: 1.3rem;
  line-height: 400%;
}
</style>
