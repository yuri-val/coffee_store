<template>
  <fish-row :key='index' :class="`row-${index % 2}`">
    <fish-col span="10">{{item.name}}</fish-col>
    <fish-col span="9">
      <fish-buttons v-if="editRow" size="small" class="align-right">
        <fish-button @click="item.count > 1 && item.count--">-</fish-button>
        <fish-button disabled>{{item.count}}</fish-button>
        <fish-button @click="item.count++">+</fish-button>
      </fish-buttons>
      <span v-else class="align-right">
        {{sumFormat(item)}}<br>
        {{formatSum(item.price * item.count, CURRENCY)}}
        </span>
    </fish-col>
    <fish-col span="5">
      <div class="align-right">
        <fish-button type="positive" shape="circle" @click="editRow=!editRow" size="small">
          <i :class="`far fa-${editRow ? 'save' : 'edit'}`"></i>
        </fish-button>
        <fish-button type="negative" shape="circle" size="small" @click="deleteRow">
          <i class="far fa-trash-alt"></i>
        </fish-button>
      </div>
    </fish-col>
  </fish-row>
</template>

<script>
import { mapGetters } from 'vuex'

import { formatSum } from '@/utils/formatter'

export default {
  name: 'CartRow',
  props: ['item', 'index'],
  data () {
    return {
      editRow: false
    }
  },
  computed: {
    ...mapGetters(['CURRENCY'])
  },
  methods: {
    formatSum,
    sumFormat: (item) => `${formatSum(item.price)} x ${item.count}`,
    deleteRow: function () {
      this.$store.dispatch('DELETE_CART_ITEM', this.index)
    }
  }

}
</script>

<style scoped>
  .row-0 {
    background-color: beige
  }
  .row-1 {
    background-color: bisque
  }
</style>
