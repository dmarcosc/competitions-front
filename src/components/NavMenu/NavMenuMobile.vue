<template>
  <div id="sideNav" class="nav-mobile-content">
    <div :class="{'nav-mobile-link' : route!=='Dashboard','nav-mobile-link active' : route=='Dashboard'}"
         @click="toHome"
    >
      Home
    </div>
    <div :class="{'nav-mobile-link' : route!=='Profile','nav-mobile-link active' : route=='Profile'}"
         @click="toProfile"
    >
      Profile
    </div>
    <div :class="{'nav-mobile-link' : route!=='Apply','nav-mobile-link active' : route=='Apply'}"
         @click="toApply"
    >
      Apply
    </div>
    <div :class="{'nav-mobile-link' : route!=='Create','nav-mobile-link active' : route=='Create'}"
         @click="toCreate"
    >
      Create
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NavMenuMobile',
  props: {
    route: {
      type: String,
      default: ''
    }
  },
  methods: {
    toHome () {
      this.$router.push('/dashboard').catch((err: string) => { return err })
    },
    toProfile () {
      this.$router.push('/profile').catch((err: string) => { return err })
    },
    toApply () {
      this.$router.push('/apply').catch((err: string) => { return err })
    },
    toCreate () {
      this.$router.push('/create').catch((err: string) => { return err })
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;
.nav-mobile-content {
  height: 100%;
  width: 150px;
  left: 0;
  position: fixed;
  z-index: 6;
  border: 2px solid #fff;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  background:  $primary-color;
  display:flex;
  flex-direction: column;
  color:#fff;
  padding:130px 0px;
}
.nav-mobile-link{
padding:1em 1em;
  &.active{
    background:#274568;
    outline: 1px solid black;
  }
}
</style>
