<template>
  <div id="app">
    <BlueBall v-if="login" big class="ball1" />
    <BlueBall v-if="login" medium class="ball2" />
    <BlueBall v-if="login" small class="ball3" />
    <router-view />
  </div>
</template>

<script>
import BlueBall from '@/components/BlueBall.vue'

export default {
  name: 'App',
  components: {
    BlueBall
  },
  data () {
    return {
      login: false
    }
  },
  watch: {
    $route () {
      if (this.$router.currentRoute.name === 'Home') this.login = false
      else this.login = true
    }
  }
}
</script>
