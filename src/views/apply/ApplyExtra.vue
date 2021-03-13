<template>
  <div class="apply-extra">
    <NavMenuHome />
    <div class="apply-extra-container">
      <div class="apply-extra-titlecard">
        <h1>{{ $t('apply.titleExtra') }}</h1>
        <span class="apply-extra-info" @click="openDialog"><i class="fas fa-info-circle "> info</i></span>
      </div>
      {{ $t('apply.subtitleExtra') }}
      <hr>
      <br>
      <br>
      <div class="apply-extra-tfdiv">
        <TextField :label="$t('merits.official')" class="apply-extra-tf" />
        <span class="apply-extra-span">
          <Button secondary class="apply-extra-upload">
            {{ $t('buttons.upload') }}
          </Button>
          <AddButton plus :disabled="count==3" @click="duplicateRow" />
        </span>
      </div>
      <div v-if="count >= 1" class="apply-extra-tfdiv duplicate">
        <TextField class="apply-extra-tf" />
        <span class="apply-extra-span">
          <Button secondary class="apply-extra-upload dup">
            {{ $t('buttons.upload') }}
          </Button>
          <AddButton class="apply-extra-minus" minus @click="deleteRow" />
        </span>
      </div>
      <div v-if="count >= 2" class="apply-extra-tfdiv duplicate">
        <TextField class="apply-extra-tf" />
        <span class="apply-extra-span">
          <Button secondary class="apply-extra-upload dup">
            {{ $t('buttons.upload') }}
          </Button>
          <AddButton class="apply-extra-minus" minus @click="deleteRow" />
        </span>
      </div>
      <div v-if="count >= 3" class="apply-extra-tfdiv duplicate">
        <TextField class="apply-extra-tf" />
        <span class="apply-extra-span">
          <Button secondary class="apply-extra-upload dup">
            {{ $t('buttons.upload') }}
          </Button>
          <AddButton class="apply-extra-minus" minus @click="deleteRow" />
        </span>
      </div>
      <div class="apply-extra-tfdiv">
        <TextField :label="$t('merits.experience')" class="apply-extra-tf" />
        <span class="apply-extra-span">
          <Button secondary class="apply-extra-upload">
            {{ $t('buttons.upload') }}
          </Button>
          <AddButton plus :disabled="expCounter==3" @click="duplicateRowExp" />
        </span>
      </div>
      <div v-if="expCounter >= 1" class="apply-extra-tfdiv duplicate">
        <TextField class="apply-extra-tf" />
        <span class="apply-extra-span">
          <Button secondary class="apply-extra-upload dup">
            {{ $t('buttons.upload') }}
          </Button>
          <AddButton class="apply-extra-minus" minus @click="deleteRowExp" />
        </span>
      </div>
      <div v-if="expCounter >= 2" class="apply-extra-tfdiv duplicate">
        <TextField class="apply-extra-tf" />
        <span class="apply-extra-span">
          <Button secondary class="apply-extra-upload dup">
            {{ $t('buttons.upload') }}
          </Button>
          <AddButton class="apply-extra-minus" minus @click="deleteRowExp" />
        </span>
      </div>
      <div v-if="expCounter >= 3" class="apply-extra-tfdiv duplicate">
        <TextField class="apply-extra-tf" />
        <span class="apply-extra-span">
          <Button secondary class="apply-extra-upload dup">
            {{ $t('buttons.upload') }}
          </Button>
          <AddButton class="apply-extra-minus" minus @click="deleteRowExp" />
        </span>
      </div>
      <div class="apply-extra-tfdiv">
        <TextField :label="$t('merits.punctual')" class="apply-extra-tf" />
        <span class="apply-extra-span">
          <Button secondary class="apply-extra-upload">
            {{ $t('buttons.upload') }}
          </Button>
          <AddButton plus :disabled="punctCounter==3" @click="duplicateRowPunctual" />
        </span>
      </div>
      <div v-if="punctCounter >= 1" class="apply-extra-tfdiv duplicate">
        <TextField class="apply-extra-tf" />
        <span class="apply-extra-span">
          <Button secondary class="apply-extra-upload dup">
            {{ $t('buttons.upload') }}
          </Button>
          <AddButton class="apply-extra-minus" minus @click="deleteRowPunctual" />
        </span>
      </div>
      <div v-if="punctCounter >= 2" class="apply-extra-tfdiv duplicate">
        <TextField class="apply-extra-tf" />
        <span class="apply-extra-span">
          <Button secondary class="apply-extra-upload dup">
            {{ $t('buttons.upload') }}
          </Button>
          <AddButton class="apply-extra-minus" minus @click="deleteRowPunctual" />
        </span>
      </div>
      <div v-if="punctCounter >= 3" class="apply-extra-tfdiv duplicate">
        <TextField class="apply-extra-tf" />
        <span class="apply-extra-span">
          <Button secondary class="apply-extra-upload dup">
            {{ $t('buttons.upload') }}
          </Button>
          <AddButton class="apply-extra-minus" minus @click="deleteRowPunctual" />
        </span>
      </div>
      <div class="apply-extra-tfdiv">
        <TextField :label="$t('merits.knowledge')" class="apply-extra-tf" />
        <span class="apply-extra-span">
          <Button secondary class="apply-extra-upload">
            {{ $t('buttons.upload') }}
          </Button>
          <AddButton plus :disabled="knowCounter==3" @click="duplicateRowKnow" />
        </span>
      </div>
      <div v-if="knowCounter >= 1" class="apply-extra-tfdiv duplicate">
        <TextField class="apply-extra-tf" />
        <span class="apply-extra-span">
          <Button secondary class="apply-extra-upload dup">
            {{ $t('buttons.upload') }}
          </Button>
          <AddButton class="apply-extra-minus" minus @click="deleteRowKnow" />
        </span>
      </div>
      <div v-if="knowCounter >= 2" class="apply-extra-tfdiv duplicate">
        <TextField class="apply-extra-tf" />
        <span class="apply-extra-span">
          <Button secondary class="apply-extra-upload dup">
            {{ $t('buttons.upload') }}
          </Button>
          <AddButton class="apply-extra-minus" minus @click="deleteRowKnow" />
        </span>
      </div>
      <div v-if="knowCounter >= 3" class="apply-extra-tfdiv duplicate">
        <TextField class="apply-extra-tf" />
        <span class="apply-extra-span">
          <Button secondary class="apply-extra-upload dup">
            {{ $t('buttons.upload') }}
          </Button>
          <AddButton class="apply-extra-minus" minus @click="deleteRowKnow" />
        </span>
      </div>
      <Button primary class="apply-extra-button" @click="toFinish">
        {{ $t('buttons.continue') }}
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import TextField from '@/components/TextField.vue'
import AddButton from '@/components/AddButton.vue'
import NavMenuHome from '@/components/NavMenu/NavMenuHome.vue'

export default Vue.extend({
  name: 'ApplyExtra',
  components: {
    Button,
    TextField,
    NavMenuHome,
    AddButton
  },
  data () {
    return {
      count: 0,
      expCounter: 0,
      punctCounter: 0,
      knowCounter: 0
    }
  },
  methods: {
    toFinish () {
      this.$router.push('/apply/finish').catch((err: string) => { return err })
    },
    duplicateRow () {
      if (this.count < 3) this.count++
    },
    deleteRow () {
      this.count--
    },
    duplicateRowExp () {
      if (this.expCounter < 3) this.expCounter++
    },
    deleteRowExp () {
      this.expCounter--
    },
    duplicateRowPunctual () {
      if (this.punctCounter < 3) this.punctCounter++
    },
    deleteRowPunctual () {
      this.punctCounter--
    },
    duplicateRowKnow () {
      if (this.knowCounter < 3) this.knowCounter++
    },
    deleteRowKnow () {
      this.knowCounter--
    },
    openDialog () {
      this.$store.dispatch('ui/openDialog', {
        text: this.$t('info.applyExtra')
      })
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;

.apply-extra{
  z-index: 2;
  max-width: 100%;
  width: 100%;
  background: inherit;
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
.apply-extra-container{
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
.apply-extra-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.apply-extra-info{
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
.apply-extra-tf{
margin-right:1em;
}
.apply-extra-minus{
  margin-top:14px;
}
.apply-extra-tfdiv{
  flex-direction: column;
  display:flex;
  align-items: flex-start;
  margin-bottom: 2em;
  &.duplicate{
  align-items: flex-start;
}
.apply-extra-span{
display:flex;
justify-content: center;
align-items: center;
min-width:205px;
height:60px;
}
}
.apply-extra-img{
  display: none;
  height: 20rem;
  z-index: 6;
  position: absolute;
  top:40%;
  left:50%;
}
.apply-extra-upload{
  margin-right: 1em;
  &.dup{
    margin-top:13px;
  }
}
.apply-extra-button{
  margin:2em 0em;
}
::v-deep
  .v-text-field__details{
  display:none
}
@media (min-width: 580px) {
  .apply-extra{
    padding: 1em 8em;
  }
  .apply-extra-tfdiv{
    flex-direction: row;
    align-items: center;
    margin-bottom: 0px;
  }
  ::v-deep
  .v-text-field__details{
  display:block
}
}
@media (min-width: 850px) {
  .apply-extra-img{
    display: block;
  }
  .tf-div.apply-extra-tf{
    width:40%;
  }
}
@media (min-width: 1500px) {
  .apply-extra-img{
    height: 30rem;
  }
}

</style>
