<template>
	<link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet">
    <div class=writepost_130_43><span class="writepost_loc_txt_130_129">설정된 위치가 없습니다. 위치를 설정하여 주세요.</span>
    <div class="writepost_addloc_icon_btn_130_130" @click="enterSetLoc()"></div>
    <div class="writepost_navbar_box_130_131"></div><span class="writepost_home_txt_130_132">홈</span><span
      class="writepost_chat_txt_130_133">채팅</span><span class="writepost_userinfo_txt_130_134">내정보
    </span>
    <div class="writepost_home_icon_btn_130_135" @click="enterHome()"></div>
    <div class="writepost_chat_icon_btn_130_136" @click="chatList()"></div>
    <div class="writepost_userinfo_icon_btn_130_137" @click="enterUserInfo()"></div>
	<span class="writepost_posttitle_txt_inp_130_138">제목을 입력하여주세요.</span>
	<span class="writepost_postcontent_txt_inp_130_140">내용을 입력하여 주세요.</span>
    <div class="writepost_first_line_130_139"></div>
    <div class="writepost_second_line_130_141"></div>
	<span class="writepost_selectmenu_txt_btn_130_142">메뉴선택하기</span><span class="writepost_selecttime_txt_btn_130_153">시간 선택하기</span>
	<span class="writepost_selectloc_txt_btn_130_154">장소 선택하기</span>
    <div class="writepost_writepost_box_btn_130_148" @click="enterPost()"></div>
	<span class="writepost_writepost_txt_130_149">게시하기</span>
	<span class="writepost_sharemenu_txt_130_158">공유 메뉴</span>
	<span class="writepost_sharepeoplenum_txt_130_159">희망 공유 인원</span>
	<span class="writepost_shareloc_txt_130_157">공유 장소</span>
	<span class="writepost_sharetime_txt_130_156">공유 시간</span>
    <div class="writepost_2people_box_btn_130_160"></div><span class="writepost_2people_txt_130_161">2인</span>
    <div class="writepost_3people_box_btn_130_163"></div><span class="writepost_3people_txt_130_165">3인</span>
    <div class="writepost_4people_box_btn_130_166"></div><span class="writepost_4people_txt_130_168">4인</span>
    <div class="writepost_5people_box_btn_130_169"></div><span class="writepost_5people_txt_130_171">5인 이상</span>
  </div>
</template>

<script>
export default {
name : "WritePostView",
method : {	//메서드 전부 에러
chatList() {
this.$router.push("/ChatListView");
},
enterHome() {
this.$router.push("/HomePageView");
},
enterUserInfo() {
this.$router.push("/UserInfoView");
},
enterSetLoc() {	//버그 생김
this.$router.push("/SetLocView");
},
enterPost() {
this.$router.push("/HomePageView");
}
}
}
</script>


<style scoped>
    .writepost_130_43 { 
	background-color:rgba(255, 255, 255, 1);
	width:484px;
	height:844px;
	position:absolute;
	overflow: hidden;
	left: 50%;
	transform: translate(-50%, 0);
}
.writepost_loc_txt_130_129 { 
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
.writepost_addloc_icon_btn_130_130 { 
	width:18px;
	height:18px;
	position:absolute;
	left:308px;
	top:88px;
	background-image:url(/src/assets/writepost_addloc_icon_btn.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.writepost_navbar_box_130_131 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(255, 234.89746749401093, 163.62499594688416, 1);
	width:484px;
	height:76px;
	position:absolute;
	left:0px;
	top:0px;
	border-radius: 15px;
}
.writepost_home_txt_130_132 { 
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
.writepost_chat_txt_130_133 { 
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
.writepost_userinfo_txt_130_134 { 
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
.writepost_home_icon_btn_130_135 { 
	width:30px;
	height:30px;
	position:absolute;
	left:66px;
	top:14px;
	background-image:url(/src/assets/writepost_home_icon_btn.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.writepost_chat_icon_btn_130_136 { 
	width:30px;
	height:30px;
	position:absolute;
	left:225px;
	top:14px;
	background-image:url(/src/assets/writepost_chat_icon_btn.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.writepost_userinfo_icon_btn_130_137 { 
	width:30px;
	height:30px;
	position:absolute;
	left:377px;
	top:14px;
	background-image:url(/src/assets/writepost_userinfo_icon_btn.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.writepost_posttitle_txt_inp_130_138 { 
	color:rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
	width:219px;
	height:25px;
	position:absolute;
	left:12px;
	top:139px;
	font-family:Inter;
	text-align:center;
	font-size:20px;
	letter-spacing:-0.5;
	line-height:px;
}
.writepost_postcontent_txt_inp_130_140 { 
	color:rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
	width:219px;
	height:25px;
	position:absolute;
	left:12px;
	top:200px;
	font-family:Inter;
	text-align:center;
	font-size:20px;
	letter-spacing:-0.5;
	line-height:px;
}
.writepost_first_line_130_139 { 
	transform: rotate(0.27026110800433234deg);
	width:424.0047302246094px;
	height:0px;
	position:absolute;
	left:28px;
	top:181px;
	border:1px solid rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
}
.writepost_second_line_130_141 { 
	transform: rotate(0.27026110800433234deg);
	width:424.0047302246094px;
	height:0px;
	position:absolute;
	left:30px;
	top:512px;
	border:1px solid rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
}
.writepost_selectmenu_txt_btn_130_142 { 
	color:rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
	width:124px;
	height:24px;
	position:absolute;
	left:123px;
	top:534px;
	font-family:Inter;
	text-align:center;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.writepost_selecttime_txt_btn_130_153 { 
	color:rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
	width:124px;
	height:24px;
	position:absolute;
	left:123px;
	top:572px;
	font-family:Inter;
	text-align:center;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.writepost_selectloc_txt_btn_130_154 { 
	color:rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
	width:124px;
	height:24px;
	position:absolute;
	left:123px;
	top:610px;
	font-family:Inter;
	text-align:center;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.writepost_writepost_box_btn_130_148 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(255, 234.89746749401093, 163.62499594688416, 1);
	width:178px;
	height:74px;
	position:absolute;
	left:151px;
	top:729px;
	border-top-left-radius:20px;
	border-top-right-radius:20px;
	border-bottom-left-radius:20px;
	border-bottom-right-radius:20px;
}
.writepost_writepost_txt_130_149 { 
	color:rgba(0, 0, 0, 1);
	width:178px;
	height:14.170212745666504px;
	position:absolute;
	left:151px;
	top:759px;
	font-family:Inter;
	text-align:center;
	font-size:30px;
	letter-spacing:-0.5;
	line-height:px;
}
.writepost_sharemenu_txt_130_158 { 
	color:rgba(0, 0, 0, 1);
	width:88px;
	height:25px;
	position:absolute;
	left:17px;
	top:534px;
	font-family:Inter;
	text-align:center;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.writepost_sharepeoplenum_txt_130_159 { 
	color:rgba(0, 0, 0, 1);
	width:134px;
	height:25px;
	position:absolute;
	left:10px;
	top:646px;
	font-family:Inter;
	text-align:center;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.writepost_shareloc_txt_130_157 { 
	color:rgba(0, 0, 0, 1);
	width:88px;
	height:25px;
	position:absolute;
	left:17px;
	top:608px;
	font-family:Inter;
	text-align:center;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.writepost_sharetime_txt_130_156 { 
	color:rgba(0, 0, 0, 1);
	width:88px;
	height:25px;
	position:absolute;
	left:17px;
	top:571px;
	font-family:Inter;
	text-align:center;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.writepost_2people_box_btn_130_160 { 
	background-color:rgba(255, 255, 255, 1);
	opacity:0.20000000298023224;
	width:92px;
	height:32px;
	position:absolute;
	left:39px;
	top:683px;
	border:1px solid rgba(154.0625050663948, 154.0625050663948, 154.0625050663948, 1);
}
.writepost_2people_txt_130_161 { 
	color:rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
	width:41px;
	height:20px;
	position:absolute;
	left:64px;
	top:689px;
	font-family:Inter;
	text-align:center;
	font-size:15px;
	letter-spacing:-0.5;
	line-height:px;
}
.writepost_3people_box_btn_130_163 { 
	background-color:rgba(255, 255, 255, 1);
	opacity:0.20000000298023224;
	width:90px;
	height:32px;
	position:absolute;
	left:131px;
	top:683px;
	border:1px solid rgba(154.0625050663948, 154.0625050663948, 154.0625050663948, 1);
}
.writepost_3people_txt_130_165 { 
	color:rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
	width:42px;
	height:20px;
	position:absolute;
	left:154px;
	top:689px;
	font-family:Inter;
	text-align:center;
	font-size:15px;
	letter-spacing:-0.5;
	line-height:px;
}
.writepost_4people_box_btn_130_166 { 
	background-color:rgba(255, 255, 255, 1);
	opacity:0.20000000298023224;
	width:92px;
	height:32px;
	position:absolute;
	left:221px;
	top:683px;
	border:1px solid rgba(154.0625050663948, 154.0625050663948, 154.0625050663948, 1);
}
.writepost_4people_txt_130_168 { 
	color:rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
	width:42px;
	height:20px;
	position:absolute;
	left:246px;
	top:689px;
	font-family:Inter;
	text-align:center;
	font-size:15px;
	letter-spacing:-0.5;
	line-height:px;
}
.writepost_5people_box_btn_130_169 { 
	background-color:rgba(255, 255, 255, 1);
	opacity:0.20000000298023224;
	width:91px;
	height:32px;
	position:absolute;
	left:313px;
	top:683px;
	border:1px solid rgba(154.0625050663948, 154.0625050663948, 154.0625050663948, 1);
}
.writepost_5people_txt_130_171 { 
	color:rgba(208.24999898672104, 208.24999898672104, 208.24999898672104, 1);
	width:86px;
	height:20px;
	position:absolute;
	left:317px;
	top:689px;
	font-family:Inter;
	text-align:center;
	font-size:15px;
	letter-spacing:-0.5;
	line-height:px;
}
</style>
