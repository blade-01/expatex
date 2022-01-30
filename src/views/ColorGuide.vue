<template>
  <the-header />
  <div class="color-guide">
    <div class="container">
      <div class="color-guide-content routes">
        <div class="colors">
          <div
            class="color-wrap"
            v-for="(select, index) in selectors"
            :key="index"
          >
            <div
              :class="`color color-${index}`"
              :style="{ backgroundColor: select.color }"
              @click="addAfterColor(select.color)"
            >
              <div class="after" v-show="select.active"></div>
            </div>
          </div>
        </div>
        <div class="color-tabs">
          <div
            class="color-tab"
            v-for="(i, index) in 64"
            :key="index"
            :class="`color-${index}`"
            @click="activateColor(index)"
          ></div>
        </div>
      </div>
      <div class="expatex-wrap">
        <div class="get-color">
          <p>Colour name</p>
          <span class="mdi mdi-arrow-right-circle-outline"></span>
        </div>
        <div class="get-expatex">
          <h3>Go ahead and get Expatex paints in this colour</h3>
          <button class="pri-btn">Get Expatex Paint</button>
        </div>
      </div>
      <div class="expatex">
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
  data() {
    return {
      selectors: [
        {
          color: "#FF0000",
          active: true,
        },
        {
          color: "#0000FF",
          active: false,
        },
        {
          color: "#0EF385",
          active: false,
        },
        {
          color: "#FFFF00",
          active: false,
        },
        {
          color: "#FFA500",
          active: false,
        },
        {
          color: "#C4C4C4",
          active: false,
        },
      ],
      after: "#FF0000",
    };
  },
  methods: {
    addAfterColor(color) {
      this.selectors.forEach((select) => {
        if (select.color === color && select.active === false) {
          this.after = color;
          select.active = true;
        } else {
          select.active = false;
        }
      });
    },
    activateColor(id) {
      const colorId = document.querySelector(`.color-${id}`);
      colorId.classList.toggle("active-color");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/style.scss";
.color-guide {
  padding: 3rem 0;
}
.colors {
  @include flex(flex, center, center, row);
  .color {
    width: 60px;
    height: 60px;
    position: relative;
    overflow: visible;
  }
  .color-wrap {
    margin-bottom: 1rem;
    .after {
      position: absolute;
      bottom: -30px;
      right: 0px;
      border: 15px solid transparent;
      border-top-color: v-bind(after);
    }
  }
}
.color-tabs {
  margin: 1rem 0;
  .color-tab {
    width: 100%;
    height: 60px;
    margin-bottom: 1rem;
    background: v-bind(after);
    opacity: 0.2;
  }
}

.active-color.color-tab {
  opacity: 1 !important;
}

.expatex-wrap {
  margin: 3rem 0;
  .get-color {
    margin: 4rem 0 2rem;
    width: 244px;
    height: 254px;
    background: linear-gradient(0deg, #c02e2e, #c02e2e);
    border-radius: 60px 0px 60px 60px;
    @include flex(flex, space-between, flex-start, column);
    padding: 3rem;
    p {
      @include font(18px, 600, 48px, $white);
    }
    span {
      @include font(80px, 600, 48px, $white);
    }
  }

  .get-expatex {
    h3 {
      @include font(24px, 600, 34px, $nav-color);
    }
    button {
      @include font(18px, 600, 27px, $white);
      width: 100%;
      margin: 2rem 0 1rem;
    }
  }
}
.expatex {
  text-align: center;
  p {
    @include font(26px, 600, 39px, $nav-color);
  }
}

@media screen and (min-width: 700px) {
  .color-guide {
    &-content {
      @include grid(grid, 2, 1fr, 1rem, 1rem);
      grid-template-columns: 1fr 5fr;
    }
  }
  .colors {
    @include flex(flex, flex-start, flex-start, column);
    .color {
      width: 60px;
      height: 120px;
      position: relative;
      overflow: visible;
    }
    .color-wrap {
      margin-bottom: 1rem;
      .after {
        position: absolute;
        top: 0px;
        right: -20px;
        border: 20px solid transparent;
        border-top-color: v-bind(after);
      }
    }
  }
  .color-tabs {
    margin: 0;
    @include grid(grid, 8, 1fr, 1rem, 1rem);
    align-self: start;
  }
  .expatex-wrap {
    margin: 5rem 0;
    @include flex(flex, flex-start, center, row);
    .get-color {
      margin: 0 3rem 0 0;
    }

    .get-expatex {
      margin: 0;
      button {
        width: auto;
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  .color-guide {
    &-content {
      @include grid(grid, 2, 1fr, 1rem, 1rem);
      grid-template-columns: 1fr 5fr;
    }
  }
  .colors {
    .color {
      width: 60px;
      height: 120px;
    }
  }
  .color-tabs {
    .color-tab {
      width: 70px;
      height: 70px;
    }
  }
  .expatex {
    width: 700px;
    margin: 5rem auto 0;
    p {
      @include font(38px, 600, 60px, $nav-color);
    }
  }
  .expatex-wrap {
    .get-color {
      width: 300px;
      height: 300px;
    }
    .get-expatex {
      h3 {
        @include font(40px, 600, 50px, $nav-color);
        width: 700px;
        margin: auto;
      }
      button {
        @include font(18px, 600, 27px, $white);
        width: auto;
      }
    }
  }
}

@media screen and (min-width: 1400px) {
  .expatex {
    width: 850px;
    p {
      @include font(48px, 600, 72px, $pri-color);
    }
  }
}
</style>
