<template>
  <div id="app">
    <transition name="show" mode="in-out">
      <NavMenuMobile v-if="menuInfo.show" :route="route" />
    </transition>
    <BlueBall v-if="login" big class="ball1" />
    <BlueBall v-if="login" medium class="ball2" />
    <BlueBall v-if="login" small class="ball3" />
    <router-view />
  </div>
</template>

<script>
import BlueBall from '@/components/BlueBall.vue'
import NavMenuMobile from '@/components/NavMenu/NavMenuMobile.vue'

export default {
  name: 'App',
  components: {
    BlueBall,
    NavMenuMobile
  },
  data () {
    return {
      route: '',
      login: false
    }
  },
  computed: {
    menuInfo () {
      return this.$store.getters['ui/menuInfo']
    }
  },
  watch: {
    $route () {
      this.route = this.$router.currentRoute.name
      if (this.$router.currentRoute.name === 'Home') this.login = false
      else this.login = true
    }
  }
}
</script>
<style lang="scss">
.show {
  &-enter,
    &-leave-to {
        transform: translateX(-100%);
        transition: all .7s ease-in 0s
    }
    &-enter-active,
    &-leave-active
    {
        transition: transform .7s ease;
    }
}
</style>
