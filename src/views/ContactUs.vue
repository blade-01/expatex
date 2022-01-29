<template>
  <the-header />
  <section class="contact-head">
    <div class="contact-head-content routes">
      <h3>Contact Us</h3>
      <p>
        Ullamco pariatu nostrud. Dolor eiusmod occaecat excepteur ocariatur
        quip. Do amet tempor sunt cillum n
      </p>
    </div>
  </section>
  <aside class="contact">
    <div class="container">
      <contact-form />
    </div>
    <contact-links />
  </aside>
  <contact-map />
  <the-footer />
</template>

<script>
import TheHeader from "@/components/navbar/TheHeader.vue";
import TheFooter from "@/components/navbar/TheFooter.vue";
import ContactForm from "@/components/contact/ContactForm.vue";
import ContactLinks from "@/components/contact/ContactLinks.vue";
import ContactMap from "@/components/contact/ContactMap.vue";
export default {
  name: "ContactUs",
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
    ContactForm,
    ContactLinks,
    ContactMap,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/style.scss";
.contact-head {
  background: url("../assets/img/main-bg.png") no-repeat center center/cover;
  display: flex;
  height: 450px;
  width: 100%;
  &-content {
    @include flex(flex, center, center, column);
    text-align: center;
    margin: auto;
    width: 90%;
    h3 {
      @include font(30px, 700, 42px, $nav-color);
    }
    p {
      @include font(18px, 500, 25px, $nav-color);
      margin: 1.5rem 0;
    }
  }
}
.contact {
  padding: 1rem 0;
  text-align: center;
  & .container {
    position: relative;
    top: -140px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    margin: 0;
    padding: 2rem;
    background: $white;
    box-shadow: 0px 8px 40px rgba(196, 196, 196, 0.25);
    border-radius: 18px;
  }
  & h3 {
    margin-bottom: 0.7rem;
  }
}

@media screen and (min-width: 1000px) {
  .contact-head {
    height: 500px;
    &-content {
      @include flex(flex, center, center, column);
      text-align: center;
      width: 650px;
      margin: auto;
      h3 {
        @include font(30px, 600, 40px, $nav-color);
      }
      p {
        @include font(18px, 500, 34px, $nav-color);
        margin: 1.5rem 0;
      }
    }
  }
  .contact {
    & .container {
      width: 750px;
    }
  }
  .links {
    & .container {
      @include grid(grid, 3, 1fr, 1rem, 1rem);
    }
  }
}
@media screen and (min-width: 1400px) {
  .contact-head {
    &-content {
      width: 700px;
      margin: auto;
      h3 {
        @include font(40px, 600, 60px, $nav-color);
      }
      p {
        @include font(28px, 500, 44px, $nav-color);
        margin: 1.5rem 0;
      }
    }
  }
  .contact .container {
    width: 1100px;
    padding: 3rem;
    top: -120px;
  }
  .contact h3 {
    font-size: 36px;
    line-height: 50px;
  }
}
</style>
