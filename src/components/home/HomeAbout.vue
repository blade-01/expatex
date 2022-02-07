<template lang="html">
  <div class="about">
    <div class="container">
      <div class="about-content">
        <h2>About ExpateX</h2>
        <ul>
          <li v-for="li in lis" :key="li">
            {{ li.content }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeAbout",
  data() {
    return {
      lis: [
        {
          content:
            "For many years, we have continued to consistently manufacture durable, tough, heat resistant, and fireproof paints, which also protect against toxic fumes. Our products are manufactured under strict and unique technical processes, to give you the best result every time.",
        },
        {
          content:
            "Our Expatex colour paint does not fade or change in color. Our team of experts are always ready and willing to guide you in making the best choice when it comes to our wide array of colors.",
        },
        {
          content:
            "The unmatched quality of our products, our passion for technological development and innovation, make Expatex Paints one of the leading paint manufacturers in Nigeria. For your creative adventure, check our Product collection and colour guide.",
        },
      ],
    };
  },
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
    ul {
      margin: 1.5rem 0;
      list-style-type: none;
      li {
        @include font(14px, 500, 26px, $pri-color);
        margin: 1rem 0 0;
        padding-left: 1.3rem;
      }
      li::before {
        content: "";
        display: inline-block;
        margin: 0rem 0.7rem 0 -1.3rem;
        height: 5px;
        width: 5px;
        background: $nav-color;
        border-radius: 50%;
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  .about {
    &-content {
      h2 {
        @include font(30px, 600, 50px, $sec-btn);
      }
      ul {
        li {
          @include font(18px, 400, 40px, $pri-color);
        }
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
    }
  }
}
</style>
