<template>
  <PayHead />
  <PayInfoShare />
  <PayInfoPay />
  <PayInfoEntry />
  <PayFooter />
</template>

<script>
import PayHead from "/src/components/PayHead.vue";
import PayInfoShare from "/src/components/PayInfoShare.vue";
import PayInfoPay from "/src/components/PayInfoPay.vue";
import PayInfoEntry from "/src/components/PayInfoEntry.vue";
import PayFooter from "/src/components/PayFooter.vue";

export default {
  name: "PayView",
  components: {
    PayHead,
    PayInfoShare,
    PayInfoPay,
    PayInfoEntry,
    PayFooter,
  },
};
</script>
