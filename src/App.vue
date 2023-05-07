<template>
  <div id="app" class="outside_box">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style scoped>
/* #app {
  중앙배치코드??
} */

body {
  width: 100%;
  height: 100%;
  background-color: #e2e2e2;
}

.outside_box {
  width: 470px;
  height: 800px;
  left: 50%;
  top: 0;
  position: absolute;
  transform: translate(-50%, 0);
  background-color: wite;
  border-radius: 15px;
}
</style>