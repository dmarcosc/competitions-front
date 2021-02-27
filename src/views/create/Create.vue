<template>
  <div class="create">
    <NavMenu route="Create" />
    <div class="create-container">
      <div class="create-titlecard">
        <h1>Creation process</h1>
        <span class="create-info"><i class="fas fa-info-circle">info</i></span>
      </div>
      <hr>
      <TextField label="Please enter a name for your contest" class="create-tf" />
      <Button primary class="create-button">
        Start
      </Button>
      <img class="create-img" src="@/assets/images/build.svg">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import NavMenu from '@/components/NavMenu/NavMenu.vue'
import TextField from '@/components/TextField.vue'

export default Vue.extend({
  name: 'Create',
  components: {
    Button,
    TextField,
    NavMenu
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;
$main-background: #C9D6FF;
$main-background2: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);
$main-background3: linear-gradient(to right, #E2E2E2, #C9D6FF);

.create{
  z-index: 2;
  max-width: 100%;
  width: 100%;
  background:$main-background;
  background: $main-background2;
  background: $main-background3;
  min-height: 100vh;
  color:$primary-color;
  font-size: 12px;
  height: 100%;
  overflow: hidden;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
}
.create-container{
  width: 100%;
  height: 100%;
  z-index: 5;
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding:2em;
}
.create-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.create-info{
  cursor:pointer;
  margin-left: auto;
  min-width: 90px;
  text-align: right;
}
.create-tf{
  margin:3em 0em;
}
.create-button{
  margin-bottom:2em;
}
.create-img{
height:100px;
float: right;
}
@media (min-width: 750px) {
  .create{
    height: 100vh;
  }
  .create-img{
    height:18rem;
    position:absolute;
    bottom:4em;
    right:4em;
  }
}
@media (max-height: 700px) {
  .create-img{
    height:140px;
  }
}
@media (min-width: 1300px) and (min-height: 800px)  {
  .create-img{
    height:28rem;
  }
  .create-titlecard{
font-size:22px;
}

.create-tf{
  font-size:22px !important;
  margin:3em 0em;
}
}

</style>
