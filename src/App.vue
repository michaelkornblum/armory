<template>
  <div class="container-fluid" id="app">
    <div class="row">
      <header class="col-sm-12">
        <h1 class="h2">Armory Inventory Control</h1>
      </header>
    </div>
    <div class="row">
      <section class="dashboard col-lg-3">
        <dashboard />
      </section>
      <section class="item-listing col-lg-9">
        <item-listing />
      </section>
    </div>
  </div>
</template>

<script>
import dashboard from './components/dashboard/dashboard';
import itemListing from './components/itemListing/itemListing';

export default {
  name: 'app',
  components: {
    dashboard,
    itemListing,
  },
};
</script>

<style>
  .container-fluid, .dashboard, .item-listing {
    margin-top: .5em;
  }

  header {
    border-bottom: 2px solid #ccc;
    margin-bottom: .25em;
  }

  .item-listing {
    border-left: 2px solid #ccc;
  }

</style>
