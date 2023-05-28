<template>
  <div class="box">
      <div class="title">
        {{ viewpost.title }}
      </div>
      <hr>
      <div class="content_box">
        <div class="content">
          {{ viewpost.content }}
        </div>
      </div>
      <hr>
      <div class="option_box">
        <div class="option_line">
          <div class="option">공유 메뉴</div>
          <div class="option_post">{{ viewpost.menu }}</div>
        </div>
        <div class="option_line">
          <div class="option">공유 시간</div>
          <div class="option_post">{{ viewpost.time }}</div>
        </div>
        <div class="option_line">
          <div class="option">공유 장소</div>
          <div class="option_post">{{ viewpost.place }}</div>
        </div>
        <div class="option_line">
          <div class="option">공유 인원</div>
          <div class="option_post">{{ viewpost.people }}</div>
        </div>
      </div>
      <hr>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters } = createNamespacedHelpers('viewpost')

export default {
  name: "ViewPostContent",
  computed: {
    ...mapState({
      viewpost: state => state.viewpost,
    }),
    ...mapGetters(['getViewpost'])
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 55%;
}
.title {
  width: 90%;
  height: 14%;
  line-height: 300%;
  font-size: 130%;
  display: block;
  margin: 0 auto;
}
.content_box {
  width: 100%;
  height: 40%;
}
.content {
  position: relative;
  top: 5%;
  display: block;
  margin: 0 auto;
  width: 90%;
  height: 90%;
}
.option_box {
  width: 100%;
  height: 35%;
}
.option_line {
  display: block;
  margin: 0 auto;
  width: 90%;
  height: 25%;
}
.option {
  width: 20%;
  height: 100%;
  float: left;
  line-height: 200%;
}
.option_post {
  float: left;
  width: 80%;
  height: 100%;
  line-height: 200%;
}
</style>
