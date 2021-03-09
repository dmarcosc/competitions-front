<template>
  <v-dialog class="prueba">
    <Button primary>
      Continuar
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
  }
})
</script>

<style scoped>
.prueba{
  width:300px;
  height: 300px;
}
</style>
