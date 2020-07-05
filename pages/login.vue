<template>
  <card-container>
    <v-col cols="12" sm="8" md="4">
      <v-card class="pa-5">
        <v-alert v-if='error' dense border="left" type="error">
          {{error}}
        </v-alert>
        <h1>Log in</h1>
        <v-form ref="form">
          <v-text-field v-model="email" :rules="emailRules" type="email" label="Email" prepend-icon="email" required></v-text-field>
          <v-text-field v-model="password" type="password" label='Password' prepend-icon="lock" required></v-text-field>
          <v-btn class="primary" @click="onSubmit">log in</v-btn>
        </v-form>
      </v-card>
    </v-col>
  </card-container>
</template>

<script>
import cardContainer from '../components/card-container';

export default {
  components: {
    'card-container': cardContainer
  },
  data () {
    return {
      email: '',
      password: '',
      emailRules: [
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
    }
  },

  methods: {
    onSubmit() {
      if(this.$refs.form.validate()) {
        this.$store
          .dispatch('logIn', {email: this.email, password: this.password})
          .then(() => this.$router.push('/'));
        this.$refs.form.reset();
      }
    }
  },
  
  computed: {
    error() {
      return this.$store.state.error;
    }
  }
}

</script>
