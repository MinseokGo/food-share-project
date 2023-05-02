<template>
  <meta charset="utf-8" />
  <link
    href="https://fonts.googleapis.com/css?family=Inter&display=swap"
    rel="stylesheet"
  />

  <div class="login_130_22">
    <div class="login_login_btn_130_210" @click="login0()"></div>
    <div class="login_login_box_130_23"></div>
    <span class="login_login_txt_130_24">로그인</span>
    <div class="login_id_box_inp_130_26"></div>
    <!-- <span class="login_id_txt_130_30">ID</span> -->
    <input
      class="login_id_txt_130_30"
      v-model="userId"
      v-bind:type="userIdType"
      placeholder="id"
    />
    <div class="login_password_box_inp_130_33"></div>
    <div class="login_lock_icon_130_35"></div>
    <!-- <span class="login_password_txt_130_36">PASSWORD</span> -->
    <input
      class="login_password_txt_130_36"
      v-model="userPassword"
      v-bind:type="userPasswordType"
      placeholder="password"
    />
    <div class="login_id_icon_152_17"></div>
    <div class="login_main_icon_152_19"></div>
    <h2>{{ userId }}</h2>
    <h2>{{ userPassword }}</h2>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  methods: {
    async login0() {
      this.$router.push("/HomePageView");
    },
    async login1() {
      // 서버로부터 ID와 비밀번호를 가져옵니다.
      const response = await fetch("/api/login");
      const data = await response.json();
      const { userId, userPassword } = data;

      // 입력한 ID와 비밀번호가 일치하는지 확인합니다.
      if (this.userId === userId && this.userPassword === userPassword) {
        // 로그인 성공 시, 홈페이지로 이동합니다.
        this.$router.push("/HomePageView");
      } else {
        // 로그인 실패 시, 오류 메시지를 표시합니다.
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      }
    },
  },
  data() {
    return {
      userId: "",
      userIdType: "text",
      userPassword: "",
      userPasswordType: "password",
    };
  },
};
</script>

<style scoped>
.login_130_22 {
  background-color: rgba(255, 255, 255, 1);
  width: 484.0000305175781px;
  height: 844px;
  position: absolute;
  overflow: hidden;
  left: 50%;
  transform: translate(-50%, 0);
}
.login_login_btn_130_210 {
  background-color: rgba(255, 234.89746749401093, 163.62499594688416, 1);
  width: 172px;
  height: 39px;
  position: absolute;
  left: 156px;
  top: 582px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.login_login_box_130_23 {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 234.89746749401093, 163.62499594688416, 1);
  width: 391px;
  height: 220px;
  position: absolute;
  left: 48px;
  top: 321px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.login_login_txt_130_24 {
  color: rgba(0, 0, 0, 1);
  width: 49px;
  height: 20px;
  position: absolute;
  left: 218px;
  top: 591px;
  font-family: Inter;
  text-align: center;
  font-size: 18px;
  letter-spacing: -0.5;
  line-height: px;
}
.login_id_box_inp_130_26 {
  background-color: rgba(255, 255, 255, 1);
  width: 341px;
  height: 38px;
  position: absolute;
  left: 72px;
  top: 377px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.login_id_txt_130_30 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: 20px;
  position: absolute;
  left: 115px;
  top: 386px;
  font-family: Inter;
  text-align: left;
  font-size: 15px;
  letter-spacing: -0.5;
  line-height: px;
  border: 0;
}
.login_password_box_inp_130_33 {
  background-color: rgba(255, 255, 255, 1);
  width: 341px;
  height: 38px;
  position: absolute;
  left: 72px;
  top: 438px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.login_lock_icon_130_35 {
  width: 29px;
  height: 29px;
  position: absolute;
  left: 80px;
  top: 441px;
  background-image: url(/src/assets/login_lock_icon.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.login_password_txt_130_36 {
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: 20px;
  position: absolute;
  left: 112px;
  top: 447px;
  font-family: Inter;
  text-align: left;
  font-size: 15px;
  letter-spacing: -0.5;
  line-height: px;
  border: 0;
}
.login_id_icon_152_17 {
  width: 28px;
  height: 28px;
  position: absolute;
  left: 81px;
  top: 382px;
  background-image: url(/src/assets/login_id_icon.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.login_main_icon_152_19 {
  width: 178px;
  height: 178px;
  position: absolute;
  left: 153px;
  top: 62px;
  background-image: url(/src/assets/login____icon.png);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
