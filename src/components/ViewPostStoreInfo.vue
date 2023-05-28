<template>
  <div class="box">
    <div class="s_info">
      가게 정보
    </div>
    <div class="s_info2">
      <img src="@/assets/viewpost_shop_icon.png">
      <div class="sub_info">
        <div class="line">
          {{ viewpost.store }}
        </div>
        <div class="line">
          {{ viewpost.tip }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('viewpost')

export default {
  name: "ViewPostStoreInfo",
  computed: {
    ...mapState({
      viewpost: state => state.viewpost,
    }),
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 20%;
}
.s_info{
  display: block;
  margin: 0 auto;
  width: 90%;
  height: 20%;
}
.s_info2{
  display: block;
  margin: 0 auto;
  width: 90%;
  height: 80%;
}
img{
  float: left;
  width: 25%;
  height: 80%;
}
.sub_info{
  float: left;
  width: 75%;
  height: 80%;
}
.line{
  height: 50%;

}
</style>
