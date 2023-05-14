<template>
  <div class="chatbox">
    <ul>
      <template v-for="(item, index) in list" v-bind:key="index">
        <li class="mymsg" v-if="item.ismine">
          <div class="msg">
            {{ item.msg }}
          </div>
        </li>
        <li class="yourmsg" v-if="!item.ismine">
          <div class="msg_info">
            <img :src="item.profileUrl" class="user_profile_icon" />
            <div class="sender">
              {{ item.username }}
            </div>
          </div>
          <div class="msg">
            {{ item.msg }}
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ChatMessage",
  data() {
    return {
      list: [
        {
          username: "나",
          msg: "진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?진짜먹을래?",
          profileUrl: require("../assets/man.png"),
          ismine: true,
        },
        {
          username: "허은진",
          msg: "ㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱ",
          profileUrl: require("../assets/woman.png"),
          ismine: false,
        },
        {
          username: "고민석",
          msg: "ㄷㅊㄹ",
          profileUrl: require("../assets/chat_oppoprofile_icon.png"),
          ismine: false,
        },
        {
          username: "나",
          msg: "요가지마라 ㅡ,ㅡ",
          profileUrl: require("../assets/man.png"),
          ismine: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.chatbox {
  height: 84%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

ul {
  list-style: none;
  height: 100%;
  width: 100%;
  padding-left: 0%;
}

li {
  width: 100%;
  height: 100%;
}

.mymsg {
  height: auto;
  width: 100%;
  margin-bottom: 3%;
}
.mymsg .msg {
  margin-left: 20%;
  background-color: rgb(255, 237, 237);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  text-align: right;
    /* ...으로 만드는 부분 */
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.yourmsg {
  height: auto;
  width: 100%;
  margin-bottom: 3%;
}
.msg_info {
  height: 45px;
  width: 25%;
}
.user_profile_icon {
  height: 100%;
  width: 40%;
  border-radius: 15px;
  float: left;
}
.sender {
  line-height: 350%;
  height: 100%;
  width: 60%;
  float: left;
}
.yourmsg .msg {
  margin-right: 20%;
  background-color: rgb(227, 227, 227);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  text-align: left;
  /* ...으로 만드는 부분 */
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
