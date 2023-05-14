<template>
  <div class="homelistbox">
    <ul>
      <template v-for="(item, index) in list" v-bind:key="index">
        <li>
          <div class="homeindex"  @click="viewpost()">
            <img src="@/assets/chatlist_shop_icon.png" class="shop_icon" />
            <div class="post_info">
              <div class="info_line">
                {{ item.title }}
              </div>
              <div class="info_line">
                {{ item.where }}
              </div>
            </div>
          </div>
          <hr/>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomePageItem",
  data() {
    return {
      list: [
        {
          title: "자메이카 한주디 하실분",
          where: "장전초",
        },
        {
          title: "후라이드 노나묵자!",
          where: "금전초",
        },
        {
          title: "응애!",
          where: "남일고",
        },
        {
          title: "응애!",
          where: "남일고",
        },
        {
          title: "응애!",
          where: "남일고",
        },
        {
          title: "응애!",
          where: "남일고",
        },
        {
          title: "응애!",
          where: "남일고",
        },
      ],
    };
  },
  methods: {
    viewpost() {
      this.$router.push("/ViewPostView");
    },
  },
};
</script>

<style scoped>
.homelistbox {
  width: 100%;
  height: 86.5%;
  overflow-y: scroll;
  overflow-x: hidden;
}
ul {
  list-style: none;
  padding-left: 0%;
}
li {
  position: relative;
  width: 100%;
  height: 100px;
}
.homeindex {
  width: 100%;
  height: 86.5%;
  bottom: 5%;
}
.shop_icon {
  width: 22%;
  height: 100%;
  float: left;
}
.post_info {
  width: 78%;
  height: 100%;
  float: left;
}
.info_line {
  height: 50%;
  width: 100%;
}


hr {
  position: relative;
  bottom: 10%;
}
</style>
