<template>
  <fish-card :key="coffeeCard.id" color="black">
    <fish-tag size="massive" index="top right" attached="top right" color="yellow">{{price(coffeeCard.price)}}</fish-tag>
    <div class="img-contain" slot="image"  >
      <img shape="circle" :src="`${coffeeCard.photo}?random=${coffeeCard.id}`" width="100%" :class="imageClass" @click="addToCart(coffeeCard)"/>
    </div>
    <div slot="header"><strong>{{coffeeCard.name}}</strong></div>
    <div slot="footer">
      <div class="align-right">
        <fish-buttons>
          <fish-button @click="count > 1 && count--">-</fish-button>
          <fish-button disabled>{{count}}</fish-button>
          <fish-button @click="count++">+</fish-button>
        </fish-buttons>
        <fish-button type="positive" @click="addToCart(coffeeCard)">
          <i class="fas fa-cart-arrow-down"></i> В чек
        </fish-button>
      </div>
    </div>
  </fish-card>
</template>

<script>
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
  methods: {
    price: function (coffeePrice) {
      return formatSum(coffeePrice, 'грн.')
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
</style>
