<template>
  <v-app id="app">
    <transition name="show" mode="in-out">
      <NavMenuMobile v-if="menuInfo.show" :route="route" />
    </transition>
    <BlueBall v-if="login" id="ball"
              big
              class="ball1"
    />
    <BlueBall v-if="login" id="ball"
              medium
              class="ball2"
    />
    <BlueBall v-if="login" id="ball"
              small
              class="ball3"
    />
    <v-container class="app-container">
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
import BlueBall from '@/components/BlueBall.vue'
import NavMenuMobile from '@/components/NavMenu/NavMenuMobile.vue'
import Vue from 'vue'
export default Vue.extend({
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
      // if (this.$router.currentRoute.name !== 'Dashboard' && this.$router.currentRoute.name !== 'Create' && this.$router.currentRoute.name !== 'Profile' && this.$router.currentRoute.name !== 'Apply' && this.$router.currentRoute.name !== 'Detail')
      this.$store.dispatch('ui/hideMenu')
      this.route = this.$router.currentRoute.name
      if (this.$router.currentRoute.name === 'Home') this.login = false
      else this.login = true
    }
  },
  updated () {
    this.relocate()
  },
  methods: {
    relocate () {
      document.querySelectorAll('[id=ball]').forEach(element => {
        const placementX = Math.floor(Math.random() * Math.floor(100))
        element.style.setProperty('--relocation-distanceX', placementX + '%')
      })
      document.querySelectorAll('[id=ball]').forEach(element => {
        const placementY = Math.floor(Math.random() * Math.floor(100))
        element.style.setProperty('--relocation-distanceY', placementY + '%')
      })
    }
  }
})
</script>
<style lang="scss">
.show {
  &-enter,
    &-leave-to {
        transform: translateX(-100%) translateY(-100%);
        transition: all .7s ease-in 0s
    }
    &-enter-active,
    &-leave-active
    {
        transition: transform 1.1s ease;
    }
}
#ball {
  transition: 1s;
  top: var(--relocation-distanceX) !important;
  left: var(--relocation-distanceY) !important;
}
</style>
