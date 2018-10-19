<template>
  <div id="app">
   <v-app>
    <v-content>
      <v-fade-transition mode="out-in">
        <router-view/>
      </v-fade-transition>
    </v-content>
  </v-app>
  </div>
</template>
<style lang="stylus">
@import '/assets/main.styl'
body
  background-color white-cloud

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  background-color white-cloud
  margin 20px 0px
  
.v-toolbar__title
  color white-cloud

</style>
