<template>
	<link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet">
    <div class=chat_128_275>
    <div class="chat_back_box_btn_142_10"></div>
    <div class="chat_mymsg_box_128_279"></div><span class="chat_mymsg_txt_128_280">안녕하세요~!</span>
    <div class="chat_mymsg1_box_128_284"></div><span class="chat_mymsg1_txt_128_285">지금 바로 결제 가능하신가요?</span>
    <div class="chat_oppomsg_box_128_289"></div><span class="chat_oppomsg_txt_128_290">네, 안녕하세요~!</span>
    <div class="chat_oppoprofile_icon_128_291"></div>
    <div class="chat_oppomsg1_box_128_295"></div><span class="chat_oppomsg1_txt_128_296">네, 그렇게 하시죠.</span>
    <div class="chat_oppoprofile1_icon_128_297"></div>
    <div class="chat_inputmsg_box_inp_128_298"></div><span class="chat_examplemsg_txt_128_299">채팅 입력</span>
    <div class="chat_head_box_128_303"></div>
    <span class="chat_back_box_txt_128_304"></span>
    <span class="chat_chatoppo_txt_128_305">허 은진님</span>
    <div class="chat_joinpay_box_btn_128_309"></div><span class="chat_joinpay_txt_128_310">결제 참여</span>
    <div class="chat_sendmsg_icon_btn_128_312"></div>
    <div class="chat_popup_box_128_390"></div><span class="chat_popupquestion_txt_128_409">결제를 진행하시겠습니까?</span>
    <div class="chat_popupyes_box_btn_128_413"></div>
	<div class="chat_popupyes_txt_128_414" @click="pay()">네</div>
    <div class="chat_popupno_box_btn_128_418"></div><span class="chat_popupno_txt_128_419">아니오</span>
  </div>
</template>
<script >
export default {
  name : "ChatView",
  methods: {
    pay() {
      this.$router.push("/PayView");
	}
  }
}
</script>

<style scoped>
.chat_128_275 { 
	background-color:rgba(255, 255, 255, 1);
	width:484px;
	height:844px;
	position:absolute;
	overflow:hidden;
	left: 50%;
	transform: translate(-50%, 0);
}
.chat_back_box_btn_142_10 { 
	background-color:rgba(255, 255, 255, 1);
	width:42px;
	height:32px;
	position:absolute;
	left:9px;
	top:10px;
}
.chat_mymsg_box_128_279 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(255, 255, 255, 1);
	width:97.80329895019531px;
	height:37px;
	position:absolute;
	left:355px;
	top:121px;
	border-top-left-radius:30px;
	border-top-right-radius:30px;
	border-bottom-left-radius:30px;
	border-bottom-right-radius:30px;
}
.chat_mymsg_txt_128_280 { 
	color:rgba(0, 0, 0, 1);
	width:91.38461303710938px;
	height:24.12937355041504px;
	position:absolute;
	left:362px;
	top:128px;
	font-family:Inter;
	text-align:center;
	font-size:15px;
	letter-spacing:-0.5;
	line-height:px;
}
.chat_mymsg1_box_128_284 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(255, 255, 255, 1);
	width:187.8032989501953px;
	height:37px;
	position:absolute;
	left:265px;
	top:267px;
	border-top-left-radius:30px;
	border-top-right-radius:30px;
	border-bottom-left-radius:30px;
	border-bottom-right-radius:30px;
}
.chat_mymsg1_txt_128_285 { 
	color:rgba(0, 0, 0, 1);
	width:188px;
	height:20px;
	position:absolute;
	left:265px;
	top:274px;
	font-family:Inter;
	text-align:center;
	font-size:15px;
	letter-spacing:-0.5;
	line-height:px;
}
.chat_oppomsg_box_128_289 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(255, 255, 255, 1);
	width:118.35021209716797px;
	height:37px;
	position:absolute;
	left:78px;
	top:190px;
	border-top-left-radius:30px;
	border-top-right-radius:30px;
	border-bottom-left-radius:30px;
	border-bottom-right-radius:30px;
}
.chat_oppomsg_txt_128_290 { 
	color:rgba(0, 0, 0, 1);
	width:135.5294189453125px;
	height:24px;
	position:absolute;
	left:67px;
	top:197px;
	font-family:Inter;
	text-align:center;
	font-size:15px;
	letter-spacing:-0.5;
	line-height:px;
}
.chat_oppoprofile_icon_128_291 { 
	width:44px;
	height:44px;
	position:absolute;
	left:23px;
	top:190px;
	border-top-left-radius:59.5px;
	border-top-right-radius:59.5px;
	border-bottom-left-radius:59.5px;
	border-bottom-right-radius:59.5px;
	background-image:url(/src/assets/chat_oppoprofile_icon.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.chat_oppomsg1_box_128_295 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(255, 255, 255, 1);
	width:118.35021209716797px;
	height:37px;
	position:absolute;
	left:78px;
	top:338px;
	border-top-left-radius:30px;
	border-top-right-radius:30px;
	border-bottom-left-radius:30px;
	border-bottom-right-radius:30px;
}
.chat_oppomsg1_txt_128_296 { 
	color:rgba(0, 0, 0, 1);
	width:135.5294189453125px;
	height:24px;
	position:absolute;
	left:67px;
	top:345px;
	font-family:Inter;
	text-align:center;
	font-size:15px;
	letter-spacing:-0.5;
	line-height:px;
}
.chat_oppoprofile1_icon_128_297 { 
	width:44px;
	height:44px;
	position:absolute;
	left:23px;
	top:338px;
	border-top-left-radius:59.5px;
	border-top-right-radius:59.5px;
	border-bottom-left-radius:59.5px;
	border-bottom-right-radius:59.5px;
	background-image:url(/src/assets/chat_oppoprofile1_icon.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.chat_inputmsg_box_inp_128_298 { 
	background-color:rgba(240.12499898672104, 240.12499898672104, 240.12499898672104, 1);
	width:484px;
	height:71px;
	position:absolute;
	left:0px;
	top:773px;
}
.chat_examplemsg_txt_128_299 { 
	color:rgba(154.0625050663948, 154.0625050663948, 154.0625050663948, 1);
	width:94px;
	height:20px;
	position:absolute;
	left:35px;
	top:799px;
	font-family:Inter;
	text-align:center;
	font-size:24px;
	letter-spacing:-0.5;
	line-height:px;
}
.chat_head_box_128_303 { 
	background-color:rgba(255, 234.89746749401093, 163.62499594688416, 1);
	width:484px;
	height:46px;
	position:absolute;
	left:0px;
	top:0px;
}
.chat_back_box_txt_128_304 { 
	color:rgba(0, 0, 0, 1);
	width:33px;
	height:16px;
	position:absolute;
	left:18px;
	top:14px;
	font-family:Inter;
	text-align:left;
	font-size:20px;
	letter-spacing:-0.5;
	line-height:px;
}
.chat_chatoppo_txt_128_305 { 
	color:rgba(0, 0, 0, 1);
	width:114px;
	height:19px;
	position:absolute;
	left:185px;
	top:14px;
	font-family:Inter;
	text-align:center;
	font-size:20px;
	letter-spacing:-0.5;
	line-height:px;
}
.chat_joinpay_box_btn_128_309 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(216.75000607967377, 198.0372565984726, 149.91875141859055, 1);
	width:75.9000015258789px;
	height:29.134614944458008px;
	position:absolute;
	left:399px;
	top:7px;
	border-top-left-radius:30px;
	border-top-right-radius:30px;
	border-bottom-left-radius:30px;
	border-bottom-right-radius:30px;
}
.chat_joinpay_txt_128_310 { 
	color:rgba(0, 0, 0, 1);
	width:50px;
	height:19px;
	position:absolute;
	left:412px;
	top:12px;
	font-family:Inter;
	text-align:center;
	font-size:13px;
	letter-spacing:-0.5;
	line-height:px;
}
.chat_sendmsg_icon_btn_128_312 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	width:35px;
	height:35px;
	position:absolute;
	left:437px;
	top:791px;
	background-image:url(/src/assets/chat_sendmsg_icon_btn.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.chat_popup_box_128_390 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(243.31249594688416, 243.31249594688416, 243.31249594688416, 1);
	width:330px;
	height:262px;
	position:absolute;
	left:82px;
	top:272px;
	border-top-left-radius:20px;
	border-top-right-radius:20px;
	border-bottom-left-radius:20px;
	border-bottom-right-radius:20px;
}
.chat_popupquestion_txt_128_409 { 
	color:rgba(0, 0, 0, 1);
	width:254px;
	height:19px;
	position:absolute;
	left:113px;
	top:352px;
	font-family:Inter;
	text-align:center;
	font-size:18px;
	letter-spacing:-0.5;
	line-height:px;
}
.chat_popupyes_box_btn_128_413 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(216.75000607967377, 198.0372565984726, 149.91875141859055, 1);
	width:97.80329895019531px;
	height:37px;
	position:absolute;
	left:135px;
	top:439px;
	border-top-left-radius:30px;
	border-top-right-radius:30px;
	border-bottom-left-radius:30px;
	border-bottom-right-radius:30px;
}
.chat_popupyes_txt_128_414 { 
	color:rgba(0, 0, 0, 1);
	width:75px;
	height:24px;
	position:absolute;
	left:146px;
	top:446px;
	font-family:Inter;
	text-align:center;
	font-size:15px;
	letter-spacing:-0.5;
	line-height:px;
}
.chat_popupno_box_btn_128_418 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(216.75000607967377, 198.0372565984726, 149.91875141859055, 1);
	width:97.80329895019531px;
	height:37px;
	position:absolute;
	left:240px;
	top:439px;
	border-top-left-radius:30px;
	border-top-right-radius:30px;
	border-bottom-left-radius:30px;
	border-bottom-right-radius:30px;
}
.chat_popupno_txt_128_419 { 
	color:rgba(0, 0, 0, 1);
	width:91.38461303710938px;
	height:24.12937355041504px;
	position:absolute;
	left:247px;
	top:446px;
	font-family:Inter;
	text-align:center;
	font-size:15px;
	letter-spacing:-0.5;
	line-height:px;
}
</style>
