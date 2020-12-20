<template>
  <v-app class="pa-0 ma-0">
      <router-view />      
  </v-app>
</template>

<style>
.col,.row {
  padding:0 !important;
  margin:0 !important;
}
.v-input__icon > .mdi-email {
  color : #383e6b !important;
} 

.v-input__icon > .mdi-account {
  color : #383e6b !important;
} 

.v-input__icon > .mdi-lock {
  color : red !important;
}
</style>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
