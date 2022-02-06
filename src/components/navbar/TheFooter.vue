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
            <router-link :to="{ name: expat.name }">{{
              expat.title
            }}</router-link>
          </li>
        </ul>
        <ul>
          <li>Expatex Outlets</li>
          <li>KM 38, Lagos-Abeokuta</li>
          <li>Expressway, Itori</li>
          <li>Ogun State</li>
          <br />
          <li>40, Murtala Muhammad way,</li>
          <li>Jos, Plateau State.</li>
          <li><strong>Follow Us</strong></li>
          <li class="socials">
            <a
              v-for="social in socials"
              :key="social"
              :href="social.href"
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
      ],
      expatex: [
        {
          name: "paint-collection",
          title: "Products",
        },
        {
          name: "gallery",
          title: "Gallery",
        },
        {
          name: "color-guide",
          title: "Colour Guide",
        },
      ],
      socials: [
        {
          name: "facebook",
          icon: "mdi mdi-facebook",
          href: "https://web.facebook.com/expatexpaint",
        },
        {
          name: "twitter",
          icon: "mdi mdi-twitter",
          href: "https://twitter.com/expatexpaints?s=20",
        },
        {
          name: "instagram",
          icon: "mdi mdi-instagram",
          href: "https://www.instagram.com/expatexpaints/",
        },
        {
          name: "instagram",
          icon: "mdi mdi-whatsapp",
          href: "https://api.whatsapp.com/send?phone=2348167142625&app=facebook&entry_point=page_cta&fbclid=IwAR32dXY1KXwetzlFA9RY8mVtyxHTL3VhdFEQ3fJi2E2fF-k8TVyr72rspuY",
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
          transition: ease all 0.5s;
          &:hover {
            color: $pri-btn;
          }
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
