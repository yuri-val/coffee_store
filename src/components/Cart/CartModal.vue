<template>
    <fish-modal :width="windowWith" title="Чек" :visible="SHOW_CART" @keydown.esc="close" @update:visible="close" class="cart">
      <fish-row v-if="!smallScreen" class="modal-body">
        <fish-col span="15">
          <cart-row v-for="(item, index) in CART" :key='index' :item="item" :index="index" />
          <br>
          <cart-total-row :showPayNoChange="true"/>
        </fish-col>
        <fish-col span="2" />
        <fish-col span="7">
          <pay-pad />
        </fish-col>
      </fish-row>
      <fish-row v-else class="modal-body"  justify="center">
        <fish-col span="24">
          <cart-total-row :showPayNoChange="false"/><br>
          <pay-pad />
          <cart-row v-for="(item, index) in CART" :key='index' :item="item" :index="index" />
        </fish-col>
      </fish-row>
    </fish-modal>
</template>

<script>
import { mapGetters } from 'vuex'

import { formatSum } from '@/utils/formatter'
import CartRow from './CartRow'
import CartTotalRow from './CartTotalRow'
import PayPad from './PayPad'

export default {
  name: 'CartModal',
  components: {
    CartRow,
    CartTotalRow,
    PayPad
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['SHOW_CART', 'CART', 'CART_SUM', 'WINDOW']),
    windowWith: function () {
      return this.smallScreen ? this.WINDOW.width : this.WINDOW.width * 0.75
    },
    smallScreen: function () {
      return this.WINDOW.width < 860
    }
  },
  methods: {
    close: function () {
      this.$store.dispatch('SHOW_CART', false)
    },
    formatSum
  }
}
</script>

<style scoped>
  .cart {
    font-size: 1.3em
  }
  .modal-body {
    max-height: calc(100vh - 210px);
    overflow-y: auto;
  }
</style>
