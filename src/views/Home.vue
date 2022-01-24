<template>
  <the-header />
  <home-main />
  <home-about />
  <home-paints />
  <home-gallery />
  <home-testimonies />
  <the-footer />
</template>

<script>
import TheHeader from "@/components/navbar/TheHeader.vue";
import HomeMain from "@/components/home/HomeMain.vue";
import HomeAbout from "@/components/home/HomeAbout.vue";
import HomePaints from "@/components/home/HomePaints.vue";
import HomeGallery from "@/components/home/HomeGallery.vue";
import HomeTestimonies from "@/components/home/HomeTestimonies.vue";
import TheFooter from "@/components/navbar/TheFooter.vue";

export default {
  name: "HomeView",
  components: {
    TheHeader,
    HomeMain,
    HomeAbout,
    HomePaints,
    HomeGallery,
    HomeTestimonies,
    TheFooter,
  },
};
</script>
<style lang="scss" scoped>
// @import "@/scss/style.scss";
</style>
