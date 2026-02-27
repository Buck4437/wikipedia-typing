<template>
  <div class="modal-mask">
    <div class="modal">
      <button class="close-button" @click="$emit('close')">×</button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background-color: white;
  border: 2px solid black;
  padding: 2rem;
  width: 85%;
  max-width: 850px;
}

.close-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 2rem;
  line-height: 1;
  padding: 0;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
}

.close-button:hover {
  color: #666;
}
</style>
