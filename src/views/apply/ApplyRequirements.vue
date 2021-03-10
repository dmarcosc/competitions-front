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
      <br>
      <div class="apply-requirements-tfdiv">
        <label class="apply-requirements-label">{ X Oficial title }</label>
        <span class="apply-requirements-span">
          <Button secondary class="apply-requirements-upload">
            {{ $t('buttons.upload') }}
          </Button>
        </span>
      </div>
      <div class="apply-requirements-tfdiv">
        <label class="apply-requirements-label">{ X Experience merit }</label>
        <span class="apply-requirements-span">
          <Button secondary class="apply-requirements-upload">
            {{ $t('buttons.upload') }}
          </Button>
        </span>
      </div>
      <div class="apply-requirements-tfdiv">
        <label class="apply-requirements-label">{ X Punctual merit }</label>
        <span class="apply-requirements-span">
          <Button secondary class="apply-requirements-upload">
            {{ $t('buttons.upload') }}
          </Button>
        </span>
      </div>
      <div class="apply-requirements-tfdiv">
        <label class="apply-requirements-label">{ X Knowledge merit }</label>
        <span class="apply-requirements-span">
          <Button secondary class="apply-requirements-upload">
            {{ $t('buttons.upload') }}
          </Button>
        </span>
      </div>
      <Button primary class="apply-requirements-button" @click="toSkills">
        {{ $t('buttons.continue') }}
      </Button>
    </div>
    <img class="apply-requirements-img" src="@/assets/images/contract.svg">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import NavMenuHome from '@/components/NavMenu/NavMenuHome.vue'

export default Vue.extend({
  name: 'ApplyRequirements',
  components: {
    Button,
    NavMenuHome
  },
  data () {
    return {
      weight: ['1', '2', '3']
    }
  },
  methods: {
    toSkills () {
      this.$router.push('/apply/skills').catch((err: string) => { return err })
    },
    openDialog () {
      this.$store.dispatch('ui/openDialog', {
        text: this.$t('info.applyRequirements')
      })
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;
$main-background: #C9D6FF;
$main-background2: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);
$main-background3: linear-gradient(to right, #E2E2E2, #C9D6FF);

.apply-requirements{
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
.apply-requirements-label{
  font-size: 16px;
  font-weight: 600;
  margin-right:1em;
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
  align-items: center;
  max-width:365px;
  margin:3em 0em;
  overflow: hidden;
}
// .apply-requirements-upload{
//   margin-left: auto;

// }
::v-deep
.v-select__slot{
  overflow:hidden;
}
.apply-requirements-button{
  margin:3em 0em;
}
.apply-requirements-img{
  display: none;
  height: 20rem;
  z-index: 6;
  position: absolute;
  top:30%;
  left:50%;
}
@media (min-width: 580px) {
  .apply-requirements{
    padding: 1em 8em;
  }
}
@media (min-width: 900px) {
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
