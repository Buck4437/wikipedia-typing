<template>
  <div>
    <button v-for="option in options"
        @click="$emit('selected', option.value)"
        :key="option.value">
        {{ option.text }}
    </button>
  </div>
</template>

<script setup lang="ts">

defineEmits<{
  selected: [value: string]
}>();

const options = [
    {
        text: "Import new article",
        value: "import"
    },
    {
        text: "Switch article",
        value: "switch"
    }
]
</script>

<style scoped>
button {
  margin-right: 1rem;
  padding: 0.3rem 0.3rem;
  cursor: pointer;
}
</style>