<template>
  <img src="../assets/home_writepost_icon_btn.png" @click="this.toWritePost">
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('homepage')

export default {
  name: "HomePageWritePost",
  data() {
    return {
      loc: "금정구 자취방"
      
    };
  },
  methods: {
    ...mapActions(['toWritePost']),
  },
};
</script>

<style scoped>
img{
  height: 6%;
  width: 10%;
  z-index: 3;
  position: fixed;
  right: 50px;
  bottom: 50px;
}
</style>
