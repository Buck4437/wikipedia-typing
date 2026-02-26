<template>
  <div>
    <div v-for="(line, index) in displayed" :key="index">
      {{ line }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{ text: string }>();

// computed property that updates the displayed text as the prop changes
const displayed = computed(() => {
  const rawText = props.text;
  const displayed = rawText.replace(/\n+/g, '\n')
    .split('\n')
    .map(x => x.trim())
    .map(x => x.replace(/^==+(.+?)==+$/g, '$1'))
    .map(x => x.trim())
  return displayed;
});
</script>
