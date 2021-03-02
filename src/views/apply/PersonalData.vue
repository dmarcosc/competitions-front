<template>
  <div class="personalData">
    <NavMenuHome />
    <div class="personalData-container">
      <div class="personalData-titlecard">
        <h1>Personal data</h1>
        <span class="personalData-info"><i class="fas fa-info-circle "> info</i></span>
      </div>
      <hr>
      <br>
      <br>
      <TextField label="First-name" class="personalData-tf" />
      <TextField label="Second-name" class="personalData-tf" />
      <TextField label="Date of birth" class="personalData-tf" />
      <TextField label="Phone number" class="personalData-tf" />
      <ComboBox label="Country" class="personalData-tf"
                :items="items"
                vmodel="selected"
      />
      <Button primary class="personalData-button" @click="toMinRequirements">
        Continue
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import TextField from '@/components/TextField.vue'
import ComboBox from '@/components/ComboBox.vue'
import NavMenuHome from '@/components/NavMenu/NavMenuHome.vue'

export default Vue.extend({
  name: 'PersonalData',
  components: {
    Button,
    TextField,
    ComboBox,
    NavMenuHome
  },
  data () {
    return {
      items: ['Spain', 'France', 'Germany', 'Italy'],
      selected: ''
    }
  },
  methods: {
    toMinRequirements () {
      this.$router.push('/apply/requirements').catch((err: string) => { return err })
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;
$main-background: #C9D6FF;
$main-background2: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);
$main-background3: linear-gradient(to right, #E2E2E2, #C9D6FF);

.personalData{
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
  padding: 6em 2em;
}
.personalData-container{
  width: 100%;
  height: 100%;
  z-index: 5;
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding:2em 3em;
}
.personalData-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.personalData-info{
  user-select: none;
  font-size: 18px;
  cursor:pointer;
  margin-left: auto;
  min-width: 90px;
  text-align: right;
  &:active{
    color: #fff
  }
}
.personalData-button{
  margin:3em 0em;
}
@media (min-width: 580px) {
  .personalData{
    padding: 1em 8em;
  }
}

</style>
