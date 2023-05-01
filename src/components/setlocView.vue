<template>
  <meta charset="utf-8">
  <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet">

  <div class=setloc_128_120>
    <div class="setloc_setpostcode_txt_btn_152_5"></div>
    <div class="setloc_setloc_box_btn_152_15" @click="exitsetloc()"></div>
    <span class="setloc_setpostcode_txt_152_6">우편 번호 찾기</span>
    <span class="setloc_setloc_txt_152_16">위치 추가하기</span>
    <div class="setloc_postcodeaddress_txt_inp_152_3"></div>
    <span class="setloc_postcodeaddress_txt_placeholder_152_4">우편번호</span>
    <div class="setloc_roadaddress_txt_inp_152_7"></div>
    <span class="setloc_roadaddress_txt_placeholder_152_8">도로명주소</span>
    <div class="setloc_jibunaddress_txt_inp_152_9"></div>
    <span class="setloc_jibunaddress_txt_placeholder_152_10">지번주소</span>
    <div class="setloc_detailaddress_txt_inp_152_11"></div>
    <div class="setloc_extraaddress_txt_inp_152_13"></div>
    <span class="setloc_detailaddress_txt_placeholder_152_12">상세주소</span>
    <span class="setloc_extraaddress_txt_placeholder_152_14">참고항목</span>
  </div>
</template>

<script>
export default {
  name : "setlocView",
  methods: {
    exitsetloc() {
      this.$router.push("/Home");
    }
  },
};
</script>

<style scoped>
.setloc_128_120 {
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgba(255, 255, 255, 1);
  width: 484px;
  height: 844px;
  position: absolute;
  overflow: hidden;
}

.setloc_setpostcode_txt_btn_152_5 {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 234.89746749401093, 163.62499594688416, 1);
  width: 419px;
  height: 63px;
  position: absolute;
  left: 32px;
  top: 120px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.setloc_setloc_box_btn_152_15 {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 234.89746749401093, 163.62499594688416, 1);
  width: 419px;
  height: 63px;
  position: absolute;
  left: 32px;
  top: 747px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.setloc_setpostcode_txt_152_6 {
  color: rgba(0, 0, 0, 1);
  width: 143px;
  height: 20px;
  position: absolute;
  left: 170px;
  top: 141px;
  font-family: Inter;
  text-align: center;
  font-size: 24px;
  letter-spacing: -0.5;
  line-height: px;
}

.setloc_setloc_txt_152_16 {
  color: rgba(0, 0, 0, 1);
  width: 137px;
  height: 20px;
  position: absolute;
  left: 173px;
  top: 768px;
  font-family: Inter;
  text-align: center;
  font-size: 24px;
  letter-spacing: -0.5;
  line-height: px;
}

.setloc_postcodeaddress_txt_inp_152_3 {
  background-color: rgba(255, 255, 255, 1);
  width: 419px;
  height: 63px;
  position: absolute;
  left: 32px;
  top: 33px;
}

.setloc_postcodeaddress_txt_placeholder_152_4 {
  color: rgba(176.37499898672104, 176.37499898672104, 176.37499898672104, 1);
  width: 87px;
  height: 20px;
  position: absolute;
  left: 46px;
  top: 54px;
  font-family: Inter;
  text-align: center;
  font-size: 24px;
  letter-spacing: -0.5;
  line-height: px;
}

.setloc_roadaddress_txt_inp_152_7 {
  background-color: rgba(255, 255, 255, 1);
  width: 419px;
  height: 63px;
  position: absolute;
  left: 32px;
  top: 228px;
}

.setloc_roadaddress_txt_placeholder_152_8 {
  color: rgba(176.37499898672104, 176.37499898672104, 176.37499898672104, 1);
  width: 109px;
  height: 20px;
  position: absolute;
  left: 46px;
  top: 249px;
  font-family: Inter;
  text-align: center;
  font-size: 24px;
  letter-spacing: -0.5;
  line-height: px;
}

.setloc_jibunaddress_txt_inp_152_9 {
  background-color: rgba(255, 255, 255, 1);
  width: 419px;
  height: 63px;
  position: absolute;
  left: 32px;
  top: 336px;
}

.setloc_jibunaddress_txt_placeholder_152_10 {
  color: rgba(176.37499898672104, 176.37499898672104, 176.37499898672104, 1);
  width: 87px;
  height: 20px;
  position: absolute;
  left: 46px;
  top: 357px;
  font-family: Inter;
  text-align: center;
  font-size: 24px;
  letter-spacing: -0.5;
  line-height: px;
}

.setloc_detailaddress_txt_inp_152_11 {
  background-color: rgba(255, 255, 255, 1);
  width: 419px;
  height: 63px;
  position: absolute;
  left: 32px;
  top: 444px;
}

.setloc_extraaddress_txt_inp_152_13 {
  background-color: rgba(255, 255, 255, 1);
  width: 419px;
  height: 63px;
  position: absolute;
  left: 32px;
  top: 552px;
}

.setloc_detailaddress_txt_placeholder_152_12 {
  color: rgba(176.37499898672104, 176.37499898672104, 176.37499898672104, 1);
  width: 87px;
  height: 20px;
  position: absolute;
  left: 46px;
  top: 465px;
  font-family: Inter;
  text-align: center;
  font-size: 24px;
  letter-spacing: -0.5;
  line-height: px;
}

.setloc_extraaddress_txt_placeholder_152_14 {
  color: rgba(176.37499898672104, 176.37499898672104, 176.37499898672104, 1);
  width: 87px;
  height: 20px;
  position: absolute;
  left: 46px;
  top: 573px;
  font-family: Inter;
  text-align: center;
  font-size: 24px;
  letter-spacing: -0.5;
  line-height: px;
}
</style>