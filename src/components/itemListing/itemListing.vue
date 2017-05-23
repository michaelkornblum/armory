<template>
  <div>
    <h2 class="h3">item listing</h2>
    <item-nav></item-nav>
    <table-armory></table-armory>
  </div>

</template>

<script>
  import itemNav from './itemNav';
  import tableArmory from './tableArmory';

  export default {
    name: 'item-listing',
    components: {
      itemNav,
      tableArmory,
    },
  };
</script>
