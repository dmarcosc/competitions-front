<template>
  <div class="general">
    <NavMenuHome />
    <div class="general-container">
      <div class="general-titlecard">
        <h1>General params</h1>
        <span class="general-info"><i class="fas fa-info-circle "> info</i></span>
      </div>
      <hr>
      <br>
      <br>
      <TextField label="Company/Employer" class="general-tf" />
      <ComboBox label="Field" class="general-tf"
                :items="items"
                vmodel="selected"
      />
      <TextField label="Due date" class="general-tf" />
      <TextField label="Number of vacancies" class="general-tf" />
      <TextArea label="Description" class="general-tf" />
      <Button primary class="general-button" @click="toMinRequirements">
        Continue
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import TextField from '@/components/TextField.vue'
import TextArea from '@/components/TextArea.vue'
import ComboBox from '@/components/ComboBox.vue'
import NavMenuHome from '@/components/NavMenu/NavMenuHome.vue'

export default Vue.extend({
  name: 'GeneralParams',
  components: {
    Button,
    TextField,
    TextArea,
    ComboBox,
    NavMenuHome
  },
  data () {
    return {
      items: ['Software Development', 'Computer Science', 'Machine Learning', 'Web Development'],
      selected: ''
    }
  },
  methods: {
    toMinRequirements () {
      this.$router.push('/create/requirements').catch((err: string) => { return err })
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;
$main-background: #C9D6FF;
$main-background2: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);
$main-background3: linear-gradient(to right, #E2E2E2, #C9D6FF);

.general{
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
.general-container{
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
.general-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.general-info{
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
.general-button{
  margin-bottom:2em;
}
@media (min-width: 580px) {
  .general{
    padding: 1em 8em;
  }
}

</style>
