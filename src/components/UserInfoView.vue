<template>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet">

    <div class=userinfo_128_237>
        <div class="userinfo_post_box_btn_142_9"></div>
        <span class="userinfo_info_txt_128_257">admin00님의 정보</span>
        <span class="userinfo_postlist_txt_130_195">내가 작성한 글</span>
        <span class="userinfo_id_txt_128_259">아이디</span>
        <span class="userinfo_userid_txt_133_2">아이디</span>
        <span class="userinfo_usernickname_txt_133_3">닉네임</span>
        <span class="userinfo_nickname_txt_128_262">닉네임</span>
        <div class="userinfo_profile_icon_128_422"></div>
        <span class="userinfo_posttitle_txt_btn_130_196">자메이카 통다리 두 조각씩 먹으실 분~!</span>
        <div class="userinfo_first_line_134_2"></div>
        <div class="userinfo_add_line_134_3"></div>
        <span class="userinfo_loc_txt_138_11">설정된 위치가 없습니다. 위치를 설정하여 주세요.</span>
        <div class="userinfo_addloc_icon_138_12" @class="enterSetLoc()"></div>
        <div class="userinfo_navbar_box_138_13"></div>
        <span class="userinfo_home_txt_138_14">홈</span>
        <span class="userinfo_chat_txt_138_15">채팅</span>
        <span class="userinfo_userinfo_txt_138_16">내정보</span>
        <div class="userinfo_home_icon_btn_138_17" @class="enterHome()"></div>
        <div class="userinfo_chat_icon_btn_138_18" @click="chatList()"></div>
        <div class="userinfo_userinfo_icon_btn_138_19" @class="enterUserInfo()"></div>
    </div>
</template>

<script>
export default {
  name : "UserInfoView",
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
    enterSetLoc() {
        this.$router.push("/SetLocView");
    },
  }
};
</script>


<style scoped>
.userinfo_128_237 {
    left: 50%;
    transform: translate(-50%, 0);
    background-color: rgba(255, 255, 255, 1);
    width: 484px;
    height: 844px;
    position: absolute;
    overflow: hidden;
}

.userinfo_post_box_btn_142_9 {
    background-color: rgba(255, 255, 255, 1);
    width: 416px;
    height: 57px;
    position: absolute;
    left: 30px;
    top: 465px;
}

.userinfo_info_txt_128_257 {
    color: rgba(0, 0, 0, 1);
    width: 211px;
    height: 20px;
    position: absolute;
    left: 111px;
    top: 163px;
    font-family: Inter;
    text-align: left;
    font-size: 26px;
    letter-spacing: -0.5;
    line-height: px;
}

.userinfo_postlist_txt_130_195 {
    color: rgba(0, 0, 0, 1);
    width: 153px;
    height: 20px;
    position: absolute;
    left: 38px;
    top: 397px;
    font-family: Inter;
    text-align: left;
    font-size: 26px;
    letter-spacing: -0.5;
    line-height: px;
}

.userinfo_id_txt_128_259 {
    color: rgba(0, 0, 0, 1);
    width: 44px;
    height: 20px;
    position: absolute;
    left: 38px;
    top: 250px;
    font-family: Inter;
    text-align: left;
    font-size: 16px;
    letter-spacing: -0.5;
    line-height: px;
}

.userinfo_userid_txt_133_2 {
    color: rgba(0, 0, 0, 1);
    width: 44px;
    height: 20px;
    position: absolute;
    left: 115px;
    top: 250px;
    font-family: Inter;
    text-align: left;
    font-size: 16px;
    letter-spacing: -0.5;
    line-height: px;
}

.userinfo_usernickname_txt_133_3 {
    color: rgba(0, 0, 0, 1);
    width: 44px;
    height: 20px;
    position: absolute;
    left: 116px;
    top: 302px;
    font-family: Inter;
    text-align: left;
    font-size: 16px;
    letter-spacing: -0.5;
    line-height: px;
}

.userinfo_nickname_txt_128_262 {
    color: rgba(0, 0, 0, 1);
    width: 44px;
    height: 20px;
    position: absolute;
    left: 38px;
    top: 302px;
    font-family: Inter;
    text-align: left;
    font-size: 16px;
    letter-spacing: -0.5;
    line-height: px;
}

.userinfo_profile_icon_128_422 {
    width: 44px;
    height: 44px;
    position: absolute;
    left: 38px;
    top: 151px;
    border-top-left-radius: 59.5px;
    border-top-right-radius: 59.5px;
    border-bottom-left-radius: 59.5px;
    border-bottom-right-radius: 59.5px;
    background-image: url(/src/assets/userinfo_profile_icon.png);
    background-repeat: no-repeat;
    background-size: cover;
}

.userinfo_posttitle_txt_btn_130_196 {
    color: rgba(0, 0, 0, 1);
    width: 466px;
    height: 36px;
    position: absolute;
    left: 38px;
    top: 486px;
    font-family: Inter;
    text-align: left;
    font-size: 20px;
    letter-spacing: -0.5;
    line-height: px;
}

.userinfo_first_line_134_2 {
    transform: rotate(0.27026110800433234deg);
    width: 424.0047302246094px;
    height: 0px;
    position: absolute;
    left: 28px;
    top: 452px;
    border: 1px solid rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
}

.userinfo_add_line_134_3 {
    transform: rotate(0.27026110800433234deg);
    width: 424.0047302246094px;
    height: 0px;
    position: absolute;
    left: 28px;
    top: 536px;
    border: 1px solid rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
}

.userinfo_loc_txt_138_11 {
    color: rgba(154.0625050663948, 154.0625050663948, 154.0625050663948, 1);
    width: 293px;
    height: 20px;
    position: absolute;
    left: 12px;
    top: 88px;
    font-family: Inter;
    text-align: center;
    font-size: 15px;
    letter-spacing: -0.5;
    line-height: px;
}

.userinfo_addloc_icon_138_12 {
    width: 18px;
    height: 18px;
    position: absolute;
    left: 308px;
    top: 88px;
    background-image: url(/src/assets/userinfo_addloc_icon.png);
    background-repeat: no-repeat;
    background-size: cover;
}

.userinfo_navbar_box_138_13 {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 234.89746749401093, 163.62499594688416, 1);
    width: 484px;
    height: 76px;
    position: absolute;
    left: 0px;
    top: 0px;
    border-radius: 15px;
}

.userinfo_home_txt_138_14 {
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

.userinfo_chat_txt_138_15 {
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

.userinfo_userinfo_txt_138_16 {
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

.userinfo_home_icon_btn_138_17 {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 66px;
    top: 14px;
    background-image: url(/src/assets/userinfo_home_icon_btn.png);
    background-repeat: no-repeat;
    background-size: cover;
}

.userinfo_chat_icon_btn_138_18 {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 225px;
    top: 14px;
    background-image: url(/src/assets/userinfo_chat_icon_btn.png);
    background-repeat: no-repeat;
    background-size: cover;
}

.userinfo_userinfo_icon_btn_138_19 {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 377px;
    top: 14px;
    background-image: url(/src/assets/userinfo_userinfo_icon_btn.png);
    background-repeat: no-repeat;
    background-size: cover;
}</style>
