<template>
  <div id="sideNav" class="nav-mobile-content">
    <a class="menu-item" @click="toHome"><i class="fas fa-home fa-lg" /></a>
    <a class="menu-item" @click="toProfile"><i class="fas fa-user fa-lg" /></a>
    <a class="menu-item" @click="toApply"><i class="fas fa-search-dollar fa-lg" /></a>
    <a class="menu-item" @click="toCreate"><i class="fas fa-city fa-lg" /></a>
    <!-- <span class="mobile-inner-circle">&nbsp;</span> -->
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
  height: 320px;
  width: 320px;
  left: -100px;
  top:-100px;
  position: fixed;
  z-index: 6;
  border: 2px solid #fff;
  border-radius: 50%;
  background:  rgb(73, 116, 165,.5);
  display:flex;
  flex-direction: column;
  color:#fff;
  padding:6em 0em 0em 0em;
}
// .mobile-inner-circle{
//     height: 120px;
//   width: 120px;
//   left: -100px;
//   top:-100px;
//   position: fixed;
//   z-index: 6;
//   border: 2px solid #fff;
//   border-radius: 50%;
//   background:  $primary-color;
// }
.nav-mobile-content .menu-item {
  position: absolute;
  top: .2em;
  right: .2em;
  z-index: -1;
  display: block;
  text-decoration: none;
  color: #fff;
  width: 3em;
  height: 3em;
  border: 1px solid #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 3;
  background-color: #2b507a;
  cursor:pointer;
  :active{
    transform: scale(1.2);
  }
}
.nav-mobile-content .menu-item:nth-child(1) {
  transform: translate3d(-5.3em,14.6em,0);
}

.nav-mobile-content .menu-item:nth-child(2) {
  transform: translate3d(-9.5em,15.5em,0);
}

.nav-mobile-content .menu-item:nth-child(3) {
  transform: translate3d(-2.1em,11.5em,0);
}

.nav-mobile-content .menu-item:nth-child(4) {
  transform: translate3d(-1.0em,7em,0);
}
.fa-lg{
  line-height: .9;
}
</style>
