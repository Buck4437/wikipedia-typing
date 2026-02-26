<template>
  <header>
    Wikipedia Typing
  </header>

  <main>
    <SearchTab @search="handleSearch" />
    <TypingTab :text="displayText" />
  </main>
</template>

<script setup lang="ts">
import wiki from 'wikipedia';
import SearchTab from './components/SearchComponent.vue'
import TypingTab from './components/TypingTab.vue'
import { ref } from 'vue';

const displayText = ref('');

function generateQueryString(url: string) {
  const host = new URL(url).host;
  const pageTitle = url.split('/').pop()?.replace(/_/g, ' ');
  const string = `https://${host}/w/api.php?origin=*&action=query&format=json&prop=extracts&explaintext=true&titles=${pageTitle}`;
  return string;
}

async function handleSearch(input: string) {
  try {
    const url = generateQueryString(input);

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const page = Object.values(data.query.pages)[0] as {title: string, extract: string};
        const title = page.title;
        const content = page.extract;
        const combinedText = `${title}\n\n${content}`;
        console.log(combinedText)
        displayText.value = combinedText;
      })
      .catch(error => console.error('Error fetching data:', error));
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
