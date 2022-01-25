<template lang="html">
  <div class="testimonies">
    <div class="container">
      <div class="testimonies-content">
        <h2>Get ExpateX Testimonies</h2>
        <p>
          Ullamco pariatu nostrud. Dolor eiusmod occaecat excepteur ocariatur
          quip. Do amet tempor sunt cillum n
        </p>
      </div>
      <div class="testimonies-grid">
        <Splide :options="options">
          <SplideSlide v-for="card in cards" :key="card">
            <div class="card">
              <div class="img-role">
                <img
                  :src="require(`@/assets/img/${card.src}`)"
                  :alt="card.name"
                />
                <div class="role">
                  <h3>{{ card.name }}</h3>
                  <p>{{ card.title }}</p>
                </div>
              </div>
              <div class="content">
                <p>{{ card.content }}</p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <div class="testimonies-more">
        <button class="btn">Contact Us Now</button>
      </div>
    </div>
  </div>
  <div class="contact">
    <div class="container">
      <h4>
        ExpateX paint is your best paint for interior and Exterior finishes.
      </h4>
    </div>
  </div>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
export default {
  name: "HomeTestimonies",
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        trimSpace: false,
        focus: "center",
        perPage: 3,
        type: "loop",
        drag: false,
        easing: "ease",
        autoplay: true,
        interval: 2000,
        arrows: false,
        pagination: false,
        breakpoints: {
          375: {
            perPage: 1,
          },
          425: {
            perPage: 1,
          },
        },
      },
      cards: [
        {
          name: "Arc. Deji Zubair",
          title: "Architect",
          content:
            "Ullamco pariatur veniam eu nostrud. Dolor eiusmod occaecat excepteur occaecat eiusmod elit ad pariatur sit eiusmod cillum ",
          src: "avatar.png",
        },
        {
          name: "Arc. Deji Zubair",
          title: "Architect",
          content:
            "Ullamco pariatur veniam eu nostrud. Dolor eiusmod occaecat excepteur occaecat eiusmod elit ad pariatur sit eiusmod cillum ",
          src: "avatar.png",
        },
        {
          name: "Arc. Deji Zubair",
          title: "Architect",
          content:
            "Ullamco pariatur veniam eu nostrud. Dolor eiusmod occaecat excepteur occaecat eiusmod elit ad pariatur sit eiusmod cillum ",
          src: "avatar.png",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/style.scss";
.testimonies {
  background: #f8f8ff;
  padding: 5rem 0 10rem;
  position: relative;
  overflow: visible;
  &-content {
    text-align: center;
    margin-bottom: 2rem;
    h2 {
      @include font(24px, 600, 36px, $sec-btn);
    }
    p {
      @include font(14px, 400, 26px, $pri-color);
      margin: 1rem 0;
    }
  }
  .card {
    background: $white;
    box-shadow: 0px 8px 16px rgba(196, 196, 196, 0.1);
    border-radius: 10px;
    padding: 1rem;
    margin: 0.1rem 1rem;
    .img-role {
      @include flex(flex, flex-start, center, row);
      img {
        width: 58px;
        height: 58px;
        margin-right: 1rem;
      }
      .role {
        @include flex(flex, flex-start, flex-start, column);
        h3 {
          @include font(14px, 500, 21px, $sec-btn);
          padding-bottom: 0.3rem;
        }
        p {
          @include font(12px, 500, 18px, $nav-color);
        }
      }
    }
    .content {
      margin-top: 1rem;
      p {
        @include font(12px, 500, 20px, $pri-color);
      }
    }
  }
  &-more {
    text-align: center;
    position: absolute;
    z-index: 100;
    bottom: -120px;
    left: 50%;
    transform: translateX(-50%);
    &::after {
      position: absolute;
      content: "";
      bottom: 65px;
      left: 50%;
      transform: translateX(-50%);
      height: 120px;
      width: 0;
      border: dashed 1px $sec-btn;
    }
    button.btn {
      background: none;
      color: $sec-btn;
      text-decoration: underline;
      margin: 0.5rem 0 0;
      @include font(16px, 500, 30px, $sec-btn);
    }
  }
}
.contact {
  background: $white;
  padding: 10rem 0 5rem;
  text-align: center;
  h4 {
    @include font(26px, 600, 39px, $nav-color);
  }
}

@media screen and (min-width: 1000px) {
  .testimonies {
    &-content {
      width: 800px;
      margin: auto auto 4rem;
      h2 {
        @include font(30px, 600, 50px, $sec-btn);
      }
      p {
        @include font(20px, 400, 30px, $pri-color);
      }
    }
    &-more {
      button.btn {
        @include font(18px, 500, 30px, $sec-btn);
      }
    }
  }
  .contact {
    .container {
      width: 750px;
      margin: auto;
    }
    h4 {
      @include font(35px, 600, 60px, $nav-color);
    }
  }
}

@media screen and (min-width: 1400px) {
  .testimonies {
    &-content {
      h2 {
        @include font(40px, 600, 60px, $sec-btn);
      }
      p {
        @include font(28px, 400, 44px, $pri-color);
      }
    }
    .card {
      .img-role {
        img {
          width: 80px;
          height: 80px;
        }
        .role {
          h3 {
            @include font(24px, 500, 36px, $sec-btn);
            padding-bottom: 0.3rem;
          }
          p {
            @include font(16px, 500, 24px, $nav-color);
          }
        }
      }
      .content {
        p {
          @include font(18px, 500, 30px, $pri-color);
        }
      }
    }
  }
  .contact {
    .container {
      width: 860px;
    }
    h4 {
      @include font(48px, 600, 72px, $nav-color);
    }
  }
}
</style>
