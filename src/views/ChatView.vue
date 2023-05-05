<template>
  <ChatHead />
  <ChatMessage />
  <ChatFooter />
  <ChatPopUp />
</template>

<script>
import ChatHead from "/src/components/ChatHead.vue";
import ChatMessage from "/src/components/ChatMessage.vue";
import ChatFooter from "/src/components/ChatFooter.vue";
import ChatPopUp from "/src/components/ChatPopUp.vue";

export default {
  name: "ChatView",
  components: {
    ChatHead,
    ChatMessage,
    ChatFooter,
    ChatPopUp,
  },
};
</script>
