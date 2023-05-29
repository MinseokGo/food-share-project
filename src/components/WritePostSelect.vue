<template>
  <div class="select_box">
    <div class="sel_line">
      <div class="sel_txt">공유 메뉴</div>
      <input type="text" class="sel_option" placeholder="메뉴 선택" v-model="postinfo.menu"/>
    </div>
    <div class="sel_line">
      <div class="sel_txt">공유 시간</div>
      <input type="text" class="sel_option" placeholder="시간 선택" v-model="postinfo.time"/>
    </div>
    <div class="sel_line">
      <div class="sel_txt">공유 장소</div>
      <input type="text" class="sel_option" placeholder="장소 선택" v-model="postinfo.place"/>
    </div>
    <div class="sel_line">
      <div class="sel_txt">희망 공유 인원</div>
      <input type="text" class="sel_option" placeholder="인원 선택" v-model="postinfo.people"/>
    </div>
    <div class="sel_line"></div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations} = createNamespacedHelpers('writepost')

export default {
  name: "WritePostSelect",
  computed: {
    postinfo: {
      get() {
        return this.pinfo;
      },
      set(value) {
        this.updateWritePost(value);
      }
    },
    ...mapState({
      pinfo: state => state.writepost,
    }),
  },
  methods: {
    ...mapMutations(['updateWritePost']),
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
  position: relative;
  top: 20%;
  width: 70%;
  height: 50%;
  float: left;
  color: #F0F0F0;
}
 </style>