<template>
  <div class="chat_head">
    <div class="back_btn">&lt;
    </div>
    <div class="opposit_box">허 은진님
    </div>
    <div class="pay_box">
      <div class="pay_btn" @click="pay()">결제 참여</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatHead",
  methods: {
    pay() {
      this.$router.push('/PayView');
    }
  }
};
</script>

<style scoped>
.chat_head {
  width: 100%;
  height: 8%;
  border-radius: 0 0 15px 15px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.328);
  background-color: #FFEBA4;
}

.back_btn {
  width: 20%;
  height: 100%;
  text-align: center;
  line-height: 200%;
  float: left;
  font-size: 2rem;
  color: #D9C696;
}

.opposit_box {
  width: 60%;
  height: 100%;
  text-align: center;
  line-height: 350%;
  float: left;
}

.pay_box {
  width: 20%;
  height: 100%;
  text-align: center;
  line-height: 400%;
  float: left;
}

.pay_btn {
  width: 60%;
  height: 50%;
  top: 25%;
  left: 25%;
  position: relative;
  background-color: #D9C696;
  border-radius: 5px;
  font-size: 0.8rem;
  line-height: 280%;
}
</style>
