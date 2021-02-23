<template>
  <div class="dashboard">
    <div class="dashboard-container">
      <Button primary>
        Apply
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'Dashboard',
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
.dashboard{
  z-index: 2;
  max-width: 100%;
  width: 100%;
  background: #C9D6FF;
  background: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);
  background: linear-gradient(to right, #E2E2E2, #C9D6FF);
  height: 100vh;
  overflow: hidden;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
}
.dashboard-container{
  width: 100%;
  height: 100%;
  z-index: 5;
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

</style>
