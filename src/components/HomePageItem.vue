<template>
  <div class="homelistbox">
    <ul>
      <template v-for="(item, index) in itemlist" v-bind:key="index">
        <li>
          <div class="homeindex"  @click="viewPost()">
            <img src="item.shopImg" class="shop_icon" />
            <div class="post_info">
              <div class="info_line">
                {{ item.title }}
              </div>
              <div class="info_line">
                <div class="info_box">
                  {{ item.place }}
                </div>
                <div class="info_box">
                  {{ item.time }}
                </div>
                <div class="info_box">
                  {{ item.people }}
                </div>
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
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('homepage')

export default {
  name: "HomePageItem",
  computed: {
    ...mapState({
      itemlist: state => state.homeitem,
    }),
    ...mapGetters(['getHomeItemList']),
  },
  methods: {
    ...mapActions(['fetchHomeItemList','viewPost']),
  },
  mounted() {
    this.fetchHomeItemList();
    this.getHomeItemList;
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

.info_box{
  float: left;
  height: auto;
  width: 33%;
}

hr {
  position: relative;
  bottom: 10%;
}
</style>
