<template>
  <ul class="nav nav-tabs">
    <li class="nav-item" v-for="table in tables" >
      <a class="nav-link" :class="isActiveTable(table) ? 'active' : ''" @click="setTable(table)">
        {{table}}
      </a>
    </li>
  </ul>
</template>

<script>
  import bus from '../../main';

  export default {
    name: 'item-nav',
    data() {
      return {
        tables: [
          'melee',
          'missile',
          'armor',
          'ammo',
        ],
        activeTable: 'melee',
      };
    },
    methods: {
      setTable(newTable) {
        this.activeTable = newTable;
        bus.$emit('tableChange', this.activeTable);
      },
      isActiveTable(table) {
        return this.activeTable === table;
      },
    },
  };
</script>
