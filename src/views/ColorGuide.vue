<template>
  <the-header />
  <div class="color-guide">
    <div class="container">
      <div class="color-guide-content routes">
        <div class="color-tabs">
          <div class="color-tab" v-for="(color, index) in colors" :key="index">
            <div class="color" :style="{ backgroundColor: color.code }"></div>
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
          <button
            class="pri-btn"
            @click="$router.push({ name: 'paint-collection' })"
          >
            Get Expatex Paint
          </button>
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
        },
        {
          code: "#F3EFDB",
          name: "Icy Wind",
        },
        {
          code: "#D1A678",
          name: "Sienna",
        },
        {
          code: "#688399",
          name: "Solent Blue",
        },
        {
          code: "#EBC9A2",
          name: "Peach",
        },
        {
          code: "#9AB174",
          name: "Leaf Green",
        },
        {
          code: "#E5CFC1",
          name: "Rose Beige",
        },
        {
          code: "#F4CF83",
          name: "Barley",
        },
        {
          code: "#F0DFC4",
          name: "Magnolia",
        },
        {
          code: "#F2E5CB",
          name: "Off white",
        },
        {
          code: "#CAB596",
          name: "Midstone",
        },
        {
          code: "#DE8A7C",
          name: "Pale Vermilion",
        },
        {
          code: "#E3EBCC",
          name: "Peppermint",
        },
        {
          code: "#CE505C",
          name: "Cinnabar",
        },
        {
          code: "#CED0DB",
          name: "Lilac",
        },
        {
          code: "#E79E8A",
          name: "Rose",
        },
        {
          code: "#EBD7BB",
          name: "Light Cream",
        },
        {
          code: "#F3F1DA",
          name: "Lime Spary",
        },
        {
          code: "#DFDDCF",
          name: "Silver Lining",
        },
        {
          code: "#98674D",
          name: "Rich Brown",
        },
        {
          code: "#D4DEE0",
          name: "Harmony",
        },
        {
          code: "#A65058",
          name: "Etruscan Red",
        },
        {
          code: "#F0EDDE",
          name: "Mellow Tint",
        },
        {
          code: "#E7C894",
          name: "Rich Cream",
        },
        {
          code: "#E7C183",
          name: "Cream 30-40",
        },
        {
          code: "#DDD3C7",
          name: "Light Taupe",
        },
        {
          code: "#D3B28F",
          name: "Hazel Brown",
        },
        {
          code: "#78706A",
          name: "Dark Mushroom",
        },
        {
          code: "#CDCDA0",
          name: "Spray Green",
        },
        {
          code: "#C0DECE",
          name: "Light Blue",
        },
        {
          code: "#9B906B",
          name: "Lovat Green",
        },
        {
          code: "#A73D47",
          name: "Reef Red",
        },
        {
          code: "#BFBFBF",
          name: "Silver Grey",
        },
        {
          code: "#C1BEB8",
          name: "Pale Grey",
        },
        {
          code: "#9C8D79",
          name: "Olive Drab",
        },
        {
          code: "#DB7C54",
          name: "Minium",
        },
        {
          code: "#3F478E",
          name: "Expatex Blue",
        },
        {
          code: "#F4F0CB",
          name: "Soft Yellow",
        },
        {
          code: "#686A7E",
          name: "Dark Gray",
        },
        {
          code: "#3D634C",
          name: "Coke Red",
        },
        {
          code: "#E5CFC1",
          name: "Symphony",
        },
        {
          code: "#DC665D",
          name: "Lekki Red",
        },
        {
          code: "#D3A55A",
          name: "Orpiment",
        },
        {
          code: "#4FABCA",
          name: "Lagoon Blue",
        },
        {
          code: "#F4B439",
          name: "Golden Yellow",
        },
        {
          code: "#3B5799",
          name: "American Blue",
        },
        {
          code: "#D6B288",
          name: "Calabash",
        },
        {
          code: "#A0897D",
          name: "Coconut",
        },
        {
          code: "#B79E90",
          name: "Sierra",
        },
        {
          code: "#DDAC9A",
          name: "Dusky Pink",
        },
        {
          code: "#007DBE",
          name: "Brilliant Blue",
        },
        {
          code: "#DC9972",
          name: "Bamboo",
        },
        {
          code: "#E0CDAD",
          name: "Beige",
        },
        {
          code: "#63605E",
          name: "Bitter Chocolate",
        },
        {
          code: "#E3ECDF",
          name: "Maintain Air",
        },
        {
          code: "#F8F3D3",
          name: "Warm Sun",
        },
        {
          code: "#E8A6AB",
          name: "Strawberry",
        },
        {
          code: "#CA7870",
          name: "Russet",
        },
      ],
    };
  },
  methods: {},
  mounted() {
    const colors = document.querySelectorAll(".color");
    colors.forEach((color) => {
      color.addEventListener("click", () => {
        const openItem = document.querySelector(".active-color");
        toggleItem(color);
        if (openItem && openItem !== color) {
          toggleItem(openItem);
        }
      });
    });
    const toggleItem = (color) => {
      if (color.classList.contains("active-color")) {
        color.classList.remove("active-color");
      } else {
        color.classList.add("active-color");
      }
    };
  },
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
    background: linear-gradient(0deg, #de8a7c, #de8a7c);
    border-radius: 60px 0px 60px 60px;
    @include flex(flex, space-between, flex-start, column);
    padding: 3rem;
    p {
      @include font(18px, 600, 48px, $white);
    }
    span {
      @include font(80px, 600, 48px, $white);
      cursor: pointer;
      transition: transform ease 0.5s;
      &:hover {
        transform: scale(1.1);
      }
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
    @include grid(grid, 6, 1fr, 1rem, 1rem);
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
    @include grid(grid, 8, 1fr, 1rem, 1rem);
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
