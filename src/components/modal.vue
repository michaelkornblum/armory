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
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="show = false">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'modal',
    data() {
      return {
        show: true,
      };
    },
  };
</script>

<style>
  .modal-dialog {
    position: fixed;
    z-index: 9999;
    height: 100%;
    width: 100%;
    left: 50%;
    top: 30%;
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
