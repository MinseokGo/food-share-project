<template>
	<link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet">

    <div class=pay_128_315>
    <div class="pay_back_box_btn_142_11"></div>
    <div class="pay_payhead_box_128_320"></div>
	<span class="pay_back_box_txt_128_321"></span>
    <div class="pay_dopay_box_btn_128_324"></div><span class="pay_dopay_txt_128_325">결제하기</span>
	<span class="pay_payhead_txt_128_326">결제 정보</span>
	<span class="pay_infoshare_txt_130_270">공유 정보</span>
	<span class="pay_infopay_txt_130_272">결제 정보</span>
	<span class="pay_menu_txt_128_355">자메이카 통다리</span>
	<span class="pay_delivfee_txt_128_356">배달팁</span>
	<span class="pay_sharefee_txt_128_357">공유 대행 수수료</span>
	<span class="pay_totalprice_txt_128_361">합산 금액</span>
	<span class="pay_payprice_txt_128_362">총 결제 금액</span>
	<span class="pay_menupricenum_txt_128_363">21500원</span>
	<span class="pay_delivfeenum_txt_128_364">3000원</span>
	<span class="pay_sharefeenum_txt_128_365">500원</span>
	<span class="pay_totalpricenum_txt_128_366">25000원</span>
	<span class="pay_paypricenum_txt_128_367">12500원</span>
    <div class="pay_shop_icon_128_331"></div>
    <div class="pay_shareloc_box_128_334"></div>
	<span class="pay_shareloc_txt_128_335">장전초 정문</span>
    <div class="pay_shopname_box_128_340"></div>
	<span class="pay_shopname_txt_128_341">BBQ</span>
    <div class="pay_sharetime_box_128_345"></div>
	<span class="pay_sharetime_txt_128_346">19:30 주문</span>
	<span class="pay_sharepeople_txt_128_358">공유 참여자</span>
	<span class="pay_usernickname_txt_128_359">허 은진님</span>
	<span class="pay_sharepeoplenum_txt_128_360">2명</span>
    <div class="pay_profile_icon_128_369"></div>
	<span class="pay_usernickname1_txt_128_370">김 기태님(나)</span>
    <div class="pay_profile1_icon_128_371"></div>
    <div class="boxpaypopup_128_425"></div>
    <div class="pay_popupfail_box_128_436"></div>
	<span class="pay_popupfail_txt_128_437">결제 실패</span>
	<span class="pay_popupfailresult_txt_128_438">채팅창으로 돌아갑니다</span>
    <div class="pay_popupfailyes_box_btn_128_443"></div>
	<span class="pay_popupfailyes_txt_128_444">확인</span>
	<span class="pay_popupsuc_txt_128_426">결제 성공</span>
	<span class="pay_popupsucresult_txt_128_427">19:30 분에 장전초 정문에서 만나요~</span>
    <div class="pay_popupsucyes_box_btn_128_432"></div>
	<span class="pay_popupsucyes_txt_128_433">확인</span>
  </div>
</template>

<script>
export default {
  name : "PayView",
  data() {
      return {
        location: "장전초 정문",
        time: "19:30 주문",
        shop: "BBQ",
		opposit: "허 은진",
		me: '김 기태'
    };
  }
}
</script>


<style scoped>
    .pay_128_315 { 
	background-color:rgba(255, 255, 255, 1);
	width:484px;
	height:844px;
	position:absolute;
	overflow: hidden;
	left: 50%;
	transform: translate(-50%, 0);
}
.pay_back_box_btn_142_11 { 
	background-color:rgba(255, 255, 255, 1);
	width:42px;
	height:32px;
	position:absolute;
	left:9px;
	top:6px;
}
.pay_payhead_box_128_320 { 
	background-color:rgba(255, 234.89746749401093, 163.62499594688416, 1);
	width:484px;
	height:46px;
	position:absolute;
	left:0px;
	top:-1px;
}
.pay_back_box_txt_128_321 { 
	color:rgba(0, 0, 0, 1);
	width:33px;
	height:16px;
	position:absolute;
	left:18px;
	top:13px;
	font-family:Inter;
	text-align:left;
	font-size:20px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_dopay_box_btn_128_324 { 
	background-color:rgba(255, 234.89746749401093, 163.62499594688416, 1);
	width:484px;
	height:69px;
	position:absolute;
	left:0px;
	top:774px;
}
.pay_dopay_txt_128_325 { 
	color:rgba(0, 0, 0, 1);
	width:124px;
	height:31px;
	position:absolute;
	left:205px;
	top:798px;
	font-family:Inter;
	text-align:left;
	font-size:25px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_payhead_txt_128_326 { 
	color:rgba(0, 0, 0, 1);
	width:114px;
	height:19px;
	position:absolute;
	left:185px;
	top:13px;
	font-family:Inter;
	text-align:center;
	font-size:20px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_infoshare_txt_130_270 { 
	color:rgba(0, 0, 0, 1);
	width:115px;
	height:36px;
	position:absolute;
	left:35px;
	top:96px;
	font-family:Inter;
	text-align:left;
	font-size:26px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_infopay_txt_130_272 { 
	color:rgba(0, 0, 0, 1);
	width:115px;
	height:36px;
	position:absolute;
	left:35px;
	top:256px;
	font-family:Inter;
	text-align:left;
	font-size:26px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_menu_txt_128_355 { 
	color:rgba(0, 0, 0, 1);
	width:127px;
	height:27px;
	position:absolute;
	left:31px;
	top:314px;
	font-family:Inter;
	text-align:center;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_delivfee_txt_128_356 { 
	color:rgba(0, 0, 0, 1);
	width:128px;
	height:27px;
	position:absolute;
	left:0px;
	top:354px;
	font-family:Inter;
	text-align:center;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_sharefee_txt_128_357 { 
	color:rgba(0, 0, 0, 1);
	width:128px;
	height:27px;
	position:absolute;
	left:32px;
	top:394px;
	font-family:Inter;
	text-align:center;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_totalprice_txt_128_361 { 
	color:rgba(0, 0, 0, 1);
	width:127px;
	height:27px;
	position:absolute;
	left:10px;
	top:437px;
	font-family:Inter;
	text-align:center;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_payprice_txt_128_362 { 
	color:rgba(0, 0, 0, 1);
	width:128px;
	height:27px;
	position:absolute;
	left:24px;
	top:504px;
	font-family:Inter;
	text-align:center;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_menupricenum_txt_128_363 { 
	color:rgba(0, 0, 0, 1);
	width:95px;
	height:27px;
	position:absolute;
	left:361px;
	top:314px;
	font-family:Inter;
	text-align:center;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_delivfeenum_txt_128_364 { 
	color:rgba(0, 0, 0, 1);
	width:93px;
	height:27px;
	position:absolute;
	left:365px;
	top:353px;
	font-family:Inter;
	text-align:center;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_sharefeenum_txt_128_365 { 
	color:rgba(0, 0, 0, 1);
	width:94px;
	height:27px;
	position:absolute;
	left:370px;
	top:395px;
	font-family:Inter;
	text-align:center;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_totalpricenum_txt_128_366 { 
	color:rgba(0, 0, 0, 1);
	width:95px;
	height:27px;
	position:absolute;
	left:359px;
	top:437px;
	font-family:Inter;
	text-align:center;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_paypricenum_txt_128_367 { 
	color:rgba(0, 0, 0, 1);
	width:95px;
	height:27px;
	position:absolute;
	left:360px;
	top:504px;
	font-family:Inter;
	text-align:center;
	font-size:16px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_shop_icon_128_331 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	width:73px;
	height:72px;
	position:absolute;
	left:35px;
	top:132px;
	border-top-left-radius:20px;
	border-top-right-radius:20px;
	border-bottom-left-radius:20px;
	border-bottom-right-radius:20px;
	background-image:url(/src/assets/pay_shop_icon.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.pay_shareloc_box_128_334 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(255, 255, 255, 1);
	width:65px;
	height:30px;
	position:absolute;
	left:163px;
	top:154px;
	border-top-left-radius:30px;
	border-top-right-radius:30px;
	border-bottom-left-radius:30px;
	border-bottom-right-radius:30px;
}
.pay_shareloc_txt_128_335 { 
	color:rgba(0, 0, 0, 1);
	width:58px;
	height:20px;
	position:absolute;
	left:167px;
	top:159px;
	font-family:Inter;
	text-align:center;
	font-size:12px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_shopname_box_128_340 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(255, 255, 255, 1);
	width:69px;
	height:30px;
	position:absolute;
	left:370px;
	top:154px;
	border-top-left-radius:30px;
	border-top-right-radius:30px;
	border-bottom-left-radius:30px;
	border-bottom-right-radius:30px;
}
.pay_shopname_txt_128_341 { 
	color:rgba(0, 0, 0, 1);
	width:27px;
	height:20px;
	position:absolute;
	left:391px;
	top:159px;
	font-family:Inter;
	text-align:center;
	font-size:13px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_sharetime_box_128_345 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(255, 255, 255, 1);
	width:108px;
	height:30px;
	position:absolute;
	left:244px;
	top:154px;
	border-top-left-radius:30px;
	border-top-right-radius:30px;
	border-bottom-left-radius:30px;
	border-bottom-right-radius:30px;
}
.pay_sharetime_txt_128_346 { 
	color:rgba(0, 0, 0, 1);
	width:63.52941131591797px;
	height:20px;
	position:absolute;
	left:265.1767578125px;
	top:159px;
	font-family:Inter;
	text-align:center;
	font-size:13px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_sharepeople_txt_128_358 { 
	color:rgba(0, 0, 0, 1);
	width:152px;
	height:27px;
	position:absolute;
	left:24px;
	top:577px;
	font-family:Inter;
	text-align:center;
	font-size:26px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_usernickname_txt_128_359 { 
	color:rgba(0, 0, 0, 1);
	width:111px;
	height:27px;
	position:absolute;
	left:64px;
	top:643px;
	font-family:Inter;
	text-align:center;
	font-size:15px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_sharepeoplenum_txt_128_360 { 
	color:rgba(0, 0, 0, 1);
	width:117px;
	height:27px;
	position:absolute;
	left:358px;
	top:577px;
	font-family:Inter;
	text-align:center;
	font-size:26px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_profile_icon_128_369 { 
	width:42px;
	height:37px;
	position:absolute;
	left:41px;
	top:633px;
	border-top-left-radius:59.5px;
	border-top-right-radius:59.5px;
	border-bottom-left-radius:59.5px;
	border-bottom-right-radius:59.5px;
	background-image:url(/src/assets/pay_profile_icon.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.pay_usernickname1_txt_128_370 { 
	color:rgba(0, 0, 0, 1);
	width:111px;
	height:27px;
	position:absolute;
	left:74px;
	top:694px;
	font-family:Inter;
	text-align:center;
	font-size:15px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_profile1_icon_128_371 { 
	width:42px;
	height:37px;
	position:absolute;
	left:42px;
	top:684px;
	border-top-left-radius:59.5px;
	border-top-right-radius:59.5px;
	border-bottom-left-radius:59.5px;
	border-bottom-right-radius:59.5px;
	background-image:url(/src/assets/pay_profile1_icon.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.boxpaypopup_128_425 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(243.31249594688416, 243.31249594688416, 243.31249594688416, 1);
	width:330px;
	height:262px;
	position:absolute;
	left:77px;
	top:300px;
	border-top-left-radius:20px;
	border-top-right-radius:20px;
	border-bottom-left-radius:20px;
	border-bottom-right-radius:20px;
}
.pay_popupfail_box_128_436 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(243.31249594688416, 243.31249594688416, 243.31249594688416, 1);
	width:330px;
	height:262px;
	position:absolute;
	left:77px;
	top:300px;
	border-top-left-radius:20px;
	border-top-right-radius:20px;
	border-bottom-left-radius:20px;
	border-bottom-right-radius:20px;
}
.pay_popupfail_txt_128_437 { 
	color:rgba(0, 0, 0, 1);
	width:254px;
	height:19px;
	position:absolute;
	left:115px;
	top:380px;
	font-family:Inter;
	text-align:center;
	font-size:18px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_popupfailresult_txt_128_438 { 
	color:rgba(0, 0, 0, 1);
	width:285px;
	height:19px;
	position:absolute;
	left:107px;
	top:414px;
	font-family:Inter;
	text-align:center;
	font-size:18px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_popupfailyes_box_btn_128_443 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(245.43749392032623, 213.3666980266571, 130.89999675750732, 1);
	width:97.80329895019531px;
	height:37px;
	position:absolute;
	left:193px;
	top:482px;
	border-top-left-radius:30px;
	border-top-right-radius:30px;
	border-bottom-left-radius:30px;
	border-bottom-right-radius:30px;
}
.pay_popupfailyes_txt_128_444 { 
	color:rgba(0, 0, 0, 1);
	width:75px;
	height:24px;
	position:absolute;
	left:204px;
	top:491px;
	font-family:Inter;
	text-align:center;
	font-size:15px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_popupsuc_txt_128_426 { 
	color:rgba(0, 0, 0, 1);
	width:254px;
	height:19px;
	position:absolute;
	left:112px;
	top:358px;
	font-family:Inter;
	text-align:center;
	font-size:18px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_popupsucresult_txt_128_427 { 
	color:rgba(0, 0, 0, 1);
	width:285px;
	height:19px;
	position:absolute;
	left:103px;
	top:412px;
	font-family:Inter;
	text-align:center;
	font-size:18px;
	letter-spacing:-0.5;
	line-height:px;
}
.pay_popupsucyes_box_btn_128_432 { 
	box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color:rgba(245.43749392032623, 213.3666980266571, 130.89999675750732, 1);
	width:97.80329895019531px;
	height:37px;
	position:absolute;
	left:193px;
	top:490px;
	border-top-left-radius:30px;
	border-top-right-radius:30px;
	border-bottom-left-radius:30px;
	border-bottom-right-radius:30px;
}
.pay_popupsucyes_txt_128_433 { 
	color:rgba(0, 0, 0, 1);
	width:75px;
	height:24px;
	position:absolute;
	left:204px;
	top:500px;
	font-family:Inter;
	text-align:center;
	font-size:15px;
	letter-spacing:-0.5;
	line-height:px;
}
</style>
