<template>
  <table class="table table-striped table-responsive">
    <thead-armory></thead-armory>

      <tr-armory></tr-armory>

  </table>
</template>


<script>
  import theadArmory from './theadArmory';
  import trArmory from './trArmory';

  export default {
    name: 'table-armory',
    components: {
      theadArmory,
      trArmory,
    },
  };
</script>

<style>
  .table > tbody > tr > td {
    vertical-align: middle;
  }
</style>
