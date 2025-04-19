<template>
  <div class="alert" :class="type" v-if="message">
    <span class="alert-message">{{ message }}</span>
    <button class="close-btn" @click="$emit('close')">×</button>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    message: String,
    type: {
      type: String,
      default: 'error',
      validator: value => ['error', 'warning', 'success', 'info'].includes(value)
    }
  }
}
</script>

<style scoped>
.alert {
  padding: 10px 15px;
  border-radius: 4px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.error {
  background-color: #ffebee;
  color: #c62828;
}
.warning {
  background-color: #fff8e1;
  color: #ff8f00;
}
.success {
  background-color: #e8f5e9;
  color: #2e7d32;
}
.info {
  background-color: #e3f2fd;
  color: #1565c0;
}
.close-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: inherit;
}
</style>