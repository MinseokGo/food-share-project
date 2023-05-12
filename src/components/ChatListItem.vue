<template>
  <div class="chatlistbox">
    <ul>
      <li v-for="(item, index) in list" v-bind:key="index">
        <div class="chatindex">
          <img src="@/assets/chatlist_shop_icon.png" class="shop_icon">
          <div class="chat_info">
            <div class="info_line" @click="chat()">
              {{ item.title }}
            </div>
            <div class="info_line">
              {{ item.lastMsg }}
            </div>
            <div class="info_line">
              {{ item.where }}
            </div>
          </div>
        </div>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ChatListItem",
  methods: {
    chat() {
      this.$router.push('/ChatView');
    }
  },
  data() {
    return {
      list: [{title: '허은진님과의 대화방', lastMsg: '네, 그렇게 하시죠.', where: '장전초'},
      {title: '김수진', lastMsg: 'ㄱㄱ', where: '금전초'},
      {title: '고민석', lastMsg: 'ㄷㅊㄹ', where: '남일고'}
    ]
    };
  }
};
</script>

<style scoped>
.info_line {
  height: 33.3%;
  width: 100%;
}
.chat_info {
  width: 78%;
  height: 100%;
  float: left;
}


.shop_icon {
  width: 22%;
  height: 100%;
  float: left;
}

.chatlistbox {
  width: 100%;
  height: 86.5%;
}

.chatindex {
  width: 100%;
  height: 100%;
  bottom: 5%;
}

ul {
  list-style: none;
}

li {
  left: -40px;
  position: relative;
  width: 100%;
  height: 100px;
}

hr {
  position: relative;
  bottom: 10%;
}
</style>