<template>
  <div class="form-group">
    <button class="btn btn-info" @click="btnClick">add new item</button>
  </div>
</template>

<script>
import cloneDeep from 'lodash.clonedeep';
import bus from '../../main';
import data from '../../data';

export default {
  name: 'btn-add-item',
  data() {
    return {
      Data: {},
      formFields: {},
      category: '',
    };
  },
  created() {
    this.Data = cloneDeep(data);
    this.category = 'melee';
    this.formFields = this.Data[this.category].formFields;
    bus.$on('tableChange', (payload) => {
      this.category = payload;
      this.formFields = this.Data[payload].formFields;
    });
  },
  methods: {
    btnClick() {
      bus.$emit('addItem', { formFields: this.formFields, form: 'addForm', action: 'add' });
    },
  },
};
</script>
