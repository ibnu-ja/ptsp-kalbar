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
            <v-toolbar-title>Login</v-toolbar-title>
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
            v-slot="{ invalid }"
          >
            <v-form @submit.prevent="login">
              <v-card-text>
                <ValidationProvider
                  name="Email"
                  rules="required|email"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    :error-messages="errors[0]"
                    label="Login"
                    name="login"
                    v-model="email"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  name="Password"
                  rules="required|min:5"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    id="password"
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPass ? 'text' : 'password'"
                    :error-messages="errors[0]"
                    label="Password"
                    name="password"
                    v-model="password"
                    prepend-icon="mdi-lock"
                    class="input-group--focused"
                    @click:append="showPass = !showPass"
                  ></v-text-field>
                  <v-checkbox
                    v-model="rember"
                    type="checkbox"
                    label="Remember me?"
                  ></v-checkbox>
                </ValidationProvider>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  type="submit"
                  color="primary"
                  :disabled="invalid"
                  @click="login"
                >Login</v-btn>
              </v-card-actions>
            </v-form>
          </ValidationObserver>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

// No message specified.
extend('email', email);
extend('min', {
  validate (value, args) {
    return value.length >= args.length;
  },
  params: ['length'],
  message: 'Minimal 6 karakter'

});

// Override the default message.
extend('required', {
  ...required,
  message: 'This field is required'
});


export default {
  props: {
    source: String,
  },
  data () {
    return {
      email: null,
      password: null,
      has_error: false,
      showPass: false,
      rember: false
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    login () {
      // get the redirect object
      var self = this;
      var redirect = this.$auth.redirect();
      this.$auth.login({
        params: {
          email: self.email,
          password: self.password
        },
        success: function (response) {
          // handle redirection
          self.$router.push({ name: dashboard })
        },
        error: function (e) {
          self.has_error = true;
          console.log(e);
        },
        rememberMe: self.rember,
        fetchUser: true
      });
    }
  }
};
</script>