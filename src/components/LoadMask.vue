<template>
  <div id="loading">
    <div class="content">
      <img :alt="text" class="img-loading"
           :src="photoLoader"
      >
      <h4 class="text">
        {{ text }}
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import photoLoader from '@/assets/images/waiting.svg'

export default Vue.extend({
  name: 'LoadMask',
  props: {
    text: {
      type: String,
      default: 'Cargando...'
    }
  },
  data: () => ({
    photoLoader
  })
})
</script>

<style lang="scss" scoped>
#loading {
  display: flex;
  justify-content: center;
  background-color: #02307B;opacity:0.6; //#2f2f2f #02307B
  color: white;
  top: 0;
  left: 0;
  height:100vh;
  width: 100vw;
  position: fixed;
  font-size: 32px;
  text-align: center;
  z-index: 10;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.img-loading {
  width: 125px;
  height: 125px;
}
</style>
