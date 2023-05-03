<template>
  <login-content></login-content>
</template>

<script>
import LoginContent from "./src/components/LoginContent.vue";

export default {
  name: "LoginView",
  components: {
    "login-content": LoginContent,
  },
};
</script>
