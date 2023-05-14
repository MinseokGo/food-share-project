<template>
  <div class="setloc">
    <span class="text">설정된 위치가 없습니다. 위치를 설정하여 주세요.</span>
    <img src="@/assets/home_addloc_icon_btn.png" class="img" @click="setloc">
  </div>
  <hr>
</template>

<script>
export default {
  name: "HomePageSetLoc",
  methods: {
    setloc() {
      this.$router.push('/SetLocView');
    }
  },
  data() {
    return {
      loc: [
        { locname: "연산 석이네", locaddr: "연제구 신금로 44번길 01-01" },
        { locname: "서울 GD네", locaddr: "중구 중앙로 1번길 9-9" },
        { locname: "준아 쳐직이네", locaddr: "대동면 대동로305번길 40" },
      ],
    };
  },
};
</script>

<style scoped>
.setloc{
  width: 100%;
  height: 3%;
  line-height: 150%;
  position: relative;
}
.text{
  color:rgba(80, 80, 80, 0.516);
}
.img{
  position: relative;
  width: 4%;
  height: 80%;
  top: 15%;
}
hr {
  position: relative;
  border: solid 0.4px rgb(208, 208, 208);
}
</style>