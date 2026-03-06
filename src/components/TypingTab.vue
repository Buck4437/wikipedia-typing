<template>
  <div>
    <div v-if="hasText">
      <table>
        <tr v-for="(line, index) in parsedData" :key="index">
          <td>
            <div class="text-display">
              <span v-for="(char, charIndex) in line" 
                :key="charIndex"
                :class="{
                  'correct': getState(index, charIndex, char) === 'correct',
                  'incorrect': getState(index, charIndex, char) === 'incorrect',
                  'space-incorrect': isSpace(char) && getState(index, charIndex, char) === 'incorrect'
                }">
                {{ char }}
              </span>
            </div>
            <div class="input-container">
              <input 
                type="text" 
                v-model="inputs[index]"
                ref="inputRefs"
                @keydown="e => handleKeyDown(e, index)"
                />
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      Import a wikipedia article or choose an existing article to start typing!
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, watch, computed } from 'vue';
const props = defineProps<{ parsedData: string[][], typedData: string[] }>();
const emit = defineEmits<{ updateTypedData: [typedData: string[]] }>();

const hasText = computed(() => props.parsedData.length > 0);
const inputs = ref<string[]>([]);
const inputRefs = ref<HTMLInputElement[]>([]);

const spaceRegex = /\s/;


const isSpace = (char: string) => spaceRegex.test(char);

const getState = (lineIndex: number, charIndex: number, correctChar: string) => {
  const input = inputs.value[lineIndex];
  if (!input || charIndex >= input.length) return '';
  return input[charIndex] === correctChar ? 'correct' : 'incorrect';
}

const handleKeyDown = (event: KeyboardEvent, index: number) => {
  const targetLength = props.parsedData[index]?.length ?? 0;
  const currentLength = inputs.value[index]?.length ?? 0;
  if (event.key.length === 1 && currentLength >= targetLength) {
    event.preventDefault();
    const nextIndex = index + 1;
    if (nextIndex < inputRefs.value.length) {
      inputRefs.value[nextIndex]?.focus();
    }
    return;
  }
  if (event.key === 'Enter') {
    event.preventDefault();
    const nextIndex = index + 1;
    if (nextIndex < inputRefs.value.length) {
      inputRefs.value[nextIndex]?.focus();
    }
  } else if (event.key === 'Backspace' && inputs.value[index] === '') {
    event.preventDefault();
    const prevIndex = index - 1;
    if (prevIndex >= 0) {
      inputRefs.value[prevIndex]?.focus();
    }
  }
}

const handleInput = (event: Event, index: number) => {
  const targetLength = props.parsedData[index]?.length ?? 0;
  const currentLength = inputs.value[index]?.length ?? 0;
  
  // Move to next input when current line is completed
  if (currentLength >= targetLength) {
    const nextIndex = index + 1;
    if (nextIndex < inputRefs.value.length) {
      // Use setTimeout to ensure the input update is processed first
      setTimeout(() => {
        inputRefs.value[nextIndex]?.focus();
      }, 0);
    }
  }
}

// Emit updates to parent when inputs change
watch(inputs, (newInputs) => {
  // Check if the child is same as the parent
  if (JSON.stringify(newInputs) === JSON.stringify(props.typedData)) return;
  emit('updateTypedData', newInputs);
}, { deep: true });

// Sync inputs from parent's typedData
watch(() => props.typedData, (newTypedData) => {
  inputs.value = newTypedData;
}, { immediate: true });

</script>

<style scoped>

table {
  width: 100%;
  border-collapse: collapse;
}

.text-display,
.input-container input {
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  line-height: 1.5;
  padding: 8px;
  margin: 0;
}

.input-container input {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: blue;
}

.input-container input:focus {
  outline: none;
  border-color: #4CAF50;
}

.correct {
  color: green;
}

.incorrect {
  color: red;
}

.space-incorrect {
  background-color: #ff6b6b;
  color: #111;
}

</style>