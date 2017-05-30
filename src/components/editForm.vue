/* eslint-disable */

<template>
  <div>
    <form>
      <div class="form-group" v-for="(value, key) in item">
        <label class="form-label" :for="key">{{key}}</label>

        <input v-if="typeof value == 'string'"
         class="form-control"
         type="text"
         :value="value"
         @keyup="setNewItem($event, key)"
         >

        <input v-else
        class="form-control"
        type="number"
        :value="value"
        @keyup="setNewItem($event, key)"
        >

      </div>
    </form>
  </div>
</template>

<script>
  export default {
    props: [
      'item',
    ],
    data() {
      return {
        newItem: {},
      };
    },
    created() {
      Object.keys(this.item).map((key) => {
        this.newItem[key] = this.item[key];
        return this.newItem;
      }, {});
    },
    methods: {
      setNewItem(event, key) {
        this.newItem[key] = event.target.value;
      },
    },
  };
</script>

<style>
  form {
    height: 20em;
    width: 100%;
    overflow-y: scroll;
  }
</style>
