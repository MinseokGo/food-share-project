<template>
  <DaumAPI></DaumAPI>
  <SetLocBtn></SetLocBtn>
</template>

<script>
import DaumAPI from "/src/components/DaumAPI.vue";
import SetLocBtn from "/src/components/SetLocBtn.vue";

export default {
  name: "SetLocView",
  components: {
    DaumAPI,
    SetLocBtn,
  },
};
</script>
