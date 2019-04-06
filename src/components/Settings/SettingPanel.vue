<template>
  <div class="main">
    <fish-form>
       <fish-field label="Карточек в ряд: " name="cards" inline >
        <fish-buttons>
          <fish-button @click="changeCards(-1)">-</fish-button>
          <fish-button disabled>{{CARDS_IN_ROW}}</fish-button>
          <fish-button @click="changeCards(1)">+</fish-button>
        </fish-buttons>
      </fish-field>
      <fish-field label="Валюта: " name="currency" inline >
        <currency-select />
      </fish-field>
      <fish-row class="padded-row">
        <fish-button class="btn btn-primary" @click="closePanel">
          Save
        </fish-button>
      </fish-row>
    </fish-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CurrencySelect from './CurrencySelect'

export default {
  components: {
    CurrencySelect
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['CARDS_IN_ROW'])
  },
  methods: {
    closePanel () {
      this.$emit('closePanel', {})
      this.$store.dispatch('SHOW_SETTINGS', false)
    },
    changeCards: function (count) {
      this.$store.dispatch('SAVE_CARDS_IN_ROW', this.CARDS_IN_ROW + count)
    }

  }
}
</script>

<style scoped>
  .main {
    margin: 5px;
    margin-top: 70px;

  }
</style>
