<template>
  <fish-card :key="coffeeCard.id" color="black">
    <fish-tag size="medium" index="top right" attached="top right" color="yellow" class="price">
      {{price(coffeeCard.price)}}
    </fish-tag>
    <div class="img-contain" slot="image"  >
      <img shape="circle" :src="`${coffeeCard.photo}?random=${coffeeCard.id}`" width="100%" :class="imageClass" @click="addToCart(coffeeCard)"/>
    </div>
    <div slot="header"><strong>{{coffeeCard.name}}</strong></div>
    <div slot="footer">
      <fish-row class="unset-wrap align-right">
        <fish-buttons size="medium">
          <fish-button @click="count > 1 && count--">-</fish-button>
          <fish-button disabled>{{count}}</fish-button>
          <fish-button @click="count++">+</fish-button>
        </fish-buttons>
        <fish-button size="medium" type="positive" @click="addToCart(coffeeCard)">
          <i class="fas fa-cart-arrow-down"></i> В чек
        </fish-button>
      </fish-row>
    </div>
  </fish-card>
</template>

<script>
import { mapGetters } from 'vuex'

import { formatSum } from '@/utils/formatter'

export default {
  name: 'ListItem',
  props: ['coffeeCard'],
  data () {
    return {
      count: 1,
      imageClass: ''
    }
  },
  computed: {
    ...mapGetters(['CURRENCY'])
  },
  methods: {
    price: function (coffeePrice) {
      return formatSum(coffeePrice, this.CURRENCY)
    },
    addToCart: function (item) {
      this.$store.dispatch('ADD_TO_CART', { ...item, count: this.count })
      this.count = 1
      this.imageClass = 'spin animated'
      setTimeout(() => { this.imageClass = '' }, 1000)
    }
  }
}
</script>

<style scoped>
  .spin {
      width:100%;
      height:100%;
      border-radius: 50%;
  }
  @keyframes spin {
      from {
          transform:rotate(0deg);
      }
      to {
          transform:rotate(360deg);
      }
  }
  .spin.animated {
      animation-name: spin;
      animation-duration: 1000ms;
      animation-iteration-count: 1;
      animation-timing-function: ease;
  }
  .price {
    border-radius: 50em !important;
    top: 43px !important;
    font-family: 'Courier New', Courier, monospace !important;
  }
  .unset-wrap {
    flex-wrap: unset !important;
    width: auto !important;
  }
</style>
