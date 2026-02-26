<template>
  <div class="search-component">
    Paste a wikipedia article URL:
    <input v-model="url">
    <button @click="submit">Submit</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['search']);
const url = ref('')

const submit = () => {
  emit('search', url.value)
}
</script>

<style scoped>

</style>
