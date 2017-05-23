<template>
  <div>
    <h2 class="h3">dashboard</h2>
    <search-bar />
    <cb-show-out-of-stock />
    <btn-add-item />
  </div>
</template>

<script>
  import searchBar from './searchBar';
  import cbShowOutOfStock from './cbShowOutOfStock';
  import btnAddItem from './btnAddItem';

  export default {
    name: 'dashboard',
    components: {
      searchBar,
      cbShowOutOfStock,
      btnAddItem,
    },
  };
</script>
