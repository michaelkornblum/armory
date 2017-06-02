

<template>
  <tbody>
    <tr :class="{outOfStock: item.qty == 0}" v-for="(item, index) in filteredItems">
      <td>{{index + 1}}</td>
      <td v-for="(value, key) in item">
        <span v-if="key == 'cost'">
          <span v-if="typeof value === 'number'">{{value | currency}} </span>
          <span v-else>{{value}}</span>
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
        <button class="btn btn-warning" @click="editItem(item, index)">edit</button>
        <button class="btn btn-danger" @click="deleteItem(index)">delete</button>
      </td>
    </tr>
    {{showOutOfStock}}
  </tbody>
</template>

<script>
  import cloneDeep from 'lodash.clonedeep';
  import bus from '../../main';
  import data from '../../data';


  export default {
    name: 'tr-armory',
    data() {
      return {
        Data: {},
        items: [],
        category: '',
        showOutOfStock: true,
      };
    },
    created() {
      this.Data = cloneDeep(data);
      this.category = 'melee';
      this.items = this.Data[this.category].items;
      bus.$on('tableChange', (payload) => {
        this.category = payload;
        this.items = this.Data[payload].items;
      });
      bus.$on('outOfStockToggle', (payload) => {
        this.showOutOfStock = payload;
      });
      bus.$on('updatedItem', (payload) => {
        this.items.splice(payload.index, 1, payload.item);
      });
    },

    /* eslint no-param-reassign: ["error", { "props": false }] */
    methods: {
      changeQty(item, delta) {
        item.qty += delta;
      },
      deleteItem(index) {
        this.items.splice(index, 1);
      },
      editItem(item, index) {
        bus.$emit('editItem', {
          item,
          index,
          form: 'editForm',
        });
      },
    },
    filters: {
      currency(value) {
        if (typeof value === 'number') {
          const newValue = value.toFixed(2);
          return `${newValue}gp`;
        }
        return value;
      },
    },
    computed: {
      filteredItems() {
        if (!this.showOutOfStock) {
          const filteredItems = this.items.filter(item => item.qty > 0);
          return filteredItems;
        }
        return this.items;
      },
    },
  };
</script>

<style>
  .outOfStock {
    color: red;
    font-weight: bold;
  }
</style>
