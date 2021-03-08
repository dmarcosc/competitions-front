<template>
  <div class="creation-extra">
    <NavMenuHome />
    <div class="creation-extra-container">
      <div class="creation-extra-titlecard">
        <h1>{{ $t('create.titleExtra') }}</h1>
        <span class="creation-extra-info"><i class="fas fa-info-circle "> info</i></span>
      </div>
      {{ $t('create.subtitleExtra') }}
      <hr>
      <br>
      <br>
      <div class="creation-extra-tfdiv">
        <label class="creation-extra-label">{{ $t('create.extraOfficial') }}</label>
        <ComboBox :label="$t('create.weight')" :items="weight" class="creation-extra-cb" />
      </div>
      <div class="creation-extra-tfdiv">
        <label class="creation-extra-label">{{ $t('create.extraExperience') }}</label>
        <ComboBox :label="$t('create.weight')" :items="weight" class="creation-extra-cb" />
      </div>
      <div class="creation-extra-tfdiv">
        <label class="creation-extra-label">{{ $t('create.extraPunctual') }}</label>
        <ComboBox :label="$t('create.weight')" :items="weight" class="creation-extra-cb" />
      </div>
      <div class="creation-extra-tfdiv">
        <label class="creation-extra-label">{{ $t('create.extraKnowledge') }}</label>
        <ComboBox :label="$t('create.weight')" :items="weight" class="creation-extra-cb" />
      </div>
      <Button primary class="creation-extra-button" @click="toFinish">
        {{ $t('buttons.createContest') }}
      </Button>
    </div>
    <img class="creation-extra-img" src="@/assets/images/extra.svg">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import NavMenuHome from '@/components/NavMenu/NavMenuHome.vue'
import ComboBox from '@/components/ComboBox.vue'

export default Vue.extend({
  name: 'CreationExtra',
  components: {
    Button,
    ComboBox,
    NavMenuHome
  },
  data () {
    return {
      weight: ['1', '2', '3']
    }
  },
  methods: {
    toFinish () {
      this.$router.push('/create/finish').catch((err: string) => { return err })
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;
$main-background: #C9D6FF;
$main-background2: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);
$main-background3: linear-gradient(to right, #E2E2E2, #C9D6FF);

.creation-extra{
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
  padding: 6em 1em;
}
.creation-extra-container{
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
.creation-extra-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.creation-extra-info{
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
.creation-extra-label{
  font-size: 16px;
  font-weight: 600;
  margin-right:1em;
}
.creation-extra-minus{
  margin-top:14px;
}
.creation-extra-tfdiv{
  display:flex;
  align-items: center;
  max-width:365px;
}
.creation-extra-cb{
  width:120px;
  margin-left: auto;

}
::v-deep
.v-select__slot{
  overflow:hidden;
}
.creation-extra-button{
  margin:3em 0em;
}
.creation-extra-img{
  display: none;
  height: 20rem;
  z-index: 6;
  position: absolute;
  top:30%;
  left:50%;
}
@media (min-width: 580px) {
  .creation-extra{
    padding: 1em 8em;
  }
}
@media (min-width: 900px) {
  .tf-div.creation-extra-label{
    width:40%;
  }.creation-extra-img{
    display: block;
  }
}
@media (min-width: 1500px) {
  .creation-extra-img{
    height: 30rem;
  }
}
</style>
