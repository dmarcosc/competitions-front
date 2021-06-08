<template>
  <div class="apply-requirements">
    <NavMenuHome />
    <div class="apply-requirements-container">
      <div class="apply-requirements-titlecard">
        <h1>{{ $t('apply.titleRequirements') }}</h1>
        <span class="apply-requirements-info" @click="openDialog"><i class="fas fa-info-circle "> info</i></span>
      </div>
      {{ $t('apply.subtitleRequirements') }}
      <hr>
      <br>
      <div v-for="{ title, description } in Omerits" :key="title" class="apply-requirements-tfdiv">
        <label class="apply-requirements-label"> {{ title }} </label>
        <label class="apply-requirements-desc"> {{ description }} </label>
        <DateField :label="$t('apply.date')" class="apply-requirements-field" :min-date="new Date().toISOString()" />
        <TextField placeholder="0-10"
                   type="number"
                   :label="$t('apply.grade')"
                   class="apply-requirements-field"
        />
        <Input id="fileUpload" class="apply-requirements-input"
               type="file"
               @click="chooseFiles()"
        />
      </div>
      <div v-for="{ title, description } in Emerits" :key="title" class="apply-requirements-tfdiv">
        <label class="apply-requirements-label"> {{ title }} </label>
        <label class="apply-requirements-desc"> {{ description }} </label>
        <TextField :label="$t('create.company')" class="apply-requirements-field" :min-date="new Date().toISOString()" />
        <TextField
          type="number"
          :label="$t('apply.time')"
          :placeholder="$t('apply.months')"
          class="apply-requirements-field"
        />
        <TextArea :label="$t('create.description')" />
      </div>
      <div v-for="{ title, description } in Pmerits" :key="title" class="apply-requirements-tfdiv">
        <label class="apply-requirements-label"> {{ title }} </label>
        <label class="apply-requirements-desc"> {{ description }} </label>
        <TextArea :label="$t('create.description')" />
        <Input id="fileUpload" class="apply-requirements-input"
               type="file"
               @click="chooseFiles()"
        />
      </div>
      <div v-for="{ title, description } in Kmerits" :key="title" class="apply-requirements-tfdiv">
        <label class="apply-requirements-label"> {{ title }} </label>
        <label class="apply-requirements-desc"> {{ description }} </label>
        <DateField :label="$t('apply.date')" class="apply-requirements-field" :min-date="new Date().toISOString()" />
        <TextField placeholder="0-10"
                   type="number"
                   :label="$t('apply.grade')"
                   class="apply-requirements-field"
        />
        <Input id="fileUpload" class="apply-requirements-input"
               type="file"
               @click="chooseFiles()"
        />
      </div>
      <div class="apply-requirements-div-button">
        <Button terciary class="apply-requirements-button" @click="toPersonalData">
          {{ $t('buttons.back') }}
        </Button>
        <Button primary class="apply-requirements-button" @click="toSkills">
          {{ $t('buttons.continue') }}
        </Button>
      </div>
    </div>
    <img class="apply-requirements-img" src="@/assets/images/contract.svg">
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
  name: 'ApplyRequirements',
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
      }]
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    toPersonalData () {
      this.$router.push('/apply/personalData').catch((err: string) => { return err })
    },
    toSkills () {
      this.$router.push('/apply/skills').catch((err: string) => { return err })
    },
    openDialog () {
      this.$store.dispatch('ui/openDialog', {
        text: this.$t('info.applyRequirements')
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

.apply-requirements{
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
.apply-requirements-container{
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
.apply-requirements-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.apply-requirements-info{
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
.apply-requirements-field{
  height:90px;
  &.area {
    height:130px;
  }
}
::v-deep
.v-text-field__details{
  display:none
}
.apply-requirements-input{
  margin-top:.9em;
}
.apply-requirements-label{
  font-size: 17px;
  font-weight: 600;
  color:$primary-color;
}
.apply-requirements-desc{
  font-size: 14px;
  font-weight: 600;
  margin-bottom:.8em;
  color:gray;
}
.apply-requirements-minus{
  margin-top:14px;
}
.apply-requirements-span{
  margin-left: auto;
  height:80px;
  min-width:150px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.apply-requirements-tfdiv{
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
.apply-requirements-div-button {
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100% !important;
    margin-bottom: 70px !important;
    padding:10px;
    overflow: hidden;
   }
   .apply-requirements-button {
    width:100% !important;
    margin-bottom: 2em;
  }
.apply-requirements-img{
  display: none;
  height: 20rem;
  z-index: 6;
  position: absolute;
  top:17%;
  left:50%;
}
@media (min-width: 580px) {
  .apply-requirements{
    padding: 1em 8em;
  }
  .apply-requirements-div-button{
    flex-direction: row;
    margin:20px 0px 40px 0px;
    padding:10px;
    :nth-child(1) {
    margin-right: 3em ;
  }
  }
    .apply-requirements-button {
    width: 160px !important;
  }
}
@media (min-width: 1100px) {
  .tf-div.apply-requirements-label{
    width:40%;
  }.apply-requirements-img{
    display: block;
  }
}
@media (min-width: 1500px) {
  .apply-requirements-img{
    height: 30rem;
  }
}
</style>
