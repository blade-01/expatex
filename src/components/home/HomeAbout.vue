<template lang="html">
  <div class="about">
    <div class="container">
      <div class="about-content">
        <h2>About ExpateX</h2>
        <p>
          Expatex Smart Paints company is driven, as a matter of choice, by
          value. i.e:<br />
          Value to our esteemed clients by way of beautiful and very attractive
          internal and external decor. <br />
          Value for money spent by our customers at the high end, high, medium
          and low income brackets. <br />
          Our smart paints are in three (3) categories, namely: Special smart
          paints, Decorative paint, Industrial paints.
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
        @include font(18px, 400, 40px, $pri-color);
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
