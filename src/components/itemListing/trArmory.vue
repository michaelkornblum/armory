<template>
  <tbody>
    <tr :class="{outOfStock: item.qty == 0}" v-for="(item, index) in items">
      <td>{{index + 1}}</td>
      <td v-for="(value, key) in item">
        <span v-if="key == 'cost'">
          <span v-if="typeof value === 'number'">$</span>{{value | currency}}
        </span>
        <span v-else-if="key == 'move' || key == 'range'">
          {{value}}ft.
        </span>
        <span v-else-if="category == 'armor' && key == 'enc'">
          {{value}}lb.
        </span>
        <span v-else>
          {{value}}
        </span>
      </td>
      <td class="btn-group">
        <button class="btn btn-info":disabled="item.qty == 6" @click="changeQty(item, 1)">add</button>
        <button :disabled="item.qty == 0" class="btn btn-success" @click="changeQty(item, -1)">sell</button>
        <button class="btn btn-warning">edit</button>
        <button class="btn btn-danger">delete</button>
      </td>
    </tr>
  </tbody>
</template>

<script>
  import bus from '../../main';
  import data from '../../data';

  export default {
    name: 'tr-armory',
    data() {
      return {
        data,
        items: data.melee.items,
        category: 'melee',
      };
    },
    created() {
      bus.$on('tableChange', (payload) => {
        this.category = payload;
        this.items = this.data[this.category].items;
      });
    },
    /* eslint no-param-reassign: ["error", { "props": false }] */

    methods: {
      changeQty: (item, delta) => {
        item.qty += delta;
      },
    },
    filters: {
      currency: (value) => {
        if (typeof value === 'number') {
          return value.toFixed(2);
        }
        return value;
      },
    },
  };
</script>

<style>
  .outOfStock {
    color: red;
  }
</style>
