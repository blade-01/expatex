<template lang="html">
  <div class="paints">
    <div class="container">
      <div class="paints-content">
        <h2>Get ExpateX Paints for Your Walls</h2>
        <p>
          Ullamco pariatu nostrud. Dolor eiusmod occaecat excepteur ocariatur
          quip. Do amet tempor sunt cillum n
        </p>
      </div>
      <div class="paints-grid">
        <div class="paint" v-for="paint in paints" :key="paint.id">
          <img :src="require(`@/assets/img/${paint.thumbnail}`)" />
          <div class="paint-body">
            <h3>{{ paint.name }}</h3>
            <p>{{ paint.name }}</p>
            <div class="flex-button">
              <button class="btn">View Details</button>
              <button class="pri-btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div class="paints-more">
        <button class="btn">See More</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "HomePaints",
  computed: {
    ...mapGetters(["paints"]),
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/style.scss";
.paints {
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
      }
      h3 {
        @include font(14px, 600, 21px, $nav-color);
        padding-bottom: 0.5rem;
      }
      p {
        @include font(12px, 400, 18px, $pri-color);
      }
      &-body {
        padding: 1rem;
      }
      .flex-button {
        @include flex(flex, flex-end, center, row);
        button:first-child {
          margin-right: 1rem;
          background: none;
          @include font(11px, 600, 17px, $pri-btn);
        }
        button:last-child {
          @include font(11px, 600, 17px, $white);
        }
      }
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
      @include font(20px, 500, 30px, $sec-btn);
    }
  }
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
        @include font(20px, 400, 30px, $pri-color);
      }
    }
    &-grid {
      @include grid(grid, 4, 1fr, 1rem, 2rem);
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
  }
}
</style>
