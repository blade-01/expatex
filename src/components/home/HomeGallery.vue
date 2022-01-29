<template lang="html">
  <div class="wrapper">
    <div class="gallery">
      <div class="container">
        <div class="gallery-content">
          <h2>ExpateX Gallery</h2>
          <p>
            Ullamco pariatu nostrud. Dolor eiusmod occaecat excepteur ocariatur
            quip. Do amet tempor sunt cillum n
          </p>
        </div>
        <div class="see-more">
          <button class="btn">See More</button>
        </div>
        <div class="gallery-grid">
          <div class="gall" v-for="image in images" :key="image">
            <img :src="require(`@/assets/img/${image.src}`)" />
          </div>
        </div>
      </div>
    </div>
    <div class="get-expatex">
      <div class="container">
        <div class="get-expatex-content">
          <h3>ExpateX for Buildings and Structures</h3>
          <p>Your No. 1 Paint for all buildings and structures</p>
          <a href="#paints" class="pri-btn">Get ExpateX Paint</a>
        </div>
        <img src="@/assets/img/get-expatex.png" alt="get_expatex" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeGallery",
  data() {
    return {
      images: [
        {
          src: "gal-01.png",
        },
        {
          src: "gal-03.png",
        },
        {
          src: "gal-02.png",
        },
        {
          src: "gal-04.png",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/style.scss";
.wrapper {
  background: $white;
  margin-bottom: 15rem;
}
.gallery {
  background: $white;
  padding: 5rem 0;
  position: relative;
  overflow: visible;
  &-content {
    text-align: left;
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
    column-count: 2;
    column-gap: 16px;
    img {
      margin-bottom: 8px;
    }
  }
  .see-more {
    @include flex(flex, flex-end, center, row);
    button.btn {
      background: none;
      text-decoration: underline;
      @include font(16px, 500, 30px, $sec-btn);
    }
  }
}
.get-expatex {
  position: relative;
  overflow: visible;
  padding: 5rem 0 13rem;
  background: $sec-btn;
  text-align: center;
  h3 {
    @include font(24px, 700, 30px, $white);
  }
  p {
    @include font(14px, 600, 26px, $white);
    margin: 1rem 0;
  }
  a.pri-btn {
    @include font(20px, 500, 30px, $white);
    padding: 0.8rem 1.5rem;
  }
  img {
    position: absolute;
    bottom: -180px;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    height: 350px;
    z-index: 10;
  }
}

@media screen and (min-width: 1000px) {
  .gallery {
    &-content {
      width: 700px;
      margin: 0 0 1rem;
      h2 {
        @include font(30px, 600, 50px, $sec-btn);
      }
      p {
        @include font(20px, 400, 30px, $pri-color);
      }
    }
    .see-more {
      button.btn {
        @include font(18px, 500, 30px, $sec-btn);
      }
    }
  }
  .get-expatex {
    padding: 5rem 0;
    background: $sec-btn;
    text-align: left;
    margin-top: 8rem;
    & .container {
      @include grid(grid, 2, 1fr, 2rem, 2rem);
    }
    &-content {
      margin-left: calc(100% - 486px);
      position: relative;
      left: 486px;
    }
    h3 {
      @include font(35px, 700, 50px, $white);
    }
    p {
      @include font(18px, 600, 30px, $white);
      margin: 1rem 0;
    }
    a.pri-btn {
      @include font(16px, 500, 27px, $white);
      padding: 0.7rem 3rem;
    }
    img {
      position: absolute;
      bottom: 0px;
      left: inherit;
      top: 50%;
      transform: translateY(-50%);
      width: 400px;
      height: 547px;
      z-index: 10;
    }
  }
}
@media screen and (min-width: 1200px) {
  .get-expatex {
    img {
      width: 486px;
    }
  }
}

@media screen and (min-width: 1400px) {
  .gallery {
    &-content {
      h2 {
        @include font(40px, 600, 60px, $sec-btn);
      }
      p {
        @include font(28px, 400, 44px, $pri-color);
      }
    }
  }
  .get-expatex {
    h3 {
      @include font(40px, 700, 55px, $white);
    }
    p {
      @include font(24px, 600, 36px, $white);
      margin: 1rem 0;
    }
    a.pri-btn {
      @include font(18px, 500, 27px, $white);
    }
  }
}
</style>
