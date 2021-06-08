<template>
  <div class="apply-extra">
    <NavMenuHome />
    <div class="apply-extra-container">
      <div class="apply-extra-titlecard">
        <h1>{{ $t('apply.titleExtra') }}</h1>
        <span class="apply-extra-info" @click="openDialog"><i class="fas fa-info-circle "> info</i></span>
      </div>
      {{ $t('apply.subtitleExtra') }}
      <hr>
      <br>
      <div>
        <div class="apply-extra-tfdiv">
          <div class="apply-extra-duplicatediv">
            <TextField :label="$t('merits.official')" class="apply-extra-tf" />
            <AddButton plus :disabled="count==3" @click="duplicateRow" />
          </div>
          <DateField :label="$t('apply.date')" class="apply-extra-field" :min-date="new Date().toISOString()" />
          <TextField placeholder="0-10"
                     type="number"
                     :label="$t('apply.grade')"
                     class="apply-extra-field"
          />
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-if="count >= 1" class="apply-extra-tfdiv duplicate">
          <div class="apply-extra-duplicatediv">
            <TextField :label="$t('merits.official')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRow" />
          </div>
          <DateField :label="$t('apply.date')" class="apply-extra-field" :min-date="new Date().toISOString()" />
          <TextField placeholder="0-10"
                     type="number"
                     :label="$t('apply.grade')"
                     class="apply-extra-field"
          />
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-if="count >= 2" class="apply-extra-tfdiv duplicate">
          <div class="apply-extra-duplicatediv">
            <TextField :label="$t('merits.official')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRow" />
          </div>
          <DateField :label="$t('apply.date')" class="apply-extra-field" :min-date="new Date().toISOString()" />
          <TextField placeholder="0-10"
                     type="number"
                     :label="$t('apply.grade')"
                     class="apply-extra-field"
          />
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-if="count >= 3" class="apply-extra-tfdiv duplicate">
          <div class="apply-extra-duplicatediv">
            <TextField :label="$t('merits.official')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRow" />
          </div>
          <DateField :label="$t('apply.date')" class="apply-extra-field" :min-date="new Date().toISOString()" />
          <TextField placeholder="0-10"
                     type="number"
                     :label="$t('apply.grade')"
                     class="apply-extra-field"
          />
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div class="apply-extra-tfdiv exp">
          <div class="apply-extra-duplicatediv">
            <TextField :label="$t('merits.experience')" class="apply-extra-tf" />
            <AddButton plus :disabled="expCounter==3" @click="duplicateRowExp" />
          </div>
          <TextField :label="$t('create.company')" class="apply-extra-field" :min-date="new Date().toISOString()" />
          <TextField
            type="number"
            :label="$t('apply.time')"
            :placeholder="$t('apply.months')"
            class="apply-requirements-field"
          />
          <TextArea :label="$t('create.description')" />
        </div>
        <div v-if="expCounter >= 1" class="apply-extra-tfdiv exp">
          <div class="apply-extra-duplicatediv">
            <TextField :label="$t('merits.experience')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRowExp" />
          </div>
          <TextField :label="$t('create.company')" class="apply-extra-field" :min-date="new Date().toISOString()" />
          <TextField
            type="number"
            :label="$t('apply.time')"
            :placeholder="$t('apply.months')"
            class="apply-requirements-field"
          />
          <TextArea :label="$t('create.description')" />
        </div>
        <div v-if="expCounter >= 2" class="apply-extra-tfdiv exp">
          <div class="apply-extra-duplicatediv">
            <TextField :label="$t('merits.experience')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRowExp" />
          </div>
          <TextField :label="$t('create.company')" class="apply-extra-field" :min-date="new Date().toISOString()" />
          <TextField
            type="number"
            :label="$t('apply.time')"
            :placeholder="$t('apply.months')"
            class="apply-requirements-field"
          />
          <TextArea :label="$t('create.description')" />
        </div>
        <div v-if="expCounter >= 3" class="apply-extra-tfdiv exp">
          <div class="apply-extra-duplicatediv">
            <TextField :label="$t('merits.experience')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRowExp" />
          </div>
          <TextField :label="$t('create.company')" class="apply-extra-field" :min-date="new Date().toISOString()" />
          <TextField
            type="number"
            :label="$t('apply.time')"
            :placeholder="$t('apply.months')"
            class="apply-requirements-field"
          />
          <TextArea :label="$t('create.description')" />
        </div>
      </div>
      <div>
        <div class="apply-extra-tfdiv">
          <div class="apply-extra-duplicatediv">
            <TextArea :label="$t('merits.punctual')" class="apply-extra-tf" />
            <AddButton plus :disabled="punctCounter==3" @click="duplicateRowPunctual" />
          </div>
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-if="punctCounter >= 1" class="apply-extra-tfdiv duplicate">
          <div class="apply-extra-duplicatediv">
            <TextArea :label="$t('merits.punctual')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRowPunctual" />
          </div>
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-if="punctCounter >= 2" class="apply-extra-tfdiv duplicate">
          <div class="apply-extra-duplicatediv">
            <TextArea :label="$t('merits.punctual')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRowPunctual" />
          </div>
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-if="punctCounter >= 3" class="apply-extra-tfdiv duplicate">
          <div class="apply-extra-duplicatediv">
            <TextArea :label="$t('merits.punctual')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRowPunctual" />
          </div>
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div class="apply-extra-tfdiv">
          <div class="apply-extra-duplicatediv">
            <TextField :label="$t('merits.knowledge')" class="apply-extra-tf" />
            <AddButton plus :disabled="knowCounter==3" @click="duplicateRowKnow" />
          </div>
          <DateField :label="$t('apply.date')" class="apply-extra-field" :min-date="new Date().toISOString()" />
          <TextField placeholder="0-10"
                     type="number"
                     :label="$t('apply.grade')"
                     class="apply-extra-field"
          />
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-if="knowCounter >= 1" class="apply-extra-tfdiv duplicate">
          <div class="apply-extra-duplicatediv">
            <TextField :label="$t('merits.knowledge')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRowKnow" />
          </div>
          <DateField :label="$t('apply.date')" class="apply-extra-field" :min-date="new Date().toISOString()" />
          <TextField placeholder="0-10"
                     type="number"
                     :label="$t('apply.grade')"
                     class="apply-extra-field"
          />
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-if="knowCounter >= 2" class="apply-extra-tfdiv duplicate">
          <div class="apply-extra-duplicatediv">
            <TextField :label="$t('merits.knowledge')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRowKnow" />
          </div>
          <DateField :label="$t('apply.date')" class="apply-extra-field" :min-date="new Date().toISOString()" />
          <TextField placeholder="0-10"
                     type="number"
                     :label="$t('apply.grade')"
                     class="apply-extra-field"
          />
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-if="knowCounter >= 3" class="apply-extra-tfdiv duplicate">
          <div class="apply-extra-duplicatediv">
            <TextField :label="$t('merits.knowledge')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRowKnow" />
          </div>
          <DateField :label="$t('apply.date')" class="apply-extra-field" :min-date="new Date().toISOString()" />
          <TextField placeholder="0-10"
                     type="number"
                     :label="$t('apply.grade')"
                     class="apply-extra-field"
          />
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
      </div>
      <div class="apply-extra-div-button">
        <Button terciary class="apply-extra-button" @click="toSkills">
          {{ $t('buttons.back') }}
        </Button>
        <Button primary class="apply-extra-button" @click="toFinish">
          {{ $t('buttons.continue') }}
        </Button>
      </div>
    </div>
    <img class="apply-extra-img" src="@/assets/images/data_points.svg" alt="extra skills image">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import NavMenuHome from '@/components/NavMenu/NavMenuHome.vue'
import TextField from '@/components/TextField.vue'
import DateField from '@/components/DateField.vue'
import TextArea from '@/components/TextArea.vue'
import AddButton from '@/components/AddButton.vue'

export default Vue.extend({
  name: 'ApplyExtra',
  components: {
    Button,
    NavMenuHome,
    Input,
    DateField,
    TextField,
    TextArea,
    AddButton
  },
  data () {
    return {
      count: 0,
      expCounter: 0,
      punctCounter: 0,
      knowCounter: 0
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    toSkills () {
      this.$router.push('/apply/skills').catch((err: string) => { return err })
    },
    toFinish () {
      this.$store.dispatch('ui/showMask', {
        text: this.$t('main.retrievingData')
      })
      window.setTimeout(() => { this.$router.push('/apply/finish').catch((err: string) => { return err }); this.$store.dispatch('ui/hideMask') }, 3000)
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
    openDialog () {
      this.$store.dispatch('ui/openDialog', {
        text: this.$t('info.applyExtra')
      })
    },
    chooseFiles () {
      const aux = document.getElementById('fileUpload')
      if (aux) aux.click()
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;

.apply-extra{
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
.apply-extra-container{
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
.apply-extra-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.apply-extra-info{
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
.apply-extra-tf{
margin-right:1em;
width:90%;
}
.apply-extra-minus{
  margin-top:14px;
}
.apply-extra-tfdiv{
  flex-direction: column;
  display:flex;
  max-width: 400px;
  max-height: 380px;
  margin-bottom: 1.5em;
  margin-top:1.5em;
  &.exp {
    max-height: 490px;
  }
  // align-items: flex-start;
}
.apply-extra-duplicatediv{
  display:flex;
}
.apply-extra-duplicatespan{
  margin:0;
}
.apply-extra-span{
display:flex;
justify-content: center;
align-items: center;
min-width:205px;
height:60px;
}
.apply-extra-img{
  display: none;
  height: 20rem;
  z-index: 6;
  position: absolute;
  top:16%;
  left:50%;
}
.apply-extra-upload{
  margin-right: 1em;
  &.dup{
    margin-top:13px;
  }
}
.apply-extra-div-button {
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100% !important;
    margin-bottom: 70px !important;
    padding:10px;
    overflow: hidden;
   }
   .apply-extra-button {
    width:100% !important;
    margin-bottom: 2em;
  }
::v-deep
  .v-text-field__details{
  display:none
}
@media (min-width: 580px) {
  .apply-extra{
    padding: 1em 8em;
  }
  .apply-extra-div-button{
    flex-direction: row;
    margin:20px 0px 40px 0px;
    padding:10px;
    :nth-child(1) {
    margin-right: 3em ;
  }
  }
    .apply-extra-button {
    width: 160px !important;
  }
  .apply-extra-tfdiv{
    margin-bottom: 0px;
  }
  ::v-deep
  .v-text-field__details{
  display:block
}
}
@media (min-width: 1050px) {
  .apply-extra-img{
    display: block;
  }
}
@media (min-width: 1500px) {
  .apply-extra-img{
    height: 30rem;
  }
}

</style>
