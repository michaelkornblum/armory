<template>
  <table class="table table-striped table-responsive table-bordered">
    <thead-armory></thead-armory>
    <tbody>
      <tr v-for="item, index in items">
        <td>{{index + 1}}</td>
        <td v-for="value in item">
          {{value}}
        </td>
        <td class="btn-group">
          <button class="btn btn-warning">edit</button>
          <button class="btn btn-danger">delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script>
  import theadArmory from './theadArmory';
  import meleeWeapons from '../../data/meleeWeapons';

  export default {
    name: 'table-armory',
    components: {
      theadArmory,
    },
    data() {
      return meleeWeapons;
    },
  };
</script>

<style>
  .table > tbody > tr > td {
    vertical-align: middle;
  }
</style>
