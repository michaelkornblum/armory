<template>
  <div class="form-group">
    <div class="input-group">
      <input class="form-control" type="text" :placeholder="placeholder" v-model="searchTerm" @keyup.enter="changeText">
      <button class="btn btn-info" @click="changeText">go</button>
    </div>
  </div>
</template>

<script>
  import bus from '../../main';

  export default {
    name: 'search-bar',
    data() {
      return {
        searchTerm: '',
        items: 'melee',
      };
    },
    created() {
      bus.$on('tableChange', (payload) => {
        this.items = payload;
      });
    },
    methods: {
      changeText() {
        bus.$emit('changeSearchTerm', this.searchTerm);
      },
    },
    computed: {
      placeholder() {
        return `search ${this.items} items`;
      },
    },
  };
</script>
