<template>
    <fish-modal :width="window.width < 850 && window.width" title="Чек" :visible="SHOW_CART" @keydown.esc="close" @update:visible="close" class="cart" >
      <fish-row>
        <fish-col span="15">
          <cart-row v-for="(item, index) in CART" :key='index' :item="item" :index="index" />
          <br>
          <fish-row :key='9999'>
            <fish-col span="10"><b>Всего:</b></fish-col>
            <fish-col span="9"><b class="align-right">{{formatSum(CART_SUM, 'грн.')}}</b></fish-col>
            <fish-col span="3"></fish-col>
          </fish-row>
        </fish-col>
        <fish-col span="2" />
        <fish-col span="7">
          <pay-pad />
        </fish-col>
      </fish-row>
    </fish-modal>
</template>

<script>
import { mapGetters } from 'vuex'

import { formatSum } from '@/utils/formatter'
import CartRow from './CartRow'
import PayPad from './PayPad'

export default {
  name: 'CartModal',
  components: {
    CartRow,
    PayPad
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['SHOW_CART', 'CART', 'CART_SUM'])
  },
  methods: {
    close: function () {
      this.$store.dispatch('SHOW_CART', false)
    },
    formatSum: formatSum

  }
}
</script>

<style scoped>
  .cart {
    font-size: 1.3em
  }
</style>
