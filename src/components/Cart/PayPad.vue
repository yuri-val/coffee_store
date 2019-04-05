<template>
  <div>
    <div>
      <fish-row class="padded-row">
        <fish-col span="12" class="demo-col">Получено:</fish-col>
        <fish-col span="12">
          <span class="align-right">{{formatSum(receive, "грн.")}}</span>
        </fish-col>
      </fish-row>
      <fish-row class="padded-row">
        <fish-col span="12" class="demo-col">Сдача:</fish-col>
        <fish-col span="12">
          <span class="align-right">{{formatSum(change, "грн.")}}</span>
        </fish-col>
      </fish-row>
    </div>
    <br>
    <div class="pay-pad">
      <fish-row v-for="(buttonsRow, indexRow) in payButtons" :key="indexRow" class="padded-row">
        <fish-col v-for="(button, index) in buttonsRow" span="6" :key="`${indexRow}_${index}`">
          <fish-button shape="circle" size="large" :type="buttonType(button)" :disabled="disableButton(button)" @click="pressButton(button)">
            {{button}}
          </fish-button>
        </fish-col>
      </fish-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { formatSum } from '@/utils/formatter'

export default {
  name: 'PayPad',
  data () {
    return {
      payButtons: [
        ['7', '8', '9', '←'],
        ['4', '5', '6'],
        ['1', '2', '3'],
        ['.', '0', 'Оплата']
      ],
      receive: 0,
      sumString: ''
    }
  },
  methods: {
    buttonType: (button) => {
      if (button === 'Оплата') return 'positive'
      if (button === '←') return 'negative'
      return 'basic'
    },
    formatSum,
    disableButton: function (button) {
      return button === 'Оплата' && !this.canBePaid
    },
    pressButton: function (button) {
      if (button === 'Оплата') return this.saveCheck()
      if (button === '←') this.sumString = this.sumString.slice(0, -1)
      else this.sumString += button
      this.receive = parseFloat(this.sumString === '' ? '0' : this.sumString)
      const coins = this.sumString.split('.')[1]
      if (coins !== undefined && coins.length > 2) this.sumString = [this.sumString.split('.')[0], coins.slice(0, 2)].join('.')
    },
    saveCheck: function () {
      this.$store.dispatch('SAVE_CHECK', this.CART)
      this.$store.dispatch('SHOW_CART', false)
      this.$message.success('Чек успешно сохранен!', 5000)
    }
  },
  computed: {
    ...mapGetters(['CART_SUM', 'CART']),
    change: function () {
      return this.canBePaid ? this.receive - this.CART_SUM : 0
    },
    canBePaid: function () {
      return this.receive - this.CART_SUM >= 0
    }
  }

}
</script>

<style scoped>
  .pay-pad {
    font-family: 'Courier New', Courier, monospace !important;
  }
  .padded-row {
    padding-bottom: 10px !important;
  }
</style>
