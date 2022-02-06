<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo-nav">
          <router-link to="/"
            ><img src="@/assets/img/logo.png" alt="logo"
          /></router-link>
          <nav class="nav" :class="{ open: open }">
            <ul>
              <li v-for="(route, index) in routes" :key="index">
                <router-link :to="{ name: route.name }">{{
                  route.title
                }}</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex-nav">
          <div class="log-sign">
            <transition name="fade">
              <div class="input-field" v-show="searchBar">
                <input type="search" placeholder="Search..." />
              </div>
            </transition>
            <span
              class="mdi mdi-magnify"
              @click="searchBar = !searchBar"
            ></span>
            <ul>
              <li>
                <router-link :to="{ name: 'contact-us' }">Login</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'contact-us' }">Sign Up</router-link>
              </li>
            </ul>
          </div>
          <div
            @click="openNav"
            class="hamburger hide-on-lg"
            :class="{ change: open }"
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderTag",
  data() {
    return {
      open: false,
      searchBar: false,
      routes: [
        {
          name: "home",
          title: "Home",
        },
        {
          name: "color-guide",
          title: "Colour Guide",
        },
        {
          name: "contact-us",
          title: "Contact Us",
        },
        {
          name: "paint-collection",
          title: "Paint Collection",
        },
      ],
    };
  },
  methods: {
    openNav() {
      this.open = !this.open;
    },
  },
  mounted() {
    this.$router.beforeEach((from, to, next) => {
      this.open = false;
      next();
    });
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/style.scss";
.header {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 78px;
  background: $white;
  display: flex;
  &-content {
    @include flex(flex, space-between, center, row);
  }
}
img {
  width: 103px;
}
.hamburger {
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 30px;
  height: 20px;
  z-index: 10;
  & > div {
    height: 2px;
    width: 30px;
    background: $pri-color;
    margin: 0.1rem 0;
    transition: transform ease-in-out 0.4s;
    cursor: pointer;
  }
}
.change.hamburger > div {
  background: $white;
}
.change.hamburger > div:nth-child(1) {
  transform: translate(1px, 5px) rotate(45deg);
}
.change.hamburger > div:nth-child(2) {
  opacity: 0;
}
.change.hamburger > div:nth-child(3) {
  transform: translate(0px, -6px) rotate(-45deg);
}
.open.nav {
  top: 0;
}
.nav {
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 300px;
  background: $sec-btn;
  transition: all ease 0.25s;
  & ul {
    margin-top: 100px;
    list-style: none;
  }
  & ul li {
    display: block;
    padding: 0;
    margin: 0;
  }
  & a {
    display: block;
    text-decoration: none;
    @include font(18px, 500, 30px, $white);
    padding: 1rem;
    text-transform: capitalize;
  }
  & a.router-link-exact-active {
    font-weight: bold;
    color: $pri-btn;
    background: $white;
  }
}
.flex-nav {
  @include flex(flex, space-between, center, row);
  .input-field {
    padding: 1rem;
    background: $white;
    position: absolute;
    top: 0;
    margin-top: 78px;
    left: 0;
    width: 100%;
  }
}
.log-sign {
  @include flex(flex, space-between, center, row);
  ul {
    display: none;
  }
  span {
    margin-right: 0.8rem;
    @include font(18px, 500, 21px, $nav-color);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (min-width: 1000px) {
  %after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    border-radius: 20px;
    transform: translateX(-50%);
    height: 3.5px;
    background: $pri-btn;
    transition: width 0.5s ease-in-out;
  }
  .hamburger {
    display: none;
  }
  .logo-nav {
    @include flex(flex, space-between, center, row);
    img {
      margin-right: 2rem;
    }
  }
  .nav {
    position: relative;
    width: auto;
    height: auto;
    background: none;
    z-index: 0;
    top: 0;
    display: block;
    margin: 0;
    & ul {
      padding: 0;
      margin: 0;
      display: block;
    }
    & ul li {
      display: inline;
    }
    & a {
      @include font(14px, 500, 21px, $nav-color);
      display: inline;
      padding: 0 1rem 0.45rem;
      position: relative;
      transition: all ease 0.5s;
      &::after {
        @extend %after;
        width: 0;
      }
      &:hover::after {
        width: 20px;
      }
      &:hover {
        color: $pri-btn;
      }
    }
    & a.router-link-exact-active {
      color: $pri-btn;
      background: none;
      position: relative;
      &::after {
        @extend %after;
        width: 20px;
      }
    }
  }
  .flex-nav {
    .input-field {
      display: block;
      position: relative;
      top: 0;
      left: 0;
      padding: 0;
      background: none;
      margin: 0;
      width: auto;
      input {
        width: 280px;
        margin: 0;
      }
    }
  }
  .log-sign {
    span {
      margin: 0 0.8rem 0;
    }
    & ul {
      @include flex(flex, space-between, center, row);
      border: solid 1px $sec-btn;
      border-radius: 8px;
      list-style: none;
      background: $white;
      padding: 0.4rem 0;
      li a {
        padding: 0.6rem 0.7rem;
        border-radius: 8px;
        @include font(14px, 500, 21px, $black);
      }
      li:first-child a {
        background: transparent;
        color: $sec-btn;
      }
      li:last-child a {
        background: $sec-btn;
        color: $white;
      }
    }
  }
}
</style>
