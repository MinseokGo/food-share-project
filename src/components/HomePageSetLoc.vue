<template>
  <div class="setloc">
    <span class="text">설정된 위치가 없습니다. 위치를 설정하여 주세요.</span>
    <img src="@/assets/home_addloc_icon_btn.png" class="img">
  </div>
</template>

<script>
export default {
  name: "HomePageSetLoc",
};
</script>

<style scoped>
.setloc{
  position: relative;
  top:10px;
}
.text{
  color:rgba(80, 80, 80, 0.516);
}
.img{
  position: relative;
  width: 13px;
  height: 13px;

}
</style>