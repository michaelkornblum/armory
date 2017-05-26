<template>
  <div class="container-fluid" id="app">
    <div class="row">
      <header class="col-sm-12">
        <h1 class="h2">Armory Inventory Control</h1>
      </header>
    </div>
    <div class="row">
<<<<<<< HEAD
      <section class="dashboard col-lg-3 col-md-4">
        <dashboard />
      </section>
      <section class="item-listing col-lg-9 col-md-8">
=======
      <section class="dashboard col-lg-3">
        <dashboard />
      </section>
      <section class="item-listing col-lg-9">
>>>>>>> 6139f57fb9194cbf4e04a8236ee4b4584be91c0f
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
