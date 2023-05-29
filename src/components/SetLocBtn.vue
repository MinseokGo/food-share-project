<template>
  <div class="box">
    <div class="btn" @click="this.setLocInfo()">
      위치 추가하기
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('setloc')

export default {
  name: "SetLocBtn",
  methods: {
    ...mapActions(['setLocInfo']),
  }
};
</script>

<style scoped>
.box {
    width: 100%;
    height: 20%;
}
.btn {
    width: 90%;
    height: 40%;
    position: relative;
    top: 20%;
    line-height: 400%;
    display: block;
    margin: 0 auto;
    background-color: #ffeba4;
    border-radius: 15px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
    text-align: center;
}
</style>
