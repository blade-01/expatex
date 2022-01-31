<template lang="html">
  <div class="about">
    <div class="container">
      <div class="about-content">
        <h2>About ExpateX</h2>
        <p>
          Ullamco pariatur veniam eu nostrud. Dolor eiusmod occaecat excepteur
          occaecat eiusmod elit ad pariatur sit eiusmod cillum dolor aliquip. Do
          amet tempor sunt cillum nulla dolor labore nisi consectetur. Deserunt
          tempor exercitation occaecat consectetur fugiat. Ea nisi aliqua
          occaecat nulla reprehenderit. Veniam ipsum reprehenderit in amet
          exercitation mollit laboris sint tempor incididunt magna. In voluptate
          mollit in sit occaecat cillum est labore nostrud ex deserunt
        </p>
        <button class="pri-btn" @click="$router.push({ name: 'contact-us' })">
          Contact Us
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeAbout",
};
</script>
<style lang="scss" scoped>
@import "@/scss/style.scss";
.about {
  background: $white;
  padding: 5rem 0;
  &-content {
    h2 {
      @include font(24px, 600, 36px, $sec-btn);
    }
    p {
      @include font(14px, 500, 26px, $pri-color);
      margin: 1.5rem 0;
    }
    button.pri-btn {
      @include font(18px, 600, 27px, $white);
      padding: 1rem 1.5rem;
    }
  }
}

@media screen and (min-width: 1000px) {
  .about {
    &-content {
      h2 {
        @include font(30px, 600, 50px, $sec-btn);
      }
      p {
        @include font(20px, 400, 40px, $pri-color);
      }
      button.pri-btn {
        @include font(16px, 600, 27px, $white);
        padding: 0.9rem 2rem;
      }
    }
  }
}

@media screen and (min-width: 1400px) {
  .about {
    &-content {
      h2 {
        @include font(40px, 600, 60px, $sec-btn);
      }
      p {
        @include font(28px, 400, 44px, $pri-color);
      }
      button.pri-btn {
        padding: 0.9rem 3rem;
      }
    }
  }
}
</style>
