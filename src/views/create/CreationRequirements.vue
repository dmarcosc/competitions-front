<template>
  <div class="creation-requirements">
    <NavMenuHome />
    <div class="creation-requirements-container">
      <div class="creation-requirements-titlecard">
        <h1>Min requirements</h1>
        <span class="creation-requirements-info"><i class="fas fa-info-circle "> info</i></span>
      </div>
      Here you can set the minimum requirements needed to apply, you can also duplicate the textfields if needed
      <hr>
      <br>
      <br>
      <div class="creation-tfdiv">
        <TextField label="Official Title" class="creation-requirements-tf" />
        <AddButton plus :disabled="count==3" @click="duplicateRow" />
      </div>
      <div v-if="count >= 1" class="creation-tfdiv duplicate">
        <TextField class="creation-requirements-tf" />
        <AddButton class="creation-requirements-minus" minus @click="deleteRow" />
      </div>
      <div v-if="count >= 2" class="creation-tfdiv duplicate">
        <TextField class="creation-requirements-tf" />
        <AddButton class="creation-requirements-minus" minus @click="deleteRow" />
      </div>
      <div v-if="count >= 3" class="creation-tfdiv duplicate">
        <TextField class="creation-requirements-tf" />
        <AddButton class="creation-requirements-minus" minus @click="deleteRow" />
      </div>
      <div class="creation-tfdiv">
        <TextField label="Experience Merit" class="creation-requirements-tf" />
        <AddButton plus />
      </div>
      <div class="creation-tfdiv">
        <TextField label="Punctual Merit" class="creation-requirements-tf" />
        <AddButton plus />
      </div>
      <div class="creation-tfdiv">
        <TextField label="Knowledge Merit" class="creation-requirements-tf" />
        <AddButton plus />
      </div>
      <Button primary class="creation-requirements-button" @click="toCreationSkills">
        Continue
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import TextField from '@/components/TextField.vue'
import AddButton from '@/components/AddButton.vue'
import NavMenuHome from '@/components/NavMenu/NavMenuHome.vue'

export default Vue.extend({
  name: 'CreationRequirements',
  components: {
    Button,
    TextField,
    NavMenuHome,
    AddButton
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    toCreationSkills () {
      this.$router.push('/create/creationSkills').catch((err: string) => { return err })
    },
    duplicateRow () {
      if (this.count < 3) this.count++
    },
    deleteRow () {
      this.count--
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;
$main-background: #C9D6FF;
$main-background2: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);
$main-background3: linear-gradient(to right, #E2E2E2, #C9D6FF);

.creation-requirements{
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
.creation-requirements-container{
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
.creation-requirements-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.creation-requirements-info{
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
.creation-requirements-tf{
margin-right:1em;
}
.creation-requirements-minus{
  margin-top:14px;
}
.creation-tfdiv{
  display:flex;
  align-items: center;
  &.duplicate{
  align-items: flex-start;
}
}
.creation-requirements-button{
  margin-bottom:2em;
}
@media (min-width: 580px) {
  .creation-requirements{
    padding: 1em 8em;
  }
}

</style>
