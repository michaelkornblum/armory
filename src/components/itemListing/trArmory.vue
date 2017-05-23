<template>
  <tbody>
    <tr v-for="item, index in items">
      <td>{{index + 1}}</td>
      <td v-for="value in item">
        {{value}}
      </td>
      <td class="btn-group">
        <button class="btn btn-success">sell</button>
        <button class="btn btn-warning">edit</button>
        <button class="btn btn-danger">delete</button>
      </td>
    </tr>
  </tbody>
</template>
