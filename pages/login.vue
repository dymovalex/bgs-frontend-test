<template>
  <v-app>
    <v-main class="grey lighten-3">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="pa-5">
              <h1>Log in</h1>
              <v-form>
                <v-text-field v-model="email" label="Email" required></v-text-field>
                <v-text-field v-model="password" label='Password' required></v-text-field>
                <v-btn class="primary" @click="onSubmit">log in</v-btn>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('logIn', {email: this.email, password: this.password});
    }
  }
}

</script>
