<template>
  <div class="box">
    <div class="btn">공유 참여</div>
  </div>
  <div class="popup_box" v-show="is_show">
    <div class="popup_1">공유 참여 하시겠습니까?<br>
    (예를 누르면 채팅방으로 이동합니다)
    </div>
    <div class="popup_2">
      <div class="pay_sel" @click="pay()">네</div>
      <div class="pay_sel2" @click="popup()">아니오</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewPostBtn",
};
</script>

<style scoped>
.box{
  width: 100%;
  height: 11%;
}
.btn{
  font-size: 1.5rem;  
  text-align: center;
  width: 35%;
  height: 60%;
  display: block;
  margin: 0 auto;
  background-color:#ffeba4;
  border-radius: 15px;
}
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
