<template>
  <form
    class="contact-form"
    @submit.prevent="sendMessage"
    action="https://getform.io/f/5c2aac6c-f6be-4670-b671-3ff3549fe1a0"
    method="POST"
  >
    <div class="flex-field">
      <div class="input-field">
        <label for="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Jane Doe"
          v-model="fullName"
          @blur="v$.fullName.$touch()"
          @focus="v$.fullName.$reset()"
          :class="{ err: v$.fullName.$error }"
        />
        <small
          :class="{ 'err-mssg': v$.fullName.$error }"
          v-if="v$.fullName.$error"
          >Full Name is required</small
        >
      </div>
      <div class="input-field">
        <label for="mail">Email</label>
        <input
          type="mail"
          id="mail"
          name="mail"
          placeholder="j.doe@example.com"
          v-model="email"
          @blur="v$.email.$touch()"
          @focus="v$.email.$reset()"
          :class="{ err: v$.email.$error }"
        />
        <small :class="{ 'err-mssg': v$.email.$error }" v-if="v$.email.$error"
          >Please provide a valid email</small
        >
      </div>
    </div>
    <div class="input-field">
      <label for="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="15"
        cols="5"
        placeholder="Enter your message..."
        v-model="message"
        @blur="v$.message.$touch()"
        @focus="v$.message.$reset()"
        :class="{ err: v$.message.$error }"
      ></textarea>
      <small :class="{ 'err-mssg': v$.message.$error }" v-if="v$.message.$error"
        >Message can't be empty</small
      >
    </div>
    <div class="input-button">
      <input type="submit" class="pri-btn" value="Send" />
    </div>
  </form>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import axios from "axios";
import { required, email } from "@vuelidate/validators";
export default {
  name: "ContactForm",
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      message: "",
      email: "",
      fullName: "",
    };
  },
  validations() {
    return {
      message: { required },
      fullName: { required },
      email: { required, email },
    };
  },
  methods: {
    sendMessage() {
      if (this.v$.$invalid) {
        this.v$.$validate();
        window.scrollTo({
          top: 0,
        });
      } else {
        axios
          .post("https://getform.io/f/5c2aac6c-f6be-4670-b671-3ff3549fe1a0", {
            message: this.message,
            email: this.email,
            fullName: this.fullName,
          })
          .then(() => this.$router.push({ name: "successful-mail" }));
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/style.scss";
.contact-form {
  text-align: left;
  & .input-field input,
  & .input-field textarea {
    display: block;
    padding: 1rem;
    border-radius: 5px;
    background: $white;
    border: 0.5px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    margin: 1rem 0;
    transition: border ease 0.5s;
    @include font(14px, 400, 18px, $nav-color);
    &::placeholder {
      @include font(14px, 400, 21px, $nav-color);
    }
  }
  & .input-field input:focus,
  & .input-field textarea:focus {
    border: 0.5px solid $nav-color;
  }
  & .input-field label {
    @include font(14px, 600, 21px, $nav-color);
  }
  .input-button {
    @include flex(flex, center, center, row);
    input.pri-btn {
      @include font(18px, 600, 27px, $white);
      padding: 0.8rem 3rem;
    }
  }

  .input-field {
    position: relative;
  }
}
.err {
  border: solid 1px #fa5d5d !important;
}
.err-mssg {
  color: #fa5d5d !important;
  position: absolute;
  top: 0;
  right: 0;
}
small.refer {
  color: #888;
}

@media screen and (min-width: 1000px) {
  .contact-form {
    .input-field {
      margin-bottom: 1px;
    }
    .input-button {
      @include flex(flex, flex-start, center, row);
      input.pri-btn {
        @include font(18px, 600, 27px, $white);
        padding: 0.8rem 3rem;
      }
    }
    & .input-field input,
    & .input-field textarea {
      @include font(16px, 500, 20px, $nav-color);
      &::placeholder {
        @include font(16px, 500, 20px, $nav-color);
      }
    }
    & .input-field label {
      @include font(18px, 500, 20px, $nav-color);
    }
  }
  .flex-field {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .input-field {
      flex-basis: 48.88%;
    }
  }
}

@media screen and (min-width: 1400px) {
  .contact-form {
    & .input-field input,
    & .input-field textarea {
      @include font(18px, 500, 20px, $nav-color);
      &::placeholder {
        @include font(18px, 500, 20px, $nav-color);
      }
    }
    & .input-field label {
      @include font(24px, 500, 20px, $nav-color);
    }
  }
}
</style>
