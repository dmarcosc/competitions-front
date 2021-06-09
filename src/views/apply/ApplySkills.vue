<template>
  <div class="apply-skills">
    <NavMenuHome />
    <div class="apply-skills-container">
      <div class="apply-skills-titlecard">
        <h1>{{ $t('apply.titleSkills') }}</h1>
        <span class="apply-skills-info" @click="openDialog"><i class="fas fa-info-circle "> info</i></span>
      </div>
      {{ $t('apply.subtitleSkills') }}
      <hr>
      <br>
      <v-form v-model="isFormValid" @click.prevent>
        <div v-for="{ title, description } in Omerits" :key="title" class="apply-skills-tfdiv">
          <label class="apply-skills-label"> {{ title }} </label>
          <label class="apply-skills-desc"> {{ description }} </label>
          <DateField :label="$t('apply.date')" class="apply-skills-field" :max-date="new Date().toISOString()" />
          <TextField placeholder="0-10"
                     type="number"
                     :rules="[rules.max]"
                     :label="$t('apply.grade')"
                     class="apply-skills-field"
          />
          <Input id="fileUpload" class="apply-skills-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-for="{ title, description } in Emerits" :key="title" class="apply-skills-tfdiv">
          <label class="apply-skills-label"> {{ title }} </label>
          <label class="apply-skills-desc"> {{ description }} </label>
          <TextField :label="$t('create.company')" class="apply-skills-field" :rules="[rules.counter]" />
          <TextField
            type="number"
            :rules="[rules.negative]"
            :label="$t('apply.time')"
            :placeholder="$t('apply.months')"
            class="apply-skills-field"
          />
          <TextArea :label="$t('create.description')" :rules="[rules.counterDesc]" />
        </div>
        <div v-for="{ title, description } in Pmerits" :key="title" class="apply-skills-tfdiv">
          <label class="apply-skills-label"> {{ title }} </label>
          <label class="apply-skills-desc"> {{ description }} </label>
          <TextArea :label="$t('create.description')" :rules="[rules.counterDesc]" />
          <Input id="fileUpload" class="apply-skills-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-for="{ title, description } in Kmerits" :key="title" class="apply-skills-tfdiv">
          <label class="apply-skills-label"> {{ title }} </label>
          <label class="apply-skills-desc"> {{ description }} </label>
          <DateField :label="$t('apply.date')" class="apply-skills-field" :max-date="new Date().toISOString()" />
          <TextField placeholder="0-10"
                     type="number"
                     :rules="[rules.max]"
                     :label="$t('apply.grade')"
                     class="apply-skills-field"
          />
          <Input id="fileUpload" class="apply-skills-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
      </v-form>
      <div class="apply-skills-div-button">
        <Button terciary class="apply-skills-button" @click="toRequirements">
          {{ $t('buttons.back') }}
        </Button>
        <Button primary class="apply-skills-button"
                :disabled="!isFormValid"
                @click="toExtra"
        >
          {{ $t('buttons.continue') }}
        </Button>
      </div>
    </div>
    <img class="apply-skills-img" src="@/assets/images/skills.svg">
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

export default Vue.extend({
  name: 'ApplySkills',
  components: {
    Button,
    NavMenuHome,
    Input,
    DateField,
    TextField,
    TextArea
  },
  data () {
    return {
      weight: ['1', '2', '3'],
      Omerits: [{
        title: 'Grado Informatica',
        description: 'se debe tener el grado en informatica blabla'
      },
      {
        title: 'Grado Quimica',
        description: 'se debe tener el grado en quimica blabla'
      }],
      Emerits: [{
        title: 'Experiencia en consultorias web',
        description: 'se requieren al menos 2 años de experiencia en una empresa de desarrollo web'
      },
      {
        title: 'Experiencia trabajando en equipo',
        description: 'se debe estar acostumbrado al trabajo en equipo'
      }],
      Pmerits: [{
        title: 'Papers de investigación',
        description: 'queremos trabajar con alguien con experiencia redactando papers de investigación'
      }],
      Kmerits: [{
        title: 'Conocimientos de Adobe',
        description: 'imprescindible saber trabajar con Adobe'
      }],
      isFormValid: false,
      rules: {
        counter: (value: any) => value.length <= 40 || this.$t('validations.max40'),
        counterDesc: (value: any) => value.length <= 200 || this.$t('validations.max200'),
        max: (value: any) => (value <= 10 && value >= 0) || this.$t('validations.between010'),
        negative: (value: any) => (value >= 0) || this.$t('validations.positive')
      }
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    toRequirements () {
      this.$router.push('/apply/skills').catch((err: string) => { return err })
    },
    toExtra () {
      this.$router.push('/apply/extra').catch((err: string) => { return err })
    },
    openDialog () {
      this.$store.dispatch('ui/openDialog', {
        text: this.$t('info.applySkills')
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

.apply-skills{
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
.apply-skills-container{
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
.apply-skills-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.apply-skills-info{
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
.apply-skills-field{
  height:100px;
  &.area {
    height:130px;
  }
}
::v-deep
.v-text-field__details{
  //display:none
}
.apply-skills-input{
  margin-top:.9em;
}
.apply-skills-label{
  font-size: 17px;
  font-weight: 600;
  color:$primary-color;
}
.apply-skills-desc{
  font-size: 14px;
  font-weight: 600;
  margin-bottom:.8em;
  color:gray;
}
.apply-skills-minus{
  margin-top:14px;
}
.apply-skills-tfdiv{
  display:flex;
  flex-direction: column;
  max-width:400px;
  margin:2em 0em;
  overflow: hidden;
}
::v-deep
.v-select__slot{
  overflow:hidden;
}
.apply-skills-div-button {
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100% !important;
    margin-bottom: 70px !important;
    padding:10px;
    overflow: hidden;
   }
   .apply-skills-button {
    width:100% !important;
    margin-bottom: 2em;
  }
.apply-skills-span{
  margin-left: auto;
  height:80px;
  min-width:150px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.apply-skills-img{
  display: none;
  height: 20rem;
  z-index: 6;
  position: absolute;
  top:17%;
  left:50%;
}
@media (min-width: 580px) {
  .apply-skills{
    padding: 1em 8em;
  }
  .apply-skills-div-button{
    flex-direction: row;
    margin:20px 0px 40px 0px;
    padding:10px;
    :nth-child(1) {
    margin-right: 3em ;
  }
  }
    .apply-skills-button {
    width: 160px !important;
  }
}
@media (min-width: 1100px) {
  .tf-div.apply-skills-label{
    width:40%;
  }.apply-skills-img{
    display: block;
  }
}
@media (min-width: 1500px) {
  .apply-skills-img{
    height: 30rem;
  }
}
</style>
