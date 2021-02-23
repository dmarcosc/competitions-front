<template>
  <div :class="{'blue-ball big' : big,'blue-ball small' : small, 'blue-ball medium' : medium}">
    &nbsp;
  </div>
</template>

<script lang="ts">

export default {
  name: 'BlueBall',
  props: {
    big: {
      type: Boolean,
      default: false
    },
    medium: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.blue-ball{
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #4974a5;
  background-image:
  linear-gradient(to left, rgba(2,0,36,1) 0%, rgba(29,44,85,1) 0%, rgba(73,116,165,1) 100%);
}
.big{
  width: 200px;
  height: 200px;
}
.small{
  width: 100px;
  height: 100px;
}
.medium{
  width: 150px;
  height: 150px;
}
</style>
