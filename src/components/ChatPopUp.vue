<template>
  <div class="popup_box">
    <div class="popup_1">결제를 진행하시겠습니까?</div>
    <div class="popup_2">
      <div class="pay_sel">네</div>
      <div class="pay_sel2">아니오</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatPopUp",
};
</script>

<style scoped>
.popup_box {
  width: 70%;
  height: 30%;
  display: block;
  margin: 0 auto;
  top: 20%;
  position: relative;
  background-color: #F0F0F0;
  border-radius: 15px;
}

.popup_1 {
  width: 100%;
  height: 70%;
  text-align: center;
  line-height: 900%;
  position: relative;
  font-size: 1.2rem;
}

.popup_2 {
  width: 100%;
  height: 30%;
}

.pay_sel {
  width: 25%;
  height: 40%;
  float: left;
  left: 20%;
  position: relative;
  background-color: #D9C696;
  border-radius: 15px;
  text-align: center; 
  line-height: 200%;
}

.pay_sel2 {
  width: 25%;
  height: 40%;
  float: left;
  left: 30%;
  position: relative;
  background-color: #D9C696;
  border-radius: 15px;
  text-align: center; 
  line-height: 200%;
}
</style>
