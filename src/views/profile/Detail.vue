<template>
  <div class="detail">
    <NavMenu route="Profile" />
    <div class="detail-container">
      <div class="detail-titlecard">
        <h1>Contest detail</h1>
        <span class="detail-info"><i class="fas fa-info-circle">info</i></span>
      </div>
      <hr>
      <v-data-table
        :headers="headers"
        :items="contestants"
        sort-by="score"
        :sort-desc="true"
        :items-per-page="itemsPerPage"
        class="elevation-1"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavMenu from '@/components/NavMenu/NavMenu.vue'

export default Vue.extend({
  name: 'Detail',
  components: {
    NavMenu
  },
  data: () => ({
    headers: [
      {
        text: 'Contestants',
        align: 'start',
        value: 'name'
      },
      { text: 'Score', value: 'score', align: 'start' },
      { text: 'Status', value: 'status', align: 'start' }
    ],
    itemsPerPage: 8,
    contestants: [] as any
  }),
  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.contestants = [
        {
          name: 'Doe, John',
          score: '98%',
          status: true
        },
        {
          name: 'Graham, Perkins',
          score: '55%',
          status: false
        },
        {
          name: 'García, Carlos',
          score: '70%',
          status: false
        },
        {
          name: 'Casablanca, Joe',
          score: '82%',
          status: true
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;
$main-background: #C9D6FF;
$main-background2: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);
$main-background3: linear-gradient(to right, #E2E2E2, #C9D6FF);

.detail{
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
  padding: 2em;
}
.detail-container{
  width: 100%;
  height: 100%;
  z-index: 5;
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding:4em 2em;
  overflow-y: auto;
}
.detail-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.detail-info{
  cursor:pointer;
  margin-left: auto;
  min-width: 90px;
  text-align: right;
}
::v-deep
.v-data-table{
  background: transparent;
}
::v-deep
.text-start {
  color:$primary-color;
  font-weight: 600;
}
::v-deep
.v-data-table-header{
  text-align: left;
}
::v-deep
.v-data-table-header-mobile,.v-data-table-header{
  display:none;
}
.v-data-table-header-mobile,.v-data-table-header{
  display:none;
}
.button-table{
  height: 30px;
  width:90px;
  font-size: 12px;
}
@media (min-width: 750px) {
  .detail{
    height: 100vh;
  }
}

</style>
