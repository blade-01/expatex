<template>
  <the-header />
  <div class="order routes">
    <div class="container">
      <img src="@/assets/img/404.png" alt="check" />
      <h3>There are no results for "{{ $route.fullPath }}"</h3>
      <ul>
        <li v-for="li in lis" :key="li">{{ li }}</li>
      </ul>
      <router-link :to="{ name: 'home' }" href="#paint" class="pri-btn"
        >Get Expatex Paint</router-link
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
  data() {
    return {
      lis: [
        "Check your spelling for typing errors",
        "Try searching with short and simple keywords",
        "Try searching more general terms and then filter the search results",
      ],
    };
  },
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
    width: 191px;
    margin: 0 0 1.5rem;
  }
  h3 {
    @include font(16px, 300, 24px, $nav-color);
  }
  ul {
    list-style-position: inside;
    margin: 1.5rem 0;
    li {
      @include font(14px, 300, 24px, #818181);
      padding: 0.6rem 0 0;
    }
  }
  a.pri-btn {
    @include font(18px, 600, 27px, $white);
    padding: 0.8rem 2.5rem;
    margin: 0;
  }
}

@media screen and (min-width: 1000px) {
  .order {
    padding: 4rem 0;
    height: auto;
    & .container {
      width: 500px;
      margin: auto;
    }
    img {
      width: 253px;
    }
    h3 {
      @include font(18px, 300, 24px, $nav-color);
    }
    ul {
      li {
        @include font(18px, 300, 24px, #818181);
      }
    }
    a.pri-btn {
      @include font(18px, 600, 27px, $white);
    }
  }
}
</style>
