<template lang="html">
  <div class="main">
    <div class="container">
      <h1>Smart, Contemporary, Value Adding Paints</h1>
      <a href="#paints" class="pri-btn">Get ExpateX Paint</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeMain",
};
</script>
<style lang="scss" scoped>
@import "@/scss/style.scss";
.main {
  background: url("../../assets/img/main-bg.png") no-repeat center center/cover;
  display: flex;
  margin-top: 78px;
  height: calc(100vh - 78px);
  width: 100%;
  & .container {
    @include flex(flex, center, center, column);
    text-align: center;
    h1 {
      @include font(30px, 700, 42px, $sec-btn);
    }
    p {
      @include font(18px, 500, 25px, $sec-color);
      margin: 1.5rem 0;
    }
    a.pri-btn {
      @include font(18px, 600, 24px, $white);
      padding: 1rem 1.5rem;
      margin-top: 3rem;
    }
  }
}

@media screen and (min-width: 700px) {
  .main {
    & .container {
      width: 400px;
    }
  }
}

@media screen and (min-width: 1000px) {
  .main {
    & .container {
      width: 700px;
      h1 {
        @include font(45px, 700, 74px, $sec-btn);
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
}

@media screen and (min-width: 1400px) {
  .main {
    & .container {
      width: 900px;
      h1 {
        @include font(64px, 700, 84px, $sec-btn);
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
}
</style>
