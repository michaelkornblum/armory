<template>
  <div class="form-group">
    <div class="input-group form-inline">
      <input class="form-check" id="showOutOfStock" type="checkbox">
      <label for="showOutOfStock">show out of stock items</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cb-show-out-of-stock',
  };
</script>

<style>
  #showOutOfStock {
    margin-right: .5em;
    height: 1.25em;
    width: 1.25em;
  }
</style>
