<template>
  <div class="creation-requirements">
    <NavMenuHome />
    <div class="creation-requirements-container">
      <div class="creation-requirements-titlecard">
        <h1>{{ $t('create.titleRequirements') }}</h1>
        <span class="creation-requirements-info" @click="openDialog"><i class="fas fa-info-circle "> info</i></span>
      </div>
      {{ $t('create.subtitleRequirements') }}
      <hr>
      <br>
      <br>
      <div class="creation-tfdiv">
        <span class="required-official-span">
          <TextField :label="$t('merits.official')" :placeholder="$t('create.titlePlaceholder')" class="creation-requirements-tf" />
          <TextArea class="creation-requirements-tf" :placeholder="$t('create.description')" />
        </span>
        <AddButton plus :disabled="count==3" @click="duplicateRow" />
      </div>
      <div v-if="count >= 1" class="creation-tfdiv duplicate">
        <span class="required-official-span">
          <TextField class="creation-requirements-tf" />
          <TextArea class="creation-requirements-tf" />
        </span>
        <AddButton class="creation-requirements-minus" minus @click="deleteRow" />
      </div>
      <div v-if="count >= 2" class="creation-tfdiv duplicate">
        <span class="required-official-span">
          <TextField class="creation-requirements-tf" />
          <TextArea class="creation-requirements-tf" />
        </span>
        <AddButton class="creation-requirements-minus" minus @click="deleteRow" />
      </div>
      <div v-if="count >= 3" class="creation-tfdiv duplicate">
        <span class="required-official-span">
          <TextField class="creation-requirements-tf" />
          <TextArea class="creation-requirements-tf" />
        </span>
        <AddButton class="creation-requirements-minus" minus @click="deleteRow" />
      </div>
      <div class="creation-tfdiv">
        <span class="required-official-span">
          <TextField :label="$t('merits.experience')" :placeholder="$t('create.titlePlaceholder')" class="creation-requirements-tf" />
          <TextArea class="creation-requirements-tf" :placeholder="$t('create.description')" />
        </span>
        <AddButton plus :disabled="expCounter==3" @click="duplicateRowExp" />
      </div>
      <div v-if="expCounter >= 1" class="creation-tfdiv duplicate">
        <span class="required-official-span">
          <TextField class="creation-requirements-tf" />
          <TextArea class="creation-requirements-tf" />
        </span>
        <AddButton class="creation-requirements-minus" minus @click="deleteRowExp" />
      </div>
      <div v-if="expCounter >= 2" class="creation-tfdiv duplicate">
        <span class="required-official-span">
          <TextField class="creation-requirements-tf" />
          <TextArea class="creation-requirements-tf" />
        </span>
        <AddButton class="creation-requirements-minus" minus @click="deleteRowExp" />
      </div>
      <div v-if="expCounter >= 3" class="creation-tfdiv duplicate">
        <span class="required-official-span">
          <TextField class="creation-requirements-tf" />
          <TextArea class="creation-requirements-tf" />
        </span>
        <AddButton class="creation-requirements-minus" minus @click="deleteRowExp" />
      </div>
      <div class="creation-tfdiv">
        <span class="required-official-span">
          <TextField :label="$t('merits.punctual')" :placeholder="$t('create.titlePlaceholder')" class="creation-requirements-tf" />
          <TextArea class="creation-requirements-tf" :placeholder="$t('create.description')" />
        </span>
        <AddButton plus :disabled="punctCounter==3" @click="duplicateRowPunctual" />
      </div>
      <div v-if="punctCounter >= 1" class="creation-tfdiv duplicate">
        <span class="required-official-span">
          <TextField class="creation-requirements-tf" />
          <TextArea class="creation-requirements-tf" />
        </span>
        <AddButton class="creation-requirements-minus" minus @click="deleteRowPunctual" />
      </div>
      <div v-if="punctCounter >= 2" class="creation-tfdiv duplicate">
        <span class="required-official-span">
          <TextField class="creation-requirements-tf" />
          <TextArea class="creation-requirements-tf" />
        </span>
        <AddButton class="creation-requirements-minus" minus @click="deleteRowPunctual" />
      </div>
      <div v-if="punctCounter >= 3" class="creation-tfdiv duplicate">
        <span class="required-official-span">
          <TextField class="creation-requirements-tf" />
          <TextArea class="creation-requirements-tf" />
        </span>
        <AddButton class="creation-requirements-minus" minus @click="deleteRowPunctual" />
      </div>
      <div class="creation-tfdiv">
        <span class="required-official-span">
          <TextField :label="$t('merits.knowledge')" :placeholder="$t('create.titlePlaceholder')" class="creation-requirements-tf" />
          <TextArea class="creation-requirements-tf" :placeholder="$t('create.description')" />
        </span>
        <AddButton plus :disabled="knowCounter==3" @click="duplicateRowKnow" />
      </div>
      <div v-if="knowCounter >= 1" class="creation-tfdiv duplicate">
        <span class="required-official-span">
          <TextField class="creation-requirements-tf" />
          <TextArea class="creation-requirements-tf" />
        </span>
        <AddButton class="creation-requirements-minus" minus @click="deleteRowKnow" />
      </div>
      <div v-if="knowCounter >= 2" class="creation-tfdiv duplicate">
        <span class="required-official-span">
          <TextField class="creation-requirements-tf" />
          <TextArea class="creation-requirements-tf" />
        </span>
        <AddButton class="creation-requirements-minus" minus @click="deleteRowKnow" />
      </div>
      <div v-if="knowCounter >= 3" class="creation-tfdiv duplicate">
        <span class="required-official-span">
          <TextField class="creation-requirements-tf" />
          <TextArea class="creation-requirements-tf" />
        </span>
        <AddButton class="creation-requirements-minus" minus @click="deleteRowKnow" />
      </div>
      <div class="creation-requirements-div-button">
        <Button terciary class="creation-requirements-button" @click="toGeneralParams">
          {{ $t('buttons.back') }}
        </Button>
        <Button primary class="creation-requirements-button" @click="toCreationSkills">
          {{ $t('buttons.continue') }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import TextField from '@/components/TextField.vue'
import AddButton from '@/components/AddButton.vue'
import NavMenuHome from '@/components/NavMenu/NavMenuHome.vue'
import TextArea from '@/components/TextArea.vue'

export default Vue.extend({
  name: 'CreationRequirements',
  components: {
    Button,
    TextField,
    NavMenuHome,
    AddButton,
    TextArea
  },
  data () {
    return {
      count: 0,
      expCounter: 0,
      punctCounter: 0,
      knowCounter: 0
    }
  },
  methods: {
    toCreationSkills () {
      this.$router.push('/create/skills').catch((err: string) => { return err })
    },
    duplicateRow () {
      if (this.count < 3) this.count++
    },
    deleteRow () {
      this.count--
    },
    duplicateRowExp () {
      if (this.expCounter < 3) this.expCounter++
    },
    deleteRowExp () {
      this.expCounter--
    },
    duplicateRowPunctual () {
      if (this.punctCounter < 3) this.punctCounter++
    },
    deleteRowPunctual () {
      this.punctCounter--
    },
    duplicateRowKnow () {
      if (this.knowCounter < 3) this.knowCounter++
    },
    deleteRowKnow () {
      this.knowCounter--
    },
    toGeneralParams () {
      this.$router.push('/create/generalParams').catch((err: string) => { return err })
    },
    openDialog () {
      this.$store.dispatch('ui/openDialog', {
        text: this.$t('info.createRequirements')
      })
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;

.creation-requirements{
  z-index: 2;
  max-width: 100%;
  width: 100%;
  background: inherit;
  min-height: 100vh;
  color:$primary-color;
  font-size: 12px;
  height: 100%;
  overflow: hidden;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 6em 1em;
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
.required-official-span{
  display: flex;
  flex-direction: column;
  margin-right:1em;

}
.creation-requirements-minus{
  margin-top:14px;
}
.creation-tfdiv{
  display:flex;
  align-items: flex-start;
  &.duplicate{
  align-items: flex-start;
}
}
.creation-requirements-img{
  display: none;
  height: 20rem;
  z-index: 6;
  position: absolute;
  top:40%;
  left:50%;
}
.creation-requirements-div-button {
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100% !important;
    margin-bottom: 70px !important;
    padding:10px;
    overflow: hidden;
   }
   .creation-requirements-button {
    width:100% !important;
    margin-bottom: 2em;
  }
@media (min-width: 580px) {
  .creation-requirements{
    padding: 1em 8em;
  }
  .creation-requirements-div-button{
    flex-direction: row;
    margin:20px 0px 40px 0px;
    padding:10px;
    :nth-child(1) {
    margin-right: 3em ;
  }
  }
    .creation-requirements-button {
    width: 160px !important;
  }
}
@media (min-width: 850px) {
  .creation-requirements-img{
    display: block;
  }
  // .tf-div.creation-requirements-tf{
  //   width:40%;
  // }
  .required-official-span{
    width:40%;
  }
}
@media (min-width: 1500px) {
  .creation-requirements-img{
    height: 30rem;
  }
}

</style>
