<template>
  <meta charset="utf-8">
  <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet">

  <div class="home_128_89">
    <div class="home_writepost_icon_btn_128_96" @click="writePost()"></div>
    <span class="home_loc_txt_128_97">설정된 위치가 없습니다. 위치를 설정하여 주세요.</span>
    <div class="home_addloc_icon_btn_128_111" @click="enterSetLoc()"></div>
    <div class="home_navbar_box_128_112"></div>
    <span class="home_home_txt_128_113">홈</span
    ><span class="home_chat_txt_128_114">채팅</span
    ><span class="home_useinfo_txt_128_115">내정보 </span>
    <div class="home_home_icon_btn_128_116" @click="enterHome()"></div>
    <div class="home_chat_icon_btn_128_117" @click="chatList()"></div>
    <div class="home_userinfo_icon_btn_128_118" @click="enterUserInfo()"></div>
  </div>
</template>

<script>
export default {
name : "HomePageView",
methods: {
writePost() {
this.$router.push("/WritePostView");
},
enterSetLoc() {
this.$router.push("/SetLocView");
},
chatList() {
this.$router.push("/ChatListView");
},
enterHome() {
this.$router.push("/HomePageView");
},
enterUserInfo() {
this.$router.push("/UserInfoView");
}
}
};
</script>

<style scoped>
.home_128_89 { 
    left: 50%;
    transform: translate(-50%, 0);
	background-color:rgba(255, 255, 255, 1);
	width:484px;
	height:844px;
	position:absolute;
	overflow:hidden;
}
.home_writepost_icon_btn_128_96 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	width:40px;
	height:40px;
	position:absolute;
	left:404px;
	top:776px;
	background-image:url(/src/assets/home_writepost_icon_btn.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.home_loc_txt_128_97 { 
	color:rgba(154.0625050663948, 154.0625050663948, 154.0625050663948, 1);
	width:293px;
	height:20px;
	position:absolute;
	left:12px;
	top:88px;
	font-family:Inter;
	text-align:center;
	font-size:15px;
	letter-spacing:-0.5;
	line-height:px;
}
.home_addloc_icon_btn_128_111 { 
	width:18px;
	height:18px;
	position:absolute;
	left:308px;
	top:88px;
	background-image:url(/src/assets/home_addloc_icon_btn.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.home_navbar_box_128_112 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(255, 234.89746749401093, 163.62499594688416, 1);
	width:484px;
	height:76px;
	position:absolute;
	left:0px;
	top:0px;
	border-radius: 15px;
}
.home_home_txt_128_113 { 
	color:rgba(0, 0, 0, 1);
	width:14px;
	height:16px;
	position:absolute;
	left:73px;
	top:47px;
	font-family:Inter;
	text-align:left;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.home_chat_txt_128_114 { 
	color:rgba(0, 0, 0, 1);
	width:33px;
	height:16px;
	position:absolute;
	left:225px;
	top:47px;
	font-family:Inter;
	text-align:left;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.home_useinfo_txt_128_115 { 
	color:rgba(0, 0, 0, 1);
	width:50px;
	height:16px;
	position:absolute;
	left:367px;
	top:47px;
	font-family:Inter;
	text-align:left;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.home_home_icon_btn_128_116 { 
	width:30px;
	height:30px;
	position:absolute;
	left:66px;
	top:14px;
	background-image:url(/src/assets/home_home_icon_btn.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.home_chat_icon_btn_128_117 { 
	width:30px;
	height:30px;
	position:absolute;
	left:225px;
	top:14px;
	background-image:url(/src/assets/home_chat_icon_btn.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.home_userinfo_icon_btn_128_118 { 
	width:30px;
	height:30px;
	position:absolute;
	left:377px;
	top:14px;
	background-image:url(/src/assets/home_userinfo_icon_btn.png);
	background-repeat:no-repeat;
	background-size:cover;
}
</style>
