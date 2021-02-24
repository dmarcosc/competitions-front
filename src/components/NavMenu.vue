<template>
  <div class="nav-menu">
    <button class="logo-img">
      <img class="logo-img" src="@/assets/images/favicon.png">
    </button>
    <ul class="nav-list">
      <li class="nav-items">
        <i class="fas fa-home fa-lg" />
        <span :class="{'active' : route==='Home'}">Home</span>
      </li>
      <li class="nav-items">
        <i class="fas fa-user fa-lg" /><span :class="{'active' : route==='Profile'}">Profile</span>
      </li>
      <li class="nav-items">
        <i class="fas fa-search-dollar fa-lg" /><span :class="{'active' : route==='Apply'}">Apply now</span>
      </li>
      <li class="nav-items">
        <i class="fas fa-city fa-lg" /><span :class="{'active' : route==='Creation'}">Create <br> Contest</span>
      </li>
    </ul>
    <div class="bottom-nav">
      <img class="menu-img" src="@/assets/images/menu.svg">
      <Button secondary>
        Settings
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '@/components/Button.vue'
export default {
  name: 'NavMenu',
  components: {
    Button
  },
  props: {
    route: {
      type: String,
      default: 'Home'
    }
  }
}
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;
.nav-menu{
  z-index: 5;
  width: 17em;
  margin-right: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
.logo-img{
  border-radius: 30px;
  width:130px;
  outline: none;
}
.menu-img{
  height: 150px;
  margin-bottom: 30px;
}
.fas{
  background: #fff;
  border-radius: 10px;
  height:47px;
  width:47px;
  text-align: center;
  padding-top: 15px;
  margin-right: 8px;
  color:black;
}
.nav-list{
  display:flex;
  flex-direction: column;
  user-select: none;
}
.nav-items{
  display:flex;
  align-items: center;
  margin:20px 0px 20px 0px;
  cursor:pointer;
  color:#B1B6C5;
  font-weight: 10;
  line-height: 1.3;
  position: relative;
  overflow: hidden;
  &:hover{
    //border-radius: 20px;
    box-shadow: 0 3px 3px 0 rgba( 31, 38, 135, 0.37 );
    outline:0.4px solid lightgray
  }
  &:active{
    color: #fff !important;
  }
}
.bottom-nav{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
}
.active{
  color:black;
  font-weight: 800;
  &:active{
    color: #fff !important;
  }
}
</style>
