<template>
  <div class="apply">
    <NavMenu route="Apply" />
    <div class="apply-container">
      <div class="apply-titlecard">
        <h1>{{ $t('apply.title') }}</h1>
        <span class="apply-info" @click="openDialog"><i class="fas fa-info-circle"> info</i></span>
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
            @click="contestApply(item)"
          >
            {{ $t('buttons.apply') }}
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
import i18n from '@/i18n'

export default Vue.extend({
  name: 'Apply',
  components: {
    NavMenu,
    Button
  },
  data () {
    return {
      headers: [
        {
          text: this.$t('profile.name'),
          align: 'start',
          value: 'name'
        },
        { text: this.$t('profile.field'), value: 'field', align: 'start' },
        { text: this.$t('profile.dueDate'), value: 'dueDate', align: 'start' },
        { value: 'actions', sortable: false, align: 'start' }
      ],
      itemsPerPage: 5,
      contests: [] as any
    }
  },
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

    contestApply (item: never) {
      console.log(item)
      this.$router.push('/apply/personalData').catch((err: string) => { return err })
    },
    openDialog () {
      this.$store.dispatch('ui/openDialog', {
        text: this.$t('info.apply')
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

.apply{
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
.apply-container{
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
.apply-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.apply-info{
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
.v-icon.notranslate.v-data-table-header__icon, .v-icon.notranslate.theme--light {
  overflow: hidden;
}
::v-deep
.v-icon.notranslate.theme--light {
  overflow: hidden;
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
  .apply{
    height: 100vh;
  }
}

</style>
