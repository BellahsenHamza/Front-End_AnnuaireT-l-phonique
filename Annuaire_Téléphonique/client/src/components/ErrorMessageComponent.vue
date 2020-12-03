<template>
  <div class="error-message message is-danger">
      <div class="message-body">{{error.message}}</div>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    error: Object,
  },
};
</script>

<style lang="scss" scoped>
  .message {
    text-align: left;
    margin: 0;
  }
  .message-body{
    padding: 1px;
    margin: 5px;
  }
</style>
