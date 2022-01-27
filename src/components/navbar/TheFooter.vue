<template>
  <div class="footer" id="footer">
    <div class="container">
      <div class="footer-content">
        <ul>
          <li>Quick Links</li>
          <li v-for="route in routes" :key="route">
            <router-link :to="{ name: route.name }">{{
              route.title
            }}</router-link>
          </li>
        </ul>
        <ul>
          <li>Expatex</li>
          <li v-for="expat in expatex" :key="expat">
            <a href="#">{{ expat.title }}</a>
          </li>
        </ul>
        <ul>
          <li>Expatex Outlets</li>
          <li>Ogun State</li>
          <li>Follow Us</li>
          <li class="socials">
            <a
              v-for="social in socials"
              :key="social"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              ><span :class="social.icon"></span
            ></a>
          </li>
        </ul>
      </div>
      <small>Copyright 2021 &copy; Expatex.</small>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterTag",
  data() {
    return {
      routes: [
        {
          name: "about",
          title: "about",
        },
        {
          name: "contact-us",
          title: "Contact us",
        },
        {
          name: "contact-us",
          title: "Terms and Condition",
        },
      ],
      expatex: [
        {
          name: "products",
          title: "Products",
        },
        {
          name: "gallery",
          title: "Gallery",
        },
        {
          name: "color-guide",
          title: "Color Guide",
        },
      ],
      socials: [
        {
          name: "facebook",
          icon: "mdi mdi-facebook",
        },
        {
          name: "twitter",
          icon: "mdi mdi-twitter",
        },
        {
          name: "instagram",
          icon: "mdi mdi-instagram",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "@/scss/style.scss";
.footer {
  background: $sec-btn;
  padding: 3rem 0 !important;
  &-content {
    ul {
      margin: 2rem 0 0;
      list-style: none;
      li:first-child {
        @include font(14px, 700, 21px, $white);
      }
      li {
        padding: 0.6rem 0 0;
      }
      li a,
      li {
        @include font(12px, 500, 18px, $white);
        text-transform: capitalize;
      }
      li.socials {
        @include flex(flex, flex-start, center, row);
        a {
          padding-right: 0.8rem;
        }
      }
    }
  }
  small {
    @include font(12px, 500, 18px, $white);
    display: block;
    margin-top: 3rem;
  }
}

@media screen and (min-width: 700px) {
  .footer {
    .container {
      width: 700px;
      margin: auto;
    }
    &-content {
      @include flex(flex, space-between, flex-start, row);
      ul {
        margin: 0;
        list-style: none;
        li:first-child {
          @include font(16px, 700, 24px, $white);
        }
        li {
          padding: 0.6rem 0 0;
        }
        li a,
        li {
          @include font(14px, 500, 21px, $white);
          text-transform: capitalize;
        }
      }
    }
    small {
      @include font(14px, 500, 21px, $white);
    }
  }
}
</style>
