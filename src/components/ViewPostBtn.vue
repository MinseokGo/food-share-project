<template>
  <div class="box">
    <div class="btn" @click="popup">공유 참여</div>
  </div>
  <div class="popup_box" v-show="is_show">
    <div class="popup_1">공유 참여 하시겠습니까?</div>
    <div class="popup_2">
      <div class="join_sel" @click="chat">네</div>
      <div class="join_sel2" @click="popup">아니오</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewPostBtn",
  methods: {
    popup() {
      this.is_show = !this.is_show;
    },
    chat() {
      this.$router.push('/ChatView');
    },
    back() {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      is_show: false
    }
  }
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
  top: 30%;
  left: 15%;
  position: fixed;
  z-index: 1;
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

.join_sel {
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

.join_sel2 {
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
