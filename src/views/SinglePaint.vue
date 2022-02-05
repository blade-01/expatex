<template>
  <the-header />
  <div class="paint routes">
    <div class="container">
      <div class="paint-content">
        <div class="paint-content-name">
          <h3 class="hide-on-lg">{{ paint.name }}</h3>
        </div>
        <div class="paint-img">
          <img :src="require(`@/assets/img/${paint.full}`)" :alt="paint.name" />
        </div>
        <div class="paint-content-info">
          <h3 class="hide-on-sm">{{ paint.name }}</h3>
          <div class="info">
            <p v-for="info in paint.info" :key="info">
              <span>{{ info.name }}: </span>
              <span v-html="info.content" class="list-style"></span>
            </p>
          </div>
          <div class="button-div">
            <button
              class="pri-btn"
              @click="$router.push({ name: 'color-guide' })"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div class="paint-more">
        <a href="#more" class="btn" @click="showMore">{{ text }}</a>
      </div>
      <transition name="fade">
        <div class="more" id="more" v-if="show">
          <div class="paint-description">
            <div class="desc" v-for="detail in details" :key="detail">
              <div class="desc-content">
                <h4>{{ detail.name }}</h4>
                <img
                  class="hide-on-lg"
                  :src="require(`@/assets/img/${detail.src}`)"
                  :alt="detail.name"
                />
                <p>{{ detail.content }}</p>
              </div>
              <img
                class="hide-on-sm"
                :src="require(`@/assets/img/${detail.src}`)"
                :alt="detail.name"
              />
            </div>
          </div>
          <div class="paint-disclaimer">
            <h5>Disclaimer</h5>
            <p>
              The information given in this sheet is not intended to be
              exhaustive and any person using the product for any purpose other
              than that specically recommended in this sheet without rst
              obtaining written conrmation from us to the suitability of the
              product for the intended purpose does so at his own risk. We
              guarantee our product to conform to the specifications contained
              herein. WE MAKE NO OTHER WARRANTY OR GUARANTEE OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY. The information
              contained in this sheet is liable to modification from time to
              time in the light of experience and our policy of continuous
              improvement, which makes it the responsibility of the person
              relaying on the information sheet to ensure that he is having the
              last updated version.
            </p>
          </div>
          <div class="paint-contact">
            <router-link :to="{ name: 'contact-us' }" class="btn"
              >Contact Us Now</router-link
            >
          </div>
          <div class="paint-expatex">
            <p>Finest quality, longer lasting finish</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
  <the-footer />
</template>

<script>
import { mapGetters } from "vuex";
import TheHeader from "@/components/navbar/TheHeader.vue";
import TheFooter from "@/components/navbar/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["allPaints", "details"]),
    paint() {
      return this.allPaints.find((paint) => paint.id === this.id);
    },
  },
  data() {
    return {
      show: false,
      text: "More Details",
    };
  },
  methods: {
    showMore() {
      this.show = !this.show;
      if (this.show === true) {
        this.text = "Less Details";
      } else {
        this.text = "More Details";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/style.scss";
%afterEffect {
  position: absolute;
  content: "";
  left: 50%;
  transform: translateX(-50%);
  height: 120px;
  width: 0;
  border: dashed 1px $sec-btn;
}
.paint {
  padding: 2rem 0 5rem;
  color: $pri-color;
  &-content {
    .paint-img {
      position: relative;
      margin: 2rem auto;
      &::after {
        content: "";
        position: absolute;
        bottom: 5px;
        right: 0;
        height: 60px;
        width: 60%;
        background: #c02e2e;
        border-radius: 30px 0 30px 30px;
      }
      img {
        border-radius: 30px;
        height: 323.61px;
        object-fit: cover;
      }
    }
    &-name h3 {
      text-align: center;
      @include font(24px, 600, 36px, $sec-btn);
    }
    &-info {
      .info {
        margin: 1rem 0;
        p {
          margin-bottom: 0.8rem;
          span:first-child {
            @include font(14px, 600, 21px, $nav-color);
          }
          span:last-child {
            @include font(14px, 400, 21px, $nav-color);
            & ::v-deep ul {
              margin: 1rem;
              text-align: left;
              list-style-type: none;
              li {
                margin: 1rem 0 0;
                padding-left: 0.3rem;
              }
              li:before {
                content: "";
                display: inline-block;
                height: 10px;
                width: 10px;
                background-size: 10px;
                background-image: url("../assets/img/check.svg");
                background-repeat: no-repeat;
                margin-right: 0.7rem;
                margin-left: -1.3rem;
              }
            }
          }
        }
      }
      .button-div {
        @include flex(flex, flex-end, center, row);
        button.pri-btn {
          @include font(18px, 600, 27px, $white);
        }
      }
    }
  }
  &-more {
    text-align: center;
    position: relative;
    overflow: visible;
    height: 220px;
    &::after {
      @extend %afterEffect;
      top: 60px;
    }
    a.btn {
      background: none;
      color: $sec-btn;
      text-decoration: underline;
      margin: 0.5rem 0 0;
      @include font(16px, 500, 30px, $sec-btn);
    }
  }
  &-description {
    .desc {
      margin: 0 0 3rem;
    }
    h4 {
      @include font(24px, 600, 36px, $sec-btn);
    }
    p {
      @include font(14px, 400, 26px, $pri-color);
    }
    img {
      margin: 2rem 0;
    }
  }
  &-disclaimer {
    h5 {
      @include font(24px, 600, 36px, $sec-btn);
      margin-bottom: 2rem;
    }
    p {
      @include font(14px, 400, 26px, $pri-color);
    }
  }
  &-contact {
    text-align: center;
    position: relative;
    overflow: visible;
    margin: 8.5rem 0 2rem;
    &::after {
      @extend %afterEffect;
      top: -100px;
    }
    a.btn {
      background: none;
      color: $sec-btn;
      text-decoration: underline;
      margin: 1rem 0 0;
      @include font(16px, 500, 30px, $sec-btn);
    }
  }
  &-expatex {
    text-align: center;
    p {
      @include font(26px, 600, 39px, $nav-color);
    }
  }
}

.more {
  padding-top: 6rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@media screen and (min-width: 700px) {
  .paint {
    &-content {
      @include flex(flex, space-between, flex-start, row);
      .paint-img {
        margin: 0 1rem 0 0;
        img {
          flex-basis: 40%;
        }
      }
      &-info {
        flex-basis: 60%;
        margin: 0;
        h3 {
          text-align: left;
          @include font(24px, 600, 45px, $sec-btn);
          margin-bottom: 1rem;
        }
        .button-div {
          @include flex(flex, flex-start, center, row);
          margin: 2rem 0 0 0;
          button.pri-btn {
            padding: 0.8rem 2rem;
          }
        }
      }
    }
    &-description {
      img {
        height: 340px;
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  .paint {
    &-content {
      .paint-img {
        margin: 0 2rem 0 0;
        img {
          width: 450px;
          height: 450px;
        }
      }
      &-info {
        h3 {
          @include font(30px, 600, 45px, $sec-btn);
        }
        p {
          span:first-child {
            @include font(16px, 600, 24px, $nav-color);
          }
          span:last-child {
            @include font(16px, 400, 24px, $nav-color);
          }
        }
        .button-div {
          button.pri-btn {
            @include font(18px, 600, 27px, $white);
          }
        }
      }
    }
    &-more,
    &-contact {
      a.btn,
      a.btn {
        @include font(18px, 500, 36px, $sec-btn);
      }
    }
    &-description {
      .desc {
        @include flex(flex, space-between, center, row);
        margin: 0 0 7rem;
      }
      .desc:last-child {
        flex-direction: row-reverse;
        img {
          margin: 0 3rem 0 0;
        }
      }
      .desc-content {
        flex-basis: 60%;
      }
      h4 {
        @include font(30px, 600, 23px, $sec-btn);
        margin-bottom: 2rem;
      }
      p {
        @include font(18px, 400, 30px, $pri-color);
      }
      img {
        height: auto;
        flex-basis: 40%;
        margin: 0 0 0 3rem;
      }
    }
    &-disclaimer {
      text-align: center;
      width: 800px;
      margin: 7rem auto 0;
      h5 {
        @include font(30px, 600, 23px, $sec-btn);
      }
      p {
        @include font(18px, 400, 35px, $pri-color);
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
  .paint {
    &-description {
      h4 {
        @include font(40px, 600, 60px, $sec-btn);
      }
      img {
        margin: 0;
        flex-basis: 40%;
      }
    }
    &-disclaimer {
      text-align: center;
      width: 800px;
      h5 {
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
