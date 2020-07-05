<template>
  <card-container v-if="user">
    <v-col cols="12" sm="12" md="8" xl="6">
      <v-card class="pa-5">
        <v-row>
          <v-col cols="12" sm="4">
            <v-row justify="center">
              <v-avatar rounded size="150">
                <img :src='user.avatar'>
              </v-avatar>
            </v-row>
          </v-col>
          <v-col cols="12" sm="7">
            <h1>{{ user.name }}</h1>
            <span>{{ user.email }}</span>
          </v-col>
           <v-col cols="12" sm="1">
            <v-btn @click="logOut" dark icon class="secondary"><v-icon>exit_to_app</v-icon></v-btn>
          </v-col>
        </v-row>
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

  middleware: ['auth'],

    methods: {
    logOut() {
      this.$store
        .dispatch('logOut')
        .then(() => this.$router.push('/login'));
    }
  },

  computed: {
    user() {
      return this.$store.state.user;
    }
  }
}
</script>
