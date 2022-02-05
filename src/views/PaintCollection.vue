<template lang="html">
  <the-header />
  <div class="paints routes">
    <div class="container">
      <div class="paints-content">
        <h2>Get ExpateX Paints from our Paint Collections</h2>
        <p>
          Creating an entirely new universe of possibilities to add value and
          bringing surfaces to life.
        </p>
      </div>
      <div class="paints-inner">
        <div class="paints-head">
          <h3>Special smart paints</h3>
        </div>
        <div class="paints-grid">
          <div class="paint" v-for="paint in paints" :key="paint.id">
            <img :src="require(`@/assets/img/${paint.thumbnail}`)" />
            <div class="paint-body">
              <h3>{{ paint.name }}</h3>
              <p>{{ truncateText(paint.desc) }}</p>
              <div class="flex-button">
                <button class="btn" @click="viewPaint(paint.id)">
                  View Details
                </button>
                <button
                  class="pri-btn"
                  @click="$router.push({ name: 'color-guide' })"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="paints-more">
        <button class="btn">View More</button>
      </div>
    </div>
  </div>
  <div class="paints second-paint">
    <div class="container">
      <div class="paints-inner">
        <div class="paints-head">
          <h3>Decorative Finish</h3>
        </div>
        <div class="paints-grid">
          <div class="paint" v-for="paint in paints" :key="paint.id">
            <img :src="require(`@/assets/img/${paint.thumbnail}`)" />
            <div class="paint-body">
              <h3>{{ paint.name }}</h3>
              <p>{{ truncateText(paint.desc) }}</p>
              <div class="flex-button">
                <button class="btn" @click="viewPaint(paint.id)">
                  View Details
                </button>
                <button
                  class="pri-btn"
                  @click="$router.push({ name: 'color-guide' })"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="paints-more">
        <button class="btn">View More</button>
      </div>
    </div>
  </div>
  <div class="paints routes">
    <div class="container">
      <div class="paints-inner">
        <div class="paints-head">
          <h3>Industrial Coating</h3>
        </div>
        <div class="paints-grid">
          <div class="paint" v-for="paint in paints" :key="paint.id">
            <img :src="require(`@/assets/img/${paint.thumbnail}`)" />
            <div class="paint-body">
              <h3>{{ paint.name }}</h3>
              <p>{{ truncateText(paint.desc) }}</p>
              <div class="flex-button">
                <button class="btn" @click="viewPaint(paint.id)">
                  View Details
                </button>
                <button
                  class="pri-btn"
                  @click="$router.push({ name: 'color-guide' })"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="paints-more">
        <button class="btn">View More</button>
      </div>
    </div>
  </div>
  <home-gallery />
  <home-testimonies />
  <the-footer />
</template>
<script>
import TheHeader from "@/components/navbar/TheHeader.vue";
import HomeGallery from "@/components/home/HomeGallery.vue";
import HomeTestimonies from "@/components/home/HomeTestimonies.vue";
import TheFooter from "@/components/navbar/TheFooter.vue";
import { mapGetters } from "vuex";

export default {
  name: "PaintCollection",
  components: {
    TheHeader,
    HomeGallery,
    HomeTestimonies,
    TheFooter,
  },
  computed: {
    ...mapGetters(["paints"]),
  },
  methods: {
    viewPaint(id) {
      this.$router.push({ name: "paint", params: { id: id } });
    },
    truncateText(value) {
      return value.substring(0, 50) + "...";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/style.scss";
.paints {
  background: $white;
  padding: 2rem 0 10rem;
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
  &-grid {
    .paint {
      border-radius: 18px;
      margin: 1rem 0.1rem 2rem;
      box-shadow: rgba(0, 0, 0, 0.1) 1px 4px 6px -3px,
        rgba(0, 0, 0, 0.06) 1px 2px 4px -3px;
      background: $white;
      img {
        height: 160px;
        object-fit: cover;
        transition: all 0.3s ease;
      }
      h3 {
        @include font(13.6px, 600, 21px, $nav-color);
        padding-bottom: 0.5rem;
      }
      p {
        @include font(12px, 400, 18px, $pri-color);
      }
      &-body {
        padding: 1rem;
      }
      .flex-button {
        margin-top: 0.5rem;
        @include flex(flex, flex-end, center, row);
        button:first-child {
          margin-right: 1rem;
          padding: 0;
          background: none;
          @include font(11px, 600, 17px, $pri-btn);
        }
        button:last-child {
          @include font(11px, 600, 17px, $white);
        }
      }
    }
  }
  &-inner {
    .paints-head h3 {
      @include font(18px, 600, 44px, $sec-btn);
      margin-bottom: 1.5rem;
    }
  }
  &-more {
    text-align: center;
    position: absolute;
    z-index: 100;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    &::after {
      position: absolute;
      content: "";
      top: 50px;
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

.second-paint {
  background: #f8f8ff;
  padding: 5rem 0 10rem;
}

@media screen and (min-width: 700px) {
  .paints {
    &-grid {
      @include grid(grid, 2, 1fr, 2rem, 1rem);
      .paint {
        margin: 0.1rem;
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  .paints {
    &-content {
      width: 700px;
      margin: auto auto 5rem;
      h2 {
        @include font(30px, 600, 50px, $sec-btn);
      }
      p {
        @include font(18px, 400, 30px, $pri-color);
        width: 580px;
        margin: 1rem auto;
      }
    }
    &-grid {
      @include grid(grid, 3, 1fr, 1rem, 1rem);
    }
    &-inner {
      .paints-head h3 {
        @include font(25px, 600, 44px, $sec-btn);
      }
    }
    &-more {
      button.btn {
        @include font(16px, 500, 30px, $sec-btn);
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .paints {
    &-grid {
      @include grid(grid, 4, 1fr, 1rem, 1rem);
    }
  }
}

@media screen and (min-width: 1400px) {
  .paints {
    &-content {
      h2 {
        @include font(40px, 600, 60px, $sec-btn);
      }
      p {
        @include font(28px, 400, 44px, $pri-color);
      }
    }
    &-more {
      button.btn {
        @include font(18px, 500, 30px, $sec-btn);
      }
    }
  }
}
</style>
