<template>
  <the-header />
  <div class="about routes">
    <div class="container">
      <div class="about-content">
        <div class="about-content-name">
          <h3 class="hide-on-lg">About Us</h3>
        </div>
        <img src="@/assets/img/about-01.png" alt="about_one" />
        <div class="about-content-info">
          <h3 class="hide-on-sm">About Us</h3>
          <p>
            Expatex Smart Paints company is driven, as a matter of choice, by
            value. i.e: Value to our esteemed clients by way of beautiful and
            very attractive internal and external decor. <br />
            Value for money spent by our customers at the high end, high, medium
            and low income brackets. <br />
            Our smart paints are in three (3) categories, namely: Special smart
            paints, Decorative paint, Industrial paints.
          </p>
        </div>
      </div>
      <div class="about-mission">
        <div class="about-mission-text">
          <h4>Our Mission and Vision</h4>
          <div class="mission-vision">
            <div class="mission-vision-text">
              <h3>Our Mission</h3>
              <p>
                To be the most preferred quality brand for decorative and
                industrial coatings.
              </p>
            </div>
            <div class="mission-vision-text">
              <h3>Our Vision</h3>
              <p>To add value by exceeding your customers expectations.</p>
            </div>
          </div>
        </div>
        <div class="mission-img">
          <p>Integrity | Building Trust | Team work | Customer Satisfaction</p>
          <img src="@/assets/img/about-02.png" alt="about_one" />
        </div>
      </div>
      <div class="about-expatex">
        <p>
          ExpateX paint is your best paint for interior and Exterior finishes.
        </p>
      </div>
    </div>
  </div>
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
.about {
  padding: 2rem 0 5rem;
  &-content {
    img {
      border-radius: 30px;
      height: 323.61px;
      margin: 2rem auto;
      object-fit: contain;
    }
    &-name h3 {
      text-align: center;
      @include font(24px, 600, 36px, $sec-btn);
    }
    &-info {
      margin: 1rem 0;
      p {
        margin-bottom: 0.8rem;
        @include font(14px, 400, 21px, $nav-color);
      }
    }
  }
  &-mission {
    padding: 4rem 0;
    text-align: center;
    h4 {
      @include font(24px, 600, 36px, $sec-btn);
    }
    .mission-vision {
      margin-top: 1.5rem;
      &-text {
        margin-top: 1rem;
        h3 {
          @include font(14px, 600, 26px, $pri-color);
          margin-bottom: 1rem;
        }
        p {
          @include font(14px, 400, 26px, $pri-color);
        }
      }
    }
    .mission-img {
      margin: 1.5rem 0;
      p {
        @include font(14px, 600, 26px, $sec-btn);
      }
      img {
        margin: 1rem 0;
      }
    }
  }
  &-expatex {
    text-align: center;
    p {
      @include font(26px, 600, 39px, $nav-color);
    }
  }
}

@media screen and (min-width: 700px) {
  .about {
    &-content {
      @include flex(flex, space-between, center, row);
      img {
        flex-basis: 40%;
        margin: 0 1rem 0 0;
      }
      &-info {
        flex-basis: 60%;
        margin: 0;
        h3 {
          text-align: left;
          @include font(24px, 600, 45px, $sec-btn);
          margin-bottom: 1rem;
        }
      }
    }
    &-description {
      img {
        height: 340px;
      }
    }
    &-mission {
      .mission-vision {
        text-align: left;
        @include flex(flex, space-evenly, flex-start, row);
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  .about {
    &-content {
      img {
        width: 400px;
        height: 450px;
        margin: 0 2rem 0 0;
      }
      &-info {
        h3 {
          @include font(30px, 600, 45px, $sec-btn);
        }
        p {
          @include font(18px, 400, 40px, $nav-color);
        }
      }
    }
    &-mission {
      padding: 6rem 0 3rem;
      h4 {
        @include font(30px, 600, 23px, $sec-btn);
        margin-bottom: 4rem;
      }
      .mission-vision {
        &-text {
          width: 350px;
          margin: 0;
          h3 {
            @include font(18px, 600, 26px, $pri-color);
          }
          p {
            @include font(18px, 400, 30px, $pri-color);
          }
        }
      }
      .mission-img {
        margin-top: 3rem;
        p {
          @include font(18px, 600, 39px, $sec-btn);
        }
        img {
          height: 400px;
        }
      }
    }
    &-expatex {
      width: 700px;
      margin: 5rem auto 0;
      p {
        @include font(38px, 600, 60px, $nav-color);
      }
    }
  }
}

@media screen and (min-width: 1400px) {
  .about {
    &-info {
      h3 {
        @include font(30px, 600, 45px, $sec-btn);
      }
    }
    &-description {
      h4 {
        @include font(40px, 600, 60px, $sec-btn);
      }
    }
    &-mission {
      h4 {
        @include font(40px, 600, 60px, $sec-btn);
        margin-bottom: 1.3rem;
      }
    }
    &-expatex {
      width: 850px;
      p {
        @include font(48px, 600, 72px, $pri-color);
      }
    }
  }
}
</style>
