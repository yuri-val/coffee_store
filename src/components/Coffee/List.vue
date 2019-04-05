<template>
  <div class="coffee">
    <fish-cards :cols="inRowWords">
      <coffee-item v-for="item in COFFEE_LIST" :coffeeCard="item" :key="item.id" />
    </fish-cards>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CoffeeItem from './ListItem'

export default {
  name: 'CoffeeList',
  components: {
    CoffeeItem
  },
  created () {
    this.$store.dispatch('GET_COFFEE_LIST')
  },
  computed: {
    ...mapGetters(['COFFEE_LIST', 'CARDS_IN_ROW']),
    inRowWords: function () {
      return ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'][this.CARDS_IN_ROW]
    }
  }

}
</script>

<style scoped>

</style>
