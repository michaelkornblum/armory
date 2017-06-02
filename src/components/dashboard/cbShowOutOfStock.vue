<template>
  <div class="form-group">
    <div class="input-group form-inline">
      <input class="form-check" id="showOutOfStock" type="checkbox" v-model="outOfStockShow" @click="cbShowOutOfStock" checked>
      <label for="showOutOfStock">show out of stock items</label>
    </div>
  </div>
</template>

<script>
  import bus from '../../main';

  export default {
    name: 'cb-show-out-of-stock',
    data() {
      return {
        outOfStockShow: true,
      };
    },
    methods: {
      cbShowOutOfStock() {
        bus.$emit('outOfStockToggle', this.outOfStockShow);
      },
    },
  };
</script>

<style>
  #showOutOfStock {
    margin-right: .5em;
    height: 1.5em;
    width: 1.5em;
  }
</style>
