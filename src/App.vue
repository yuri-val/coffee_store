<template>
  <div id="app">
    <fish-layout class="">
    <nav slot="header">
      <div class="logo align-left">
        Coffee Shop
      </div>
      <div class="align-right header-actions">
        <fish-button style="position: relative;" shape="circle" @click="showCart">
          <i class="fas fa-shopping-cart"></i> {{formatSum(CART_SUM, 'грн.')}} 
          <fish-tag v-if="CART_COUNT > 0" index="floating" floating color="negative" shape="circle">
            {{CART_COUNT}}
          </fish-tag>
        </fish-button>
        <fish-button shape="circle" @click="showSettings=!showSettings">
          <i class="fas fa-cogs"></i>
        </fish-button>
        <fish-buttons v-if="showSettings">
          <fish-button @click="changeCards(-1)">-</fish-button>
          <fish-button disabled>Карточек в ряд: {{CARDS_IN_ROW}}</fish-button>
          <fish-button @click="changeCards(1)">+</fish-button>
        </fish-buttons>
      </div>   
    </nav>
    <div slot="content" id="main">
      <cart />
      <router-view/>  
    </div>
  </fish-layout>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

import {formatSum} from '@/utils/formatter'
import Cart from '@/components/Cart/CartModal'

export default {
  name: 'App',
  components: {
    Cart
  },
  data () {
    return {
      showSettings: false
    }
  },
  computed: {
    ...mapGetters(['CARDS_IN_ROW', 'CART_COUNT', 'CART_SUM'])
  },
  methods: {
    changeCards: function (count) {
      this.$store.dispatch('SAVE_CARDS_IN_ROW', this.CARDS_IN_ROW + count)
    },
    formatSum: (sum, currency) => formatSum(sum, currency),
    showCart: function() {
      this.$store.dispatch('SHOW_CART', true)
    }
  }
}
</script>

<style>
  .fish.layout > .header {
    overflow: hidden;
    background: #e0f0fa;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    z-index: 999;
  }
  #main {
    z-index: 0;
    position: absolute;
    margin-top: 70px; /* Add a top margin to avoid content overlay */
  }
  .fish.layout .logo {
    padding: 1em;
  }
  .logo {
    padding: 0.7em .8em;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .header-actions {
    padding: 1em;
  }
  .align-left {
	  float: left;
  }
  .align-right {
    float: right;
  }

</style>
