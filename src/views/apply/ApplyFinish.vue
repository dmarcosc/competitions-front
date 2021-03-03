<template>
  <div class="finish">
    <BlueBall id="ball"
              big
              class="ball1"
    />
    <BlueBall id="ball"
              medium
              class="ball2"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              medium
              class="ball2"
    />
    <BlueBall id="ball"
              medium
              class="ball2"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              medium
              class="ball2"
    />
    <BlueBall id="ball"
              medium
              class="ball2"
    />
    <BlueBall id="ball"
              big
              class="ball1"
    />
    <BlueBall id="ball"
              big
              class="ball1"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              big
              class="ball1"
    />
    <BlueBall id="ball"
              medium
              class="ball2"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              medium
              class="ball2"
    />
    <BlueBall id="ball"
              medium
              class="ball2"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              medium
              class="ball2"
    />
    <BlueBall id="ball"
              medium
              class="ball2"
    />
    <BlueBall id="ball"
              big
              class="ball1"
    />
    <BlueBall id="ball"
              big
              class="ball1"
    />
    <BlueBall id="ball"
              small
              class="ball3"
    />
    <BlueBall id="ball"
              small
              class="ball1"
    />
    <BlueBall id="ball"
              small
              class="ball2"
    />
    <BlueBall id="ball"
              small
              class="ball4"
    />
    <BlueBall id="ball"
              small
              class="ball4"
    />
    <BlueBall id="ball"
              small
              class="ball4"
    />
    <BlueBall id="ball"
              small
              class="ball4"
    />
    <BlueBall id="ball"
              small
              class="ball4"
    />
    <BlueBall id="ball"
              medium
              class="ball5"
    />
    <BlueBall id="ball"
              big
              class="ball5"
    />
    <BlueBall id="ball"
              big
              class="ball5"
    />
    <BlueBall id="ball"
              small
              class="ball5"
    />
    <img class="img-finish" :src="imgfinish" alt="congratulation image">
    <div class="finish-container">
      <div class="finish-container-inner">
        <h1 class="title-finish">
          Congratulations !!
        </h1>
        <p class="subtitle-finish">
          You have succesfully finished your application with a nice score, check your <a style="color:#4974a5; font-weight: 700;" @click="toProfile">profile</a> for more
        </p>
        <Progress
          :transition-duration="2000"
          :radius="50"
          :stroke-width="10"
          stroke-color="#F42A61"
          value="84.2"
          style="color:#F42A61;"
        />
        <Button
          primary
          style="margin-top:1em"
          @click="toHome"
        >
          Accept
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import BlueBall from '@/components/BlueBall.vue'
import imgfinish from '@/assets/images/finish.svg'
import Progress from 'easy-circular-progress'

export default Vue.extend({
  name: 'ApplyFinish',
  components: {
    Button,
    BlueBall,
    Progress
  },
  props: {
    status: {
      type: String,
      default: 'KO'
    }
  },
  data () {
    return {
      imgfinish
    }
  },
  mounted () {
    console.log('jaja')
  },
  methods: {
    toProfile () {
      this.$router.push('/profile').catch((err: string) => { return err })
    },
    toHome () {
      document.querySelectorAll('[id=ball]').forEach(element => {
        (element as any).style.setProperty('--relocation-distanceX', -150 + 'px')
      })
      document.querySelectorAll('[id=ball]').forEach(element => {
        (element as any).style.setProperty('--relocation-distanceY', -150 + 'px')
      })
      document.querySelectorAll('[id=ball]').forEach(element => {
        (element as any).style.setProperty('transition', '.7' + 's')
      })
      document.querySelectorAll('[id=ball]').forEach(element => {
        (element as any).style.setProperty('transform', 'scale(0.7)')
      })
      setTimeout(() => this.$router.push('/dashboard').catch((err: string) => { return err }), 500)
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;
$main-background: #C9D6FF;
$main-background2: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);
$main-background3: linear-gradient(to right, #E2E2E2, #C9D6FF);
.ball1{
  background: rgb(112, 253, 112);
}
.ball2{
  background: #ffdc51;
}
.ball3{
  background: #f51651;
}
.ball4{
 background:#f965a9;
}
.ball5{
 background:#817afc;
}
.finish{
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
  // padding: 2em;
}
.finish-container{
  z-index: 5;
  background: rgba( 255, 255, 255, 0.05 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding:3em 3em;
  overflow-y: auto;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100vw;
  height:100vh;
}
.finish-container-inner{
  z-index: 5;
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding:5em 3em;
  overflow-y: auto;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img-finish {
  height:28rem;
  position: absolute;
  z-index: 6;
  top:28%;
  left:61%;
}
.title-finish{
  font-size: 36px;
  text-align: center;
}
.subtitle-finish{
  max-width:350px;
  font-size: 20px;
  color:#fff;
  margin:1em 2em;
  text-align: center;
}

@media (min-width: 750px) {
  .finish{
    height: 100vh;
  }
}
@media (max-width: 1050px) {
  .img-finish {
  height:15rem;
  top:47%;
  left:61%;
  }
}
@media (max-width: 650px) {
.img-finish {
    display:none;
  }
}

</style>
