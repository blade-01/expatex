<template>
  <the-header />
  <div class="color-guide">
    <div class="container">
      <div class="color-guide-content routes"></div>
    </div>
  </div>
  <home-testimonies />
  <the-footer />
</template>

<script>
import TheHeader from "@/components/navbar/TheHeader.vue";
import TheFooter from "@/components/navbar/TheFooter.vue";

export default {
  name: "HomeView",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/style.scss";
</style>
