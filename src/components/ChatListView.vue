<template>
	<link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet">
    <div class=chatlist_130_202>
    <div class="chatlist_room_box_btn_142_7"></div>
    <div class="chatlist_room_box_btn_142_8"></div>
    <span class="chatlist_loc_txt_130_251">설정된 위치가 없습니다. 위치를 설정하여주세요.</span>
    <div class="chatlist_addloc_icon_btn_130_252" @click="enterSetLoc()"></div>
    <div class="chatlist_navbar_box_130_253"></div>
    <span class="chatlist_home_txt_130_254">홈</span>
    <span class="chatlist_chat_txt_130_255">채팅</span>
    <span class="chatlist_userinfo_txt_130_256">내정보</span>
    <div class="chatlist_home_icon_btn_130_257" @click="enterHome()"></div>
    <div class="chatlist_chat_icon_btn_130_258" @click="chatList()"></div>
    <div class="chatlist_userinfo_icon_btn_130_259" @click="enterUserInfo()"></div>
    <div class="chatlist_first_line_130_260"></div>
    <div class="chatlist_shop_icon_130_235"></div>
	<div class="chatlist_chattitle_txt_130_232" @click="chat()">허은진님과의 대화방</div>
	<span class="chatlist_chatlastmsg_txt_130_233">네, 그렇게 하시죠.</span>
    <div class="chatlist_shareloc_box_130_261"></div><span class="chatlist_shareloc_txt_130_262">장전초 정문</span>
    <div class="chatlist_shopname_box_130_263"></div><span class="chatlist_shopname_txt_130_264">BBQ</span>
    <div class="chatlist_sharetime_box_130_265"></div><span class="chatlist_sharetime_txt_130_266">19:30 주문</span>
	</div>
</template>

<script>
export default {
  name : "ChatListView",
  methods: {
	enterSetLoc() {
      this.$router.push("/SetLocView");
    },
    chat() {
      this.$router.push("/ChatView");
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
}
/*import chatView from './chatView.vue'
import { useRouter } from "vue-router";
const router = useRouter();
const chatList = () => {	//eslint-disable-line no-unused-vars
router.push(chatView);
};
export default router;*/
</script>

<style scoped>
.chatlist_130_202 { 
	background-color:rgba(255, 255, 255, 1);
	width:484px;
	height:844px;
	position:absolute;
	overflow: hidden;
	left: 50%;
	transform: translate(-50%, 0);
}
.chatlist_room_box_btn_142_7 { 
	background-color:rgba(255, 255, 255, 1);
	width:445px;
	height:116px;
	position:absolute;
	left:22px;
	top:129px;
}
.chatlist_room_box_btn_142_8 { 
	background-color:rgba(255, 255, 255, 1);
	width:445px;
	height:116px;
	position:absolute;
	left:22px;
	top:269px;
}
.chatlist_loc_txt_130_251 { 
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
.chatlist_addloc_icon_btn_130_252 { 
	width:18px;
	height:18px;
	position:absolute;
	left:308px;
	top:88px;
	background-image:url(/src/assets/chatlist_addloc_icon_btn.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.chatlist_navbar_box_130_253 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(255, 234.89746749401093, 163.62499594688416, 1);
	width:484px;
	height:76px;
	position:absolute;
	left:0px;
	top:0px;
	border-radius: 15px;
}
.chatlist_home_txt_130_254 { 
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
.chatlist_chat_txt_130_255 { 
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
.chatlist_userinfo_txt_130_256 { 
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
.chatlist_home_icon_btn_130_257 { 
	width:30px;
	height:30px;
	position:absolute;
	left:66px;
	top:14px;
	background-image:url(/src/assets/chatlist_home_icon_btn.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.chatlist_chat_icon_btn_130_258 { 
	width:30px;
	height:30px;
	position:absolute;
	left:225px;
	top:14px;
	background-image:url(/src/assets/chatlist_chat_icon_btn.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.chatlist_userinfo_icon_btn_130_259 { 
	width:30px;
	height:30px;
	position:absolute;
	left:377px;
	top:14px;
	background-image:url(/src/assets/chatlist_userinfo_icon_btn.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.chatlist_first_line_130_260 { 
	transform: rotate(0.27026110800433234deg);
	width:424.0047302246094px;
	height:0px;
	position:absolute;
	left:30px;
	top:120px;
	border:1px solid rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
}
.chatlist_add_line_130_269 { 
	transform: rotate(0.27026110800433234deg);
	width:424.0047302246094px;
	height:0px;
	position:absolute;
	left:22px;
	top:398px;
	border:1px solid rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
}
.chatlist_add_line_138_3 { 
	transform: rotate(0.27026110800433234deg);
	width:424.0047302246094px;
	height:0px;
	position:absolute;
	left:30px;
	top:254px;
	border:1px solid rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
}
.chatlist_shop_icon_130_235 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	width:101px;
	height:101px;
	position:absolute;
	left:22px;
	top:134px;
	border-top-left-radius:20px;
	border-top-right-radius:20px;
	border-bottom-left-radius:20px;
	border-bottom-right-radius:20px;
	background-image:url(/src/assets/chatlist_shop_icon.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.chatlist_chattitle_txt_130_232 { 
	color:rgba(0, 0, 0, 1);
	width:155px;
	height:19px;
	position:absolute;
	left:130px;
	top:134px;
	font-family:Inter;
	text-align:center;
	font-size:18px;
	letter-spacing:-0.5;
	line-height:px;
}
.chatlist_chatlastmsg_txt_130_233 { 
	color:rgba(0, 0, 0, 1);
	width:112px;
	height:19px;
	position:absolute;
	left:130px;
	top:165px;
	font-family:Inter;
	text-align:center;
	font-size:15px;
	letter-spacing:-0.5;
	line-height:px;
}
.chatlist_shop1_icon_130_227 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	width:101px;
	height:101px;
	position:absolute;
	left:22px;
	top:276px;
	border-top-left-radius:20px;
	border-top-right-radius:20px;
	border-bottom-left-radius:20px;
	border-bottom-right-radius:20px;
	background-image:url(/src/assets/chatlist_shop1_icon.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.chatlist_chattitle1_txt_130_211 { 
	color:rgba(0, 0, 0, 1);
	width:217px;
	height:20px;
	position:absolute;
	left:130px;
	top:289px;
	font-family:Inter;
	text-align:center;
	font-size:18px;
	letter-spacing:-0.5;
	line-height:px;
}
.chatlist_chatlastmsg1_txt_130_234 { 
	color:rgba(0, 0, 0, 1);
	width:198px;
	height:19px;
	position:absolute;
	left:130px;
	top:317px;
	font-family:Inter;
	text-align:center;
	font-size:15px;
	letter-spacing:-0.5;
	line-height:px;
}
.chatlist_shareloc1_box_130_214 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(255, 255, 255, 1);
	width:84.3499984741211px;
	height:30.576923370361328px;
	position:absolute;
	left:130px;
	top:346px;
	border-top-left-radius:30px;
	border-top-right-radius:30px;
	border-bottom-left-radius:30px;
	border-bottom-right-radius:30px;
}
.chatlist_shareloc1_txt_130_215 { 
	color:rgba(0, 0, 0, 1);
	width:70.29166412353516px;
	height:20.384614944458008px;
	position:absolute;
	left:137px;
	top:351px;
	font-family:Inter;
	text-align:center;
	font-size:12px;
	letter-spacing:-0.5;
	line-height:px;
}
.chatlist_sharetime1_box_130_219 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(255, 255, 255, 1);
	width:88.73181915283203px;
	height:30.576923370361328px;
	position:absolute;
	left:234px;
	top:346px;
	border-top-left-radius:30px;
	border-top-right-radius:30px;
	border-bottom-left-radius:30px;
	border-bottom-right-radius:30px;
}
.chatlist_sharetime1_txt_130_220 { 
	color:rgba(0, 0, 0, 1);
	width:65.7272720336914px;
	height:20.384614944458008px;
	position:absolute;
	left:245px;
	top:351px;
	font-family:Inter;
	text-align:center;
	font-size:12px;
	letter-spacing:-0.5;
	line-height:px;
}
.chatlist_shopname1_box_130_225 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(255, 255, 255, 1);
	width:50.390907287597656px;
	height:30.576923370361328px;
	position:absolute;
	left:342px;
	top:346px;
	border-top-left-radius:30px;
	border-top-right-radius:30px;
	border-bottom-left-radius:30px;
	border-bottom-right-radius:30px;
}
.chatlist_shopname1_box_130_226 { 
	color:rgba(0, 0, 0, 1);
	width:38.825782775878906px;
	height:20.384614944458008px;
	position:absolute;
	left:348px;
	top:351px;
	font-family:Inter;
	text-align:center;
	font-size:12px;
	letter-spacing:-0.5;
	line-height:px;
}
.chatlist_shareloc_box_130_261 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(255, 255, 255, 1);
	width:71.5px;
	height:29.134614944458008px;
	position:absolute;
	left:130px;
	top:206px;
	border-top-left-radius:30px;
	border-top-right-radius:30px;
	border-bottom-left-radius:30px;
	border-bottom-right-radius:30px;
}
.chatlist_shareloc_txt_130_262 { 
	color:rgba(0, 0, 0, 1);
	width:63.79999923706055px;
	height:19.423076629638672px;
	position:absolute;
	left:134.39990234375px;
	top:209.85546875px;
	font-family:Inter;
	text-align:center;
	font-size:12px;
	letter-spacing:-0.5;
	line-height:px;
}
.chatlist_shopname_box_130_263 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(255, 255, 255, 1);
	width:75.9000015258789px;
	height:29.134614944458008px;
	position:absolute;
	left:361px;
	top:206px;
	border-top-left-radius:30px;
	border-top-right-radius:30px;
	border-bottom-left-radius:30px;
	border-bottom-right-radius:30px;
}
.chatlist_shopname_txt_130_264 { 
	color:rgba(0, 0, 0, 1);
	width:29.700000762939453px;
	height:19.423076629638672px;
	position:absolute;
	left:384px;
	top:210px;
	font-family:Inter;
	text-align:center;
	font-size:12px;
	letter-spacing:-0.5;
	line-height:px;
}
.chatlist_sharetime_box_130_265 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(255, 255, 255, 1);
	width:118.80000305175781px;
	height:29.134614944458008px;
	position:absolute;
	left:221px;
	top:206px;
	border-top-left-radius:30px;
	border-top-right-radius:30px;
	border-bottom-left-radius:30px;
	border-bottom-right-radius:30px;
}
.chatlist_sharetime_txt_130_266 { 
	color:rgba(0, 0, 0, 1);
	width:69.88235473632812px;
	height:19.423076629638672px;
	position:absolute;
	left:245px;
	top:210px;
	font-family:Inter;
	text-align:center;
	font-size:12px;
	letter-spacing:-0.5;
	line-height:px;
}
</style>
