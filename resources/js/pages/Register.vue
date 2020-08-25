<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="10"
        md="8"
        lg="6"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>
              Form Pendaftaran <span v-show="!$auth.ready()">
                Loading...
              </span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  to="/"
                  v-on="on"
                >
                  <v-icon>mdi-home</v-icon>
                </v-btn>
              </template>
              <span>Home</span>
            </v-tooltip>
          </v-toolbar>
          <ValidationObserver
            ref="observer"
            v-slot="{ validate, reset, invalid }"
          >
            <v-form @submit.prevent="login">
              <v-card-text>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="name"
                  rules="required"
                >
                  <v-text-field
                    v-model="name"
                    :error-messages="errors"
                    label="Name"
                    name="name"
                    prepend-icon="mdi-account"
                    required
                  ></v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="email"
                  rules="required|email"
                >
                  <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    label="E-mail"
                    prepend-icon="mdi-email"
                  ></v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="password"
                  rules="required|min:6"
                  vid="confirmation"
                >
                  <v-text-field
                    v-model="password"
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPass ? 'text' : 'password'"
                    :error-messages="errors"
                    label="Password"
                    type="password"
                    prepend-icon="mdi-lock"
                    class="input-group--focused"
                    @click:append="showPass = !showPass"
                  ></v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="password confirmation"
                  rules="confirmed:confirmation|required|min:6"
                >
                  <v-text-field
                    v-model="password_confirmation"
                    :type="showPass2 ? 'text' : 'password'"
                    :error-messages="errors"
                    label="Password Confirmation"
                    type="password"
                    prepend-icon="mdi-lock"
                    class="input-group--focused"
                    @click:append="showPass = !showPass"
                  ></v-text-field>
                </ValidationProvider>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="secondary"
                  @click="clear"
                >
                  clear
                </v-btn>
                <v-btn
                  type="submit"
                  class="mr-4"
                  color="primary"
                  @click="register"
                  :disabled="invalid"
                >
                  submit
                </v-btn>
              </v-card-actions>
            </v-form>
          </ValidationObserver>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/en.json";
Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

extend('min', {
  validate (value, args) {
    return value.length >= args.length;
  },
  params: ['length'],
  message: 'Minimal 6 karakter'

});

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      showPass: false,
      showPass2: false
    }
  },
  methods: {
    clear () {
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
    register () {
      var self = this;
      this.$auth.register({
        data: {
          name: self.name,
          email: self.email,
          password: self.password,
          password_confirmation: self.password_confirmation
        },
        success: function (response) {
          self.$router.push({
            name: "login",
            params: { successRegistrationRedirect: true }
          });
        },
        error: function (res) {
          console.log(res.response.data.errors);
          self.has_error = true;
          self.error = res.response.data.error;
          self.errors = res.response.data.errors || {};
        }
      });
    },
  }
};
</script>