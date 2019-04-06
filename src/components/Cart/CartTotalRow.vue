<template>
  <fish-row :key='9999' class="unset-wrap">
    <fish-col span="10"><b>К оплате:</b></fish-col>
    <fish-col span="8"><b class="align-right">{{formatSum(CART_SUM, 'грн.')}}</b></fish-col>
    <fish-col span="4" v-if="showPayNoChange">
      <fish-button shape="circle" type="positive" @click="saveCheck" size="small">
        Оплата без сдачи
      </fish-button>
    </fish-col>
  </fish-row>
</template>

<script>
import { mapGetters } from 'vuex'

import { formatSum } from '@/utils/formatter'

export default {
  props: ['showPayNoChange'],
  name: 'CartTotalRow',
  computed: {
    ...mapGetters(['CART', 'CART_SUM'])
  },
  methods: {
    saveCheck: function () {
      this.$store.dispatch('SAVE_CHECK', this.CART)
      this.$store.dispatch('SHOW_CART', false)
      this.$message.success('Чек успешно сохранен!', 5000)
    },
    formatSum
  }
}
</script>

<style>
  .unset-wrap {
    flex-wrap: unset !important;
  }
</style>
