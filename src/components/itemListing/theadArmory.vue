<template>
  <thead>
    <tr>
      <th>#</th>
      <th>name</th>
      <th v-for="header in headers">{{header}}</th>
      <th>cost</th>
      <th>qty</th>
      <th>actions</th>
    </tr>
  </thead>
</template>

<script>
  import bus from '../../main';
  import data from '../../data';

  export default {
    name: 'thead-armory',
    data() {
      return {
        data,
        headers: data.melee.headers,
      };
    },
    created() {
      bus.$on('tableChange', (payload) => {
        this.headers = this.data[payload].headers;
      });
    },
  };
</script>
