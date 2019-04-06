<template>
  <fish-select v-model="currency" @change="onChange">
    <fish-option v-for="curr in options" :index="curr" :key="curr" :content="curr"></fish-option>
  </fish-select>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CurrencySelect',
  data() {
    return {
      currency: '',
      options: ['грн.', 'руб.', 'USD', 'EUR']
    }
  },
  created() {
    this.currency = this.CURRENCY;
  },
  computed: {
    ...mapGetters(['CURRENCY'])
  },
  methods: {
    onChange() {
      this.$store.dispatch('SAVE_CURRENCY', this.currency)
    }
  }

}
</script>

<style>

</style>
