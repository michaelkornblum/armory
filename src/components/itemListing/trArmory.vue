<template>
  <tbody>
    <tr v-for="(item, index) in items">
      <td>{{index + 1}}</td>
      <td v-for="(value, key) in item">
        <span v-if="key == 'cost'">
          <span v-if="value != 'N/A'">$</span> {{value | currency}}
        </span>
        <span v-else>
          {{value}}
        </span>
      </td>
      <td class="btn-group">
        <button class="btn btn-success">sell</button>
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
      };
    },
    created() {
      bus.$on('tableChange', (payload) => {
        this.items = this.data[payload].items;
      });
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
