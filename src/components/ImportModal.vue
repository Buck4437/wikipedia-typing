<template>
  <BaseModal @close="$emit('close')">
      Paste a wikipedia article URL:
      <input v-model="url" ref="url-box"
        placeholder="Example: https://en.wikipedia.org/wiki/Laid-Back_Camp"/>
      <span style="color: red; font-size: 0.8rem;">
        {{ errorMessage }}
      </span>
      <button @click="handleImportUrl" :disabled="isLoading">
        {{ isLoading ? "Loading..." : "Submit" }}
      </button>
  </BaseModal>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted, ref } from 'vue';
import BaseModal from './BaseModal.vue';

const emit = defineEmits(['importText', 'close']);
const url = ref('')
const isLoading = ref(false);
const inputBox = useTemplateRef('url-box');
const errorMessage = ref(' ');

function generateQueryString(url: string) {
  const host = new URL(url).host;
  const pageTitle = url.split('/').pop()?.replace(/_/g, ' ');
  const string = `https://${host}/w/api.php?origin=*&action=query&format=json&prop=extracts&explaintext=true&titles=${pageTitle}`;
  return string;
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleImportUrl();
  }
});

async function handleImportUrl() {
  isLoading.value = true;
  try {
    const queryUrl = generateQueryString(url.value);

    fetch(queryUrl)
      .then(response => response.json())
      .then(data => {
        const page = Object.values(data.query.pages)[0] as {title: string, extract: string};
        const title = page.title;
        const content = page.extract;
        const combinedText = `${title}\n\n${content}`;

        // Check if the wiki page is in chinese
        const lang = new URL(url.value).hostname.split('.')[0];
        console.log(lang)
        if (lang === 'zh') {
          // Convert to simplified chinese
          const chineseLang = new URL(url.value).pathname.split('/')[1] || 'zh-hant';
          import('zhconv').then(module => {
            const convertedText = module.zhconv(combinedText, chineseLang);
            if (!convertedText) {
              console.error('Error converting text');
              emit('importText', combinedText);
            } else {
              emit('importText', convertedText);
            }
            isLoading.value = false;
          });
        } else {
          emit('importText', combinedText);
          isLoading.value = false;
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        errorMessage.value = 'Failed to fetch data from the URL';
        isLoading.value = false;
      });
  } catch (error) {
    console.error(error);
    errorMessage.value = 'Invalid URL';
    isLoading.value = false;
  } 
}

onMounted(() => {
  // Focus the input box when the modal is mounted
  inputBox?.value?.focus();
});
</script>

<style scoped>
input {
  width: 75%;
  padding: 0.5rem;
  height: 45%;
  font-size: 1rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>
