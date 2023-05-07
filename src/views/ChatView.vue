<template>
  <ChatHead />
  <ChatMessage />
  <ChatFooter />
</template>

<script>
import ChatHead from "/src/components/ChatHead.vue";
import ChatMessage from "/src/components/ChatMessage.vue";
import ChatFooter from "/src/components/ChatFooter.vue";

export default {
  name: "ChatView",
  components: {
    ChatHead,
    ChatMessage,
    ChatFooter,
  },
};
</script>
