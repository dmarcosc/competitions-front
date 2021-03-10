<template>
  <v-dialog v-bind="$attrs" light
            persistent
  >
    <div v-if="settings">
      Settings
      <v-radio-group v-model="$i18n.locale" label="Language">
        <v-radio
          label="Español"
          value="es"
        />
        <v-radio
          label="Inglés"
          value="en"
        />
      </v-radio-group>
      <v-switch
        v-model="mode"
        label="Dark Mode"
      />
      <span class="span-session" @click="closeSession">Cerrar sesión <i class="fas fa-power-off" /></span>
    </div>
    <div v-else class="common-dialog">
      <i class="fas fa-info-circle fa-4x" />
      <div>{{ text }}</div>
      <div v-if="isProcess" class="dialog-cheat-sheet">
        <span style="color:red;">{{ $t('info.cheat') }}</span>
        <p class="dialog-p">
          {{ $t('info.official') }}
        </p>
        <p class="dialog-p">
          {{ $t('info.experience') }}
        </p>
        <p class="dialog-p">
          {{ $t('info.punctual') }}
        </p>
        <p class="dialog-p">
          {{ $t('info.knowledge') }}
        </p>
      </div>
    </div>
    <Button primary class="dialog-button" @click="$emit('close')">
      {{ $t('buttons.close') }}
    </Button>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
export default Vue.extend({
  name: 'Dialog',
  components: {
    Button
  },
  props: {
    isProcess: {
      type: Boolean,
      default: false
    },
    settings: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      language: this.$i18n.locale,
      mode: false
    }
  },
  methods: {
    closeSession () {
      this.$emit('close')
      this.$router.push('/').catch((err: string) => { return err })
    }
  }
})
</script>

<style  lang="scss" scoped>
.v-dialog{
  background: #fff;
  height:450px;
  width:700px !important;
  border-radius: 5% !important;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  color:#4974a5;
  border: 4px solid #4974a5;
  font-size: 12px;
  padding: 20px;
}
.common-dialog{
  margin:0;
  padding:0;
  height:280px;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.dialog-button{
  height: 40px !important;
  width:120px !important;
}
.dialog-cheat-sheet{
  border: .5px solid red;
padding: 10px 5%;
}
.dialog-p{
    margin:0px !important;
    text-align: left;
  }
@media (min-width: 700px) {
  .dialog-button{
    height: 46px !important;
    width:160px !important;
  }
  .v-dialog{
    font-size: 16px;
  }
}
::v-deep
.v-input--selection-controls__input{
  overflow: hidden !important;
}
::v-deep
.v-icon{
  overflow: hidden !important;
}
::v-deep
.v-input--selection-controls__ripple{
    overflow: hidden !important;
}
.span-session{
  cursor: pointer;
  display:flex;
  align-items: center;
}
.fa-power-off{
  margin-left:5px;
}
::v-deep
.v-input--switch .v-input--selection-controls__input{
  width:55px;
  height:48px;
  margin-right:0px;
  text-align: center;
  overflow: visible !important;
}
::v-deep
.theme--light.v-input input{
overflow: visible !important;
overflow-y: visible !important;
}
</style>
