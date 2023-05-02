<template>
  <meta charset="utf-8" />
  <link
    href="https://fonts.googleapis.com/css?family=Inter&display=swap"
    rel="stylesheet"
  />

  <div class="viewpost_128_163">
    <span class="viewpost_posttitle_txt_128_175"
      >자메이카 통다리 두 조각씩 먹으실 분~!</span
    >
    <div class="viewpost_joinshare_box_btn_128_224"></div>
    <span class="viewpost_joinshare_txt_128_225" @click="enterShare()">공유 참여</span>
    <div class="viewpost_first_line_130_178"></div>
    <div class="viewpost_third_line_130_179"></div>
    <div class="viewpost_second_line_130_192"></div>
    <span class="viewpost_selectmenu_txt_130_180">자메이카 통다리</span>
    <span class="viewpost_delivfee_txt_130_190">배달팁</span>
    <span class="viewpost_delivfeenum_txt_130_191">3000원</span>
    <span class="viewpost_selectshop_txt_130_189">BBQ치킨 부산장전점</span>
    <span class="viewpost_selecttime_txt_130_181">19:30분 주문</span>
    <span class="viewpost_selectloc_txt_130_182">장전초 정문</span>
    <span class="viewpost_sharemenu_txt_130_183">공유 메뉴</span>
    <span class="viewpost_shopinfo_txt_130_188">가게 정보</span>
    <span class="viewpost_shareloc_txt_130_184">공유 장소</span>
    <span class="viewpost_sharepeoplenum_txt_130_186">2명</span>
    <span class="viewpost_shareloc_txt_130_187">공유 인원</span>
    <span class="viewpost_sharetime_txt_130_185">공유 시간</span>
    <span class="viewpost_postcontent_txt_130_193"
      >장전초 정문에서 음식 공유하실분! 제가 한 조각 밖에 못 먹어서 세 조각 드실 분
      찾아요! 돈은 반반 내드릴게요. 공유 참여 누르시고 DM 부탁드립니다~~</span
    >
    <div class="viewpost_navbar_box_138_4"></div>
    <span class="viewpost_home_txt_138_5">홈</span>
    <span class="viewpost_chat_txt_138_6">채팅</span>
    <span class="viewpost_userinfo_txt_138_7">내정보</span>
    <div class="viewpost_home_icon_btn_138_8" @click="enterHome()"></div>
    <div class="viewpost_chat_icon_btn_138_9" @click="chatList()"></div>
    <div class="viewpost_userinfo_icon_btn_138_10" @click="enterUserInfo()"></div>
  </div>
</template>

<script>
export default {
  name: "ViewPostView",
  methods: {
    chatList() {
      this.$router.push("/ChatListView");
    },
    enterHome() {
      this.$router.push("/HomePageView");
    },
    enterUserInfo() {
      this.$router.push("/UserInfoView");
    },
    enterShare() {
      this.$router.push("/ChatView");
    },
  },
};
</script>

<style scoped>
.viewpost_128_163 {
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgba(255, 255, 255, 1);
  width: 484px;
  height: 844px;
  position: absolute;
  overflow: hidden;
}

.viewpost_posttitle_txt_128_175 {
  color: rgba(0, 0, 0, 1);
  width: 437px;
  height: 36px;
  position: absolute;
  left: 23px;
  top: 125px;
  font-family: Inter;
  text-align: center;
  font-size: 26px;
  letter-spacing: -0.5;
  line-height: px;
}

.viewpost_joinshare_box_btn_128_224 {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 234.89746749401093, 163.62499594688416, 1);
  width: 178px;
  height: 74px;
  position: absolute;
  left: 153px;
  top: 728px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.viewpost_joinshare_txt_128_225 {
  color: rgba(0, 0, 0, 1);
  width: 116px;
  height: 20px;
  position: absolute;
  left: 185px;
  top: 758px;
  font-family: Inter;
  text-align: center;
  font-size: 30px;
  letter-spacing: -0.5;
  line-height: px;
}

.viewpost_first_line_130_178 {
  transform: rotate(0.27026110800433234deg);
  width: 424.0047302246094px;
  height: 0px;
  position: absolute;
  left: 34px;
  top: 188px;
  border: 1px solid rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
}

.viewpost_third_line_130_179 {
  transform: rotate(0.27026110800433234deg);
  width: 424.0047302246094px;
  height: 0px;
  position: absolute;
  left: 34px;
  top: 563px;
  border: 1px solid rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
}

.viewpost_second_line_130_192 {
  transform: rotate(0.27026110800433234deg);
  width: 424.0047302246094px;
  height: 0px;
  position: absolute;
  left: 34px;
  top: 399px;
  border: 1px solid rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
}

.viewpost_selectmenu_txt_130_180 {
  color: rgba(0, 0, 0, 1);
  width: 124px;
  height: 24px;
  position: absolute;
  left: 132px;
  top: 413px;
  font-family: Inter;
  text-align: center;
  font-size: 16px;
  letter-spacing: -0.5;
  line-height: px;
}

.viewpost_delivfee_txt_130_190 {
  color: rgba(0, 0, 0, 1);
  width: 73px;
  height: 24px;
  position: absolute;
  left: 138px;
  top: 671px;
  font-family: Inter;
  text-align: center;
  font-size: 16px;
  letter-spacing: -0.5;
  line-height: px;
}

.viewpost_delivfeenum_txt_130_191 {
  color: rgba(0, 0, 0, 1);
  width: 73px;
  height: 24px;
  position: absolute;
  left: 205px;
  top: 671px;
  font-family: Inter;
  text-align: center;
  font-size: 16px;
  letter-spacing: -0.5;
  line-height: px;
}

.viewpost_selectshop_txt_130_189 {
  color: rgba(0, 0, 0, 1);
  width: 169px;
  height: 24px;
  position: absolute;
  left: 135px;
  top: 633px;
  font-family: Inter;
  text-align: center;
  font-size: 16px;
  letter-spacing: -0.5;
  line-height: px;
}

.viewpost_selecttime_txt_130_181 {
  color: rgba(0, 0, 0, 1);
  width: 124px;
  height: 24px;
  position: absolute;
  left: 122px;
  top: 449px;
  font-family: Inter;
  text-align: center;
  font-size: 16px;
  letter-spacing: -0.5;
  line-height: px;
}

.viewpost_selectloc_txt_130_182 {
  color: rgba(0, 0, 0, 1);
  width: 124px;
  height: 24px;
  position: absolute;
  left: 116px;
  top: 487px;
  font-family: Inter;
  text-align: center;
  font-size: 16px;
  letter-spacing: -0.5;
  line-height: px;
}

.viewpost_sharemenu_txt_130_183 {
  color: rgba(0, 0, 0, 1);
  width: 88px;
  height: 25px;
  position: absolute;
  left: 29px;
  top: 413px;
  font-family: Inter;
  text-align: center;
  font-size: 16px;
  letter-spacing: -0.5;
  line-height: px;
}

.viewpost_shopinfo_txt_130_188 {
  color: rgba(0, 0, 0, 1);
  width: 88px;
  height: 25px;
  position: absolute;
  left: 26px;
  top: 581px;
  font-family: Inter;
  text-align: center;
  font-size: 18px;
  letter-spacing: -0.5;
  line-height: px;
}

.viewpost_shareloc_txt_130_184 {
  color: rgba(0, 0, 0, 1);
  width: 88px;
  height: 25px;
  position: absolute;
  left: 29px;
  top: 487px;
  font-family: Inter;
  text-align: center;
  font-size: 16px;
  letter-spacing: -0.5;
  line-height: px;
}

.viewpost_sharepeoplenum_txt_130_186 {
  color: rgba(0, 0, 0, 1);
  width: 124px;
  height: 24px;
  position: absolute;
  left: 87px;
  top: 525px;
  font-family: Inter;
  text-align: center;
  font-size: 16px;
  letter-spacing: -0.5;
  line-height: px;
}

.viewpost_shareloc_txt_130_187 {
  color: rgba(0, 0, 0, 1);
  width: 88px;
  height: 25px;
  position: absolute;
  left: 29px;
  top: 525px;
  font-family: Inter;
  text-align: center;
  font-size: 16px;
  letter-spacing: -0.5;
  line-height: px;
}

.viewpost_sharetime_txt_130_185 {
  color: rgba(0, 0, 0, 1);
  width: 88px;
  height: 25px;
  position: absolute;
  left: 29px;
  top: 450px;
  font-family: Inter;
  text-align: center;
  font-size: 16px;
  letter-spacing: -0.5;
  line-height: px;
}

.viewpost_shop_icon_128_210 {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 84px;
  height: 84px;
  position: absolute;
  left: 26px;
  top: 622px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-image: url(/src/assets/viewpost_shop_icon.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.viewpost_postcontent_txt_130_193 {
  color: rgba(0, 0, 0, 1);
  width: 398px;
  height: 174px;
  position: absolute;
  left: 45px;
  top: 205px;
  font-family: Inter;
  text-align: left;
  font-size: 18px;
  letter-spacing: -0.5;
  line-height: px;
}

.viewpost_navbar_box_138_4 {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 234.89746749401093, 163.62499594688416, 1);
  width: 484px;
  height: 76px;
  position: absolute;
  left: 0px;
  top: 0px;
  border-radius: 15px;
}

.viewpost_home_txt_138_5 {
  color: rgba(0, 0, 0, 1);
  width: 14px;
  height: 16px;
  position: absolute;
  left: 73px;
  top: 47px;
  font-family: Inter;
  text-align: left;
  font-size: 16px;
  letter-spacing: -0.5;
  line-height: px;
}

.viewpost_chat_txt_138_6 {
  color: rgba(0, 0, 0, 1);
  width: 33px;
  height: 16px;
  position: absolute;
  left: 225px;
  top: 47px;
  font-family: Inter;
  text-align: left;
  font-size: 16px;
  letter-spacing: -0.5;
  line-height: px;
}

.viewpost_userinfo_txt_138_7 {
  color: rgba(0, 0, 0, 1);
  width: 50px;
  height: 16px;
  position: absolute;
  left: 367px;
  top: 47px;
  font-family: Inter;
  text-align: left;
  font-size: 16px;
  letter-spacing: -0.5;
  line-height: px;
}

.viewpost_home_icon_btn_138_8 {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 66px;
  top: 14px;
  background-image: url(/src/assets/viewpost_home_icon_btn.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.viewpost_chat_icon_btn_138_9 {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 225px;
  top: 14px;
  background-image: url(/src/assets/viewpost_chat_icon_btn.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.viewpost_userinfo_icon_btn_138_10 {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 377px;
  top: 14px;
  background-image: url(/src/assets/viewpost_userinfo_icon_btn.png);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
