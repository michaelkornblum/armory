<template>
  <div v-if="show == true" class="modal-wrapper">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Edit Item</h5>
        <button type="button" class="close" @click="show = false">
          <span>&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <component :is="currForm" :item="item"></component>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="show = false">Close</button>
        <button type="button" class="btn btn-primary" @click="updateItem(item)">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import bus from '../main';
  import editForm from './editForm';

  export default {
    name: 'modal',
    components: {
      editForm,
    },
    data() {
      return {
        show: false,
        currForm: null,
        item: {},
        newItem: {},
        index: null,
      };
    },
    methods: {
      updateItem() {
        this.item = this.newItem;
        bus.$emit('updatedItem', { item: this.item, index: this.index });
        this.show = false;
      },
    },
    created() {
      bus.$on('editItem', (payload) => {
        this.currForm = payload.form;
        this.item = payload.item;
        this.index = payload.index;
        this.show = true;
      });
      bus.$on('editedItem', (payload) => {
        this.newItem = payload;
      });
    },
  };
</script>

<style>
  .modal-dialog {
    position: absolute;
    z-index: 9999;
    height: 100%;
    width: 100%;
    left: 50%;
    top: 30vh;
    transform: translate(-50%, -25%);
  }
  .modal-wrapper {
    position: fixed;
    z-index: 9998;
    background-color: rgba(0, 0, 0, .5);
    height: 105%;
    width: 100%;
    top: -1%;
  }
</style>
