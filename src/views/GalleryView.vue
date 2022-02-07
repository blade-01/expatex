<template>
  <the-header />
  <div class="main">
    <div class="container">
      <h3>ExpateX Paints Photo Gallery</h3>
    </div>
  </div>
  <div class="wrapper">
    <div class="container">
      <div class="card-grid">
        <div class="grid-one">
          <img src="@/assets/img/img-08.jpg" alt="rec" />
          <div class="text">
            <h3>Always be Inspired</h3>
          </div>
          <img src="@/assets/img/rec-09.jpg" alt="rec" />
        </div>
        <div class="grid-two">
          <div class="card" v-for="image in images" :key="image">
            <img
              :src="require(`@/assets/img/${image.src}`)"
              alt="gallery_image"
            />
          </div>
        </div>
      </div>
      <div class="card-wraps">
        <h3>Interior Paintings</h3>
        <div class="cards">
          <div class="card" v-for="interior in interiors" :key="interior">
            <img
              :src="require(`@/assets/img/${interior.src}`)"
              alt="gallery_image"
            />
          </div>
        </div>
      </div>
      <div class="card-wraps">
        <h3>Exterior Paintings</h3>
        <div class="cards">
          <div class="card" v-for="exterior in exteriors" :key="exterior">
            <img
              :src="require(`@/assets/img/${exterior.src}`)"
              alt="gallery_image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <home-testimonies />
  <the-footer />
</template>

<script>
import TheHeader from "@/components/navbar/TheHeader.vue";
import HomeTestimonies from "@/components/home/HomeTestimonies.vue";
import TheFooter from "@/components/navbar/TheFooter.vue";
export default {
  name: "HomeView",
  components: {
    TheHeader,
    HomeTestimonies,
    TheFooter,
  },
  data() {
    return {
      images: [
        {
          src: "img-10.jpg",
        },
        {
          src: "img-06.jpg",
        },
        {
          src: "img-03.jpg",
        },
        {
          src: "img-04.jpg",
        },
      ],
      interiors: [
        {
          src: "img-01.jpg",
        },
        {
          src: "img-02.jpg",
        },
        {
          src: "img-03.jpg",
        },
        {
          src: "img-04.jpg",
        },
        {
          src: "img-05.jpg",
        },
        {
          src: "img-06.jpg",
        },
      ],
      exteriors: [
        {
          src: "ext-01.jpg",
        },
        {
          src: "rec-07.jpg",
        },
        {
          src: "ext-06.jpg",
        },
        {
          src: "ext-03.jpg",
        },
        {
          src: "rec-02.jpg",
        },
        {
          src: "ext-05.jpg",
        },
        {
          src: "rec-17.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/style.scss";
.main {
  background: url("../assets/img/gallery.png") no-repeat center center/cover;
  display: flex;
  margin-top: 78px;
  height: calc(100vh - 78px);
  width: 100%;
  & .container {
    @include flex(flex, center, center, column);
    text-align: center;
    h3 {
      @include font(30px, 700, 42px, $pri-btn);
      background: rgba(255, 255, 255, 0.78);
      padding: 0.5rem 2rem;
    }
    p {
      @include font(18px, 500, 25px, $sec-color);
      margin: 1.5rem 0;
    }
    a.pri-btn {
      @include font(18px, 600, 24px, $white);
      padding: 1rem 1.5rem;
    }
  }
}

.wrapper {
  margin: 3rem 0 0;
}
.card-wraps {
  h3 {
    @include font(18px, 600, 24px, $nav-color);
    margin-bottom: 1.5rem;
  }
}
.card-grid {
  margin-bottom: 3rem;
  .text {
    height: 200px;
    background: $white;
    @include flex(flex, center, center, row);
  }
  h3 {
    @include font(18px, 600, 24px, $sec-btn);
  }
  img {
    margin-bottom: 0.75rem;
  }
}
.cards {
  & .card {
    margin-bottom: 0.75rem;
    position: relative;
  }
  & .card img {
    width: 100%;
    height: 100%;
  }
}
.card-wraps,
.card-grid {
  margin-bottom: 5rem;
}

@media screen and (min-width: 700px) {
  .main {
    & .container {
      width: 400px;
    }
  }
  .card-grid {
    .text {
      height: auto;
    }
    .grid-one {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      gap: 10px;
    }
    .grid-two {
      @include grid(grid, 4, 1fr, 10px, 10px);
    }
    img {
      margin-bottom: 10px;
    }
  }
  .cards {
    column-count: 3;
    column-gap: 8px;
    .card {
      margin-bottom: 4px;
      width: 100%;
      height: 100%;
    }
  }
}
img {
  border-radius: 10px;
}
@media screen and (min-width: 1000px) {
  .main {
    & .container {
      width: 700px;
      h3 {
        @include font(40px, 700, 74px, $pri-btn);
      }
      p {
        @include font(25px, 500, 45px, $sec-color);
      }
      a.pri-btn {
        @include font(16px, 600, 27px, $white);
        padding: 0.9rem 2rem;
      }
    }
  }
  .card-grid {
    h3 {
      @include font(25px, 600, 24px, $sec-btn);
    }
  }
  .card-wraps {
    h3 {
      @include font(25px, 600, 24px, $nav-color);
    }
  }
}

@media screen and (min-width: 1400px) {
  .main {
    & .container {
      width: 900px;
      h3 {
        @include font(48px, 700, 72px, $sec-btn);
      }
      p {
        @include font(30px, 500, 45px, $sec-color);
      }
      a.pri-btn {
        @include font(18px, 600, 27px, $white);
        padding: 0.9rem 3rem;
      }
    }
  }
  .card-grid {
    h3 {
      @include font(46px, 600, 54px, $sec-btn);
    }
  }
  .card-wraps {
    h3 {
      @include font(46px, 600, 54px, $nav-color);
    }
  }
}
</style>
