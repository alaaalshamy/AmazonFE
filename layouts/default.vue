<template>
  <v-app>
    <AppHeader/>
    <!-- <VuetfiyBar/> -->
    <Nuxt />
  </v-app>
</template>
<script>
import AppHeader from "../components/appHeader";
import VuetfiyBar from "../components/VuetfiyBar";
export default {
  component:{
    AppHeader,
    VuetfiyBar
  }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  
  box-sizing: border-box;
  margin: 0 auto;
}
</style>
