<template>
  <the-header />
  <div class="order routes">
    <div class="container">
      <img src="@/assets/img/check.png" alt="check" />
      <p>You've sucessfully placed your order</p>
      <router-link :to="{ name: 'home' }" class="pri-btn"
        >Go Back to Home</router-link
      >
    </div>
  </div>
  <the-footer />
</template>

<script>
import TheHeader from "@/components/navbar/TheHeader.vue";
import TheFooter from "@/components/navbar/TheFooter.vue";
export default {
  name: "OrderSuccess",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/style.scss";
.order {
  display: flex;
  height: calc(100vh - 78px);
  & .container {
    @include flex(flex, center, center, column);
    text-align: center;
  }
  img {
    width: 81px;
  }
  p {
    @include font(14px, 600, 26px, $nav-color);
    margin: 2rem auto;
    width: 200px;
  }
  a.pri-btn {
    @include font(18px, 600, 27px, $white);
    padding: 0.8rem 2.5rem;
    margin: 0;
  }
}

@media screen and (min-width: 1000px) {
  .order {
    & .container {
      width: 500px;
      margin: auto;
    }
    img {
      width: 115px;
    }
    p {
      @include font(36px, 600, 48px, $nav-color);
      width: auto;
    }
    a.pri-btn {
      @include font(18px, 600, 27px, $white);
    }
  }
}
</style>
