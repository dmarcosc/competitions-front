<template>
  <div class="profile">
    <NavMenu route="Profile" />
    <div class="profile-container">
      <div class="profile-titlecard">
        <h1>Contests created by me</h1>
        <span class="profile-info"><i class="fas fa-info-circle"> info</i></span>
      </div>
      <hr>
      <v-data-table
        :headers="headers"
        :items="contests"
        sort-by="dueDate"
        :sort-desc="true"
        :items-per-page="itemsPerPage"
        class="elevation-1"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <Button
            primary
            class="button-table"
            @click="contestDetail(item)"
          >
            Detail
          </Button>
        </template>
      </v-data-table>
      <div class="profile-titlecard">
        <h1 style="margin-top:1em">Contests I applied for</h1>
      </div>
      <hr>
      <v-data-table
        :headers="headers"
        :items="contests"
        :items-per-page="itemsPerPage"
        sort-by="dueDate"
        :sort-desc="true"
        class="elevation-1"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <Button
            primary
            class="button-table"
            @click="contestDetail(item)"
          >
            Detail
          </Button>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavMenu from '@/components/NavMenu/NavMenu.vue'
import Button from '@/components/Button.vue'

export default Vue.extend({
  name: 'Profile',
  components: {
    NavMenu,
    Button
  },
  data: () => ({
    headers: [
      {
        text: 'Name',
        align: 'start',
        value: 'name'
      },
      { text: 'Field', value: 'field', align: 'start' },
      { text: 'Due-Date', value: 'dueDate', align: 'start' },
      { text: 'Actions', value: 'actions', sortable: false, align: 'start' }
    ],
    itemsPerPage: 5,
    contests: [] as any
  }),
  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.contests = [
        {
          name: 'Senior Product Owner',
          field: 'Software Development',
          dueDate: '2021/07/02'
        },
        {
          name: 'English Teacher',
          field: 'Teaching',
          dueDate: '2021/09/11'
        },
        {
          name: 'Junior Java Developer',
          field: 'Software Development',
          dueDate: '2021/12/21'
        },
        {
          name: 'Python Developer',
          field: 'Computer Science',
          dueDate: '2021/10/01'
        }
      ]
    },

    contestDetail (item: never) {
      console.log(item)
      this.$router.push('/profile/detail').catch((err: string) => { return err })
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;
$main-background: #C9D6FF;
$main-background2: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);
$main-background3: linear-gradient(to right, #E2E2E2, #C9D6FF);

.profile{
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
  padding: 5em 2em;
}
.profile-container{
  width: 100%;
  height: 100%;
  z-index: 5;
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding:2em;
  overflow-y: auto;
}
.profile-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.profile-info{
  user-select:none;
  font-size: 18px;
  cursor:pointer;
  margin-left: auto;
  min-width: 90px;
  text-align: right;
  &:active{
    color: #fff
  }
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
::v-deep
.v-icon.notranslate.v-data-table-header__icon, .v-icon.notranslate.theme--light {
  overflow: hidden;
}
::v-deep
.v-icon.notranslate.theme--light {
  overflow: hidden;
}
.button-table{
  height: 30px;
  width:90px;
  font-size: 12px;
}
@media (min-width: 750px) {
  .profile{
    height: 100vh;
  }
}

</style>
