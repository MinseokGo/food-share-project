<template>
  <img src="../assets/home_writepost_icon_btn.png" @click="writepost">
</template>

<script>
export default {
  name: "HomePageWritePost",
  data() {
    return {
      loc: "금정구 자취방"
      
    };
  },
  methods: {
    writepost() {
      this.$router.push('/WritePostView');
    }
  }
};
</script>

<style scoped>
img{
  height: 6%;
  width: 10%;
  z-index: 3;
  position: fixed;
  right: 3%;
  bottom: 3%;
}
</style>
