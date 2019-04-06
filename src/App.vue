<template>
  <div id="app">
    <fish-layout class="">
    <nav slot="header">
      <div class="logo align-left">
        Coffee Shop
      </div>
      <div class="align-right header-actions">
        <fish-button style="position: relative;" shape="circle" @click="showCart">
          <i class="fas fa-shopping-cart"></i> {{formatSum(CART_SUM, CURRENCY)}}
          <fish-tag v-if="CART_COUNT > 0" index="floating" floating color="negative" shape="circle">
            {{CART_COUNT}}
          </fish-tag>
        </fish-button>
        <fish-button shape="circle" @click="openSettings" v-if="!SHOW_SETTINGS">
          <i class="fas fa-cogs"></i>
        </fish-button>
      </div>
    </nav>
    <div slot="content" id="main">
      <cart />
      <slideout-panel />
      <router-view/>
    </div>
  </fish-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { formatSum } from '@/utils/formatter'
import Cart from '@/components/Cart/CartModal'
import SettingPanel from '@/components/Settings/SettingPanel'

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
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    ...mapGetters(['SHOW_SETTINGS', 'CART_COUNT', 'CART_SUM', 'CURRENCY'])
  },
  methods: {
    formatSum,
    showCart: function () {
      this.$store.dispatch('SHOW_CART', true)
    },
    handleResize () {
      this.$store.dispatch('SET_WINDOW_SIZE', window)
    },
    openSettings () {
      this.$showPanel({ component: SettingPanel, width: 300, disableBgClick: true })
      this.$store.dispatch('SHOW_SETTINGS', true)
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
  .padded-row {
    padding-bottom: 10px !important;
    flex-wrap: unset !important;
  }

</style>
