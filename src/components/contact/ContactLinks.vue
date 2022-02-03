<template>
  <div class="links">
    <div class="container">
      <div class="link">
        <span class="mdi mdi-home-outline"></span>
        <ul>
          <li>Address</li>
          <li>KM 38, Lagos-Abeokuta</li>
          <li>Expressway, Itori, Ewekoro</li>
          <li>Ogun State</li>
        </ul>
      </div>
      <div class="link">
        <span class="mdi mdi-email-outline"></span>
        <ul>
          <li>Email</li>
          <li>Reach out to us via our email address</li>
          <li>
            <a href="mailto:expatexpaint@gmail.com">expatexpaint@gmail.com</a>
          </li>
        </ul>
      </div>
      <div class="link">
        <span class="mdi mdi-phone-outline"></span>
        <ul>
          <li>Phone</li>
          <li><a href="tel:+234-8067860593">+234-8067860593</a></li>
          <li><a href="tel:+234-8022442439">+234-8022442439</a></li>
          <li><a href=""></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/style.scss";
.links {
  .link {
    margin: 0 0 2.5rem;
    text-align: left;
    ul {
      list-style: none;
      li {
        @include font(16px, 400, 20px, $pri-color);
        padding: 1rem 0 0;
      }
      li:first-child {
        @include font(16px, 600, 30px, $nav-color);
        margin-top: 0.1rem;
      }
    }
    span {
      @include font(20px, 500, 30px, #3e4095);
      border-radius: 8px;
      background: #f8f8ff;
      padding: 0.5rem 0.7rem;
    }
  }
}

@media screen and (min-width: 1000px) {
  .links {
    & .container {
      width: 750px;
      @include flex(flex, space-between, flex-start, row);
    }
  }
}

@media screen and (min-width: 1400px) {
  .links {
    & .container {
      width: 1100px;
      @include flex(flex, space-between, flex-start, row);
    }
    .link {
      margin: 0;
      ul {
        li {
          @include font(20px, 400, 44px, $pri-color);
        }
        li:first-child {
          @include font(20px, 600, 30px, $nav-color);
        }
      }
      span {
        @include font(23px, 500, 30px, #3e4095);
        border-radius: 8px;
        background: #f8f8ff;
        padding: 0.5rem 0.7rem;
      }
    }
  }
}
</style>
