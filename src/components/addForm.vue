<template>
  <div>
    <form>
      <div class="form-group" v-for="(value, key) in item">
        <label class="form-label" :for="key">{{key}}</label>

        <input v-if="typeof value == 'number'"
          class="form-control"
          :type="value"
          @keyup="strToNum($event, key)" @click="strToNum($event, key)"
        >
        <input v-else
          class="form-control"
          :type="value"
          @keyup="setNewItem($event, key)"
        >
      </div>
    </form>
  </div>
</template>

<script>
  import bus from '../main';

  export default {
    props: [
      'item',
    ],
    data() {
      return {
        newItem: {},
      };
    },
    methods: {
      setNewItem(event, key) {
        this.newItem[key] = event.target.value;
        bus.$emit('addedItem', this.newItem);
      },
      strToNum(event, key) {
        this.newItem[key] = parseFloat(event.target.value);
        bus.$emit('addedItem', this.newItem);
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
