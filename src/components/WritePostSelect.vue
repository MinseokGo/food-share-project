<template>
  <div class="select_box">
    <div class="sel_line">
      <div class="sel_txt">공유 메뉴</div>
      <input type="text" class="sel_option" placeholder="메뉴 선택" v-model="postinfo.userId"/>
    </div>
    <div class="sel_line">
      <div class="sel_txt">공유 시간</div>
      <input type="text" class="sel_option" placeholder="시간 선택" v-model="postinfo.userId"/>
    </div>
    <div class="sel_line">
      <div class="sel_txt">공유 장소</div>
      <input type="text" class="sel_option" placeholder="장소 선택" v-model="postinfo.userId"/>
    </div>
    <div class="sel_line">
      <div class="sel_txt">희망 공유 인원</div>
      <input type="text" class="sel_option" placeholder="인원 선택" v-model="postinfo.userId"/>
    </div>
    <div class="sel_line"></div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapMutations} = createNamespacedHelpers('writepost')

export default {
  name: "WritePostSelect",
  computed: {
    postinfo: {
      get() {
        return this.pinfo;
      },
      set(value) {
        this.updateLoginInfo(value);
      }
    },
    ...mapState({
      pinfo: state => state.postinfo,
    }),
  },
  methods: {
    ...mapActions(['writePost']),
    ...mapMutations(['updateLoginInfo']),
  }
};
</script>

<style scoped>
.select_box {
  top: 10%;
  width: 100%;
  height: 25%;
}

.sel_line {
  width: 90%;
  height: 25%;
  display: block;
  margin: 0 auto;
}

.sel_txt {
  width: 25%;
  line-height: 325%;
  height: 100%;
  float: left;
}

.sel_option {
  width: 75%;
  height: 100%;
  line-height: 325%;
  float: left;
  color: #F0F0F0;
}
 </style>