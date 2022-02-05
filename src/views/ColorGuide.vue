<template>
  <the-header />
  <div class="color-guide">
    <div class="container">
      <div class="color-guide-content routes">
        <div class="color-tabs">
          <div class="color-tab" v-for="(color, index) in colors" :key="index">
            <div
              class="color"
              :class="{ 'active-color': color.active }"
              :style="{ backgroundColor: color.code }"
            ></div>
            <p>{{ color.name }}</p>
          </div>
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
        <p>Finest quality, longer lasting finish</p>
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
      colors: [
        {
          code: "#F5F3E4",
          name: "Aspen Whisper",
          active: true,
        },
        {
          code: "#F3EFDB",
          name: "Icy Wind",
          active: false,
        },
        {
          code: "#D1A678",
          name: "Sienna",
          active: false,
        },
        {
          code: "#688399",
          name: "Solent Blue",
          active: false,
        },
        {
          code: "#EBC9A2",
          name: "Peach",
          active: false,
        },
        {
          code: "#9AB174",
          name: "Leaf Green",
          active: true,
        },
        {
          code: "#E5CFC1",
          name: "Rose Beige",
          active: false,
        },
        {
          code: "#F4CF83",
          name: "Barley",
          active: false,
        },
        {
          code: "#F0DFC4",
          name: "Magnolia",
          active: false,
        },
        {
          code: "#F2E5CB",
          name: "Off white",
          active: false,
        },
        {
          code: "#CAB596",
          name: "Midstone",
          active: false,
        },
        {
          code: "#DE8A7C",
          name: "Pale Vermilion",
          active: false,
        },
        {
          code: "#E3EBCC",
          name: "Peppermint",
          active: false,
        },
        {
          code: "#CE505C",
          name: "Cinnabar",
          active: false,
        },
        {
          code: "#CED0DB",
          name: "Lilac",
          active: false,
        },
        {
          code: "#E79E8A",
          name: "Rose",
          active: false,
        },
        {
          code: "#EBD7BB",
          name: "Light Cream",
          active: false,
        },
        {
          code: "#F3F1DA",
          name: "Lime Spary",
          active: false,
        },
        {
          code: "#DFDDCF",
          name: "Silver Lining",
          active: false,
        },
        {
          code: "#98674D",
          name: "Rich Brown",
          active: false,
        },
        {
          code: "#D4DEE0",
          name: "Harmony",
          active: false,
        },
        {
          code: "#A65058",
          name: "Etruscan Red",
          active: false,
        },
        {
          code: "#F0EDDE",
          name: "Mellow Tint",
          active: false,
        },
        {
          code: "#E7C894",
          name: "Rich Cream",
          active: false,
        },
        {
          code: "#E7C183",
          name: "Cream 30-40",
          active: false,
        },
        {
          code: "#DDD3C7",
          name: "Light Taupe",
          active: false,
        },
        {
          code: "#D3B28F",
          name: "Hazel Brown",
          active: false,
        },
        {
          code: "#78706A",
          name: "Dark Mushroom",
          active: false,
        },
        {
          code: "#CDCDA0",
          name: "Spray Green",
          active: false,
        },
        {
          code: "#C0DECE",
          name: "Light Blue",
          active: false,
        },
        {
          code: "#9B906B",
          name: "Lovat Green",
          active: false,
        },
        {
          code: "#A73D47",
          name: "Reef Red",
          active: false,
        },
        {
          code: "#BFBFBF",
          name: "Silver Grey",
          active: false,
        },
        {
          code: "#C1BEB8",
          name: "Pale Grey",
          active: false,
        },
        {
          code: "#9C8D79",
          name: "Olive Drab",
          active: false,
        },
        {
          code: "#DB7C54",
          name: "Minium",
          active: false,
        },
        {
          code: "#3F478E",
          name: "Expatex Blue",
          active: false,
        },
        {
          code: "#F4F0CB",
          name: "Soft Yellow",
          active: false,
        },
        {
          code: "#686A7E",
          name: "Dark Gray",
          active: false,
        },
        {
          code: "#3D634C",
          name: "Coke Red",
          active: false,
        },
        {
          code: "#E5CFC1",
          name: "Symphony",
          active: false,
        },
        {
          code: "#DC665D",
          name: "Lekki Red",
          active: false,
        },
        {
          code: "#D3A55A",
          name: "Orpiment",
          active: false,
        },
        {
          code: "#4FABCA",
          name: "Lagoon Blue",
          active: false,
        },
        {
          code: "#F4B439",
          name: "Golden Yellow",
          active: false,
        },
        {
          code: "#3B5799",
          name: "American Blue",
          active: false,
        },
        {
          code: "#D6B288",
          name: "Calabash",
          active: false,
        },
        {
          code: "#A0897D",
          name: "Coconut",
          active: false,
        },
        {
          code: "#B79E90",
          name: "Sierra",
          active: false,
        },
        {
          code: "#DDAC9A",
          name: "Dusky Pink",
          active: false,
        },
        {
          code: "#007DBE",
          name: "Brilliant Blue",
          active: false,
        },
        {
          code: "#DC9972",
          name: "Bamboo",
          active: false,
        },
        {
          code: "#E0CDAD",
          name: "Beige",
          active: false,
        },
        {
          code: "#63605E",
          name: "Bitter Chocolate",
          active: false,
        },
        {
          code: "#E3ECDF",
          name: "Maintain Air",
          active: false,
        },
        {
          code: "#F8F3D3",
          name: "Warm Sun",
          active: false,
        },
        {
          code: "#E8A6AB",
          name: "Strawberry",
          active: false,
        },
        {
          code: "#CA7870",
          name: "Russet",
          active: false,
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "@/scss/style.scss";
.color-guide {
  padding: 3rem 0;
  &-content {
    margin-bottom: 7rem;
  }
}
.color-tabs {
  margin: 1rem 0;
  .color-tab {
    margin-bottom: 1rem;
  }
  .color {
    width: 100%;
    height: 60px;
    margin-bottom: 0.5rem;
    position: relative;
    transition: ease all 0.5s;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 24px 48px rgba(196, 196, 196, 0.6);
    }
  }
  p {
    @include font(10px, 500, 15px, $pri-color);
  }
}
.active-color.color::after {
  position: absolute;
  content: "\2713";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @include flex(flex, center, center, row);
  @include font(30px, 500, 15px, $white);
  z-index: 10;
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
  .color-tabs {
    margin: 0;
    .color-tab {
      margin: 0;
    }
    @include grid(grid, 8, 1fr, 1rem, 1rem);
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
  .color-tabs {
    .color {
      width: 100px;
      height: 100px;
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
