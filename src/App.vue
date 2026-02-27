<template>
  <header>
    Wikipedia Typing
  </header>

  <main>
    <TopBar 
      @selected="handleSelect" 
      class="top-bar" />
    <ImportModal v-if="displayedModal == 'import'" 
      @import-text="importText" 
      @close="closeModels"/>
    <SwitchModal v-if="displayedModal == 'switch'" 
      :articles="articles"
      @select-article="selectArticle"
      @delete-article="deleteArticle"
      @close="closeModels"/>
    <div class="article-info">
      Current Article: {{ currentArticle.title }}
    </div>
    <TypingTab 
      :parsed-data="currentArticle.parsedData" 
      :typed-data="currentArticle.typedData"
      @update-typed-data="updateTypedData"
      class="typing-tab" />
  </main>
</template>

<script setup lang="ts">
import TopBar from './components/TopBar.vue';
import ImportModal from './components/ImportModal.vue'
import SwitchModal from './components/SwitchModal.vue';
import TypingTab from './components/TypingTab.vue'
import { watch, ref, computed, onMounted } from 'vue';

type Article = {
  title: string;
  creationDate: Date | undefined;
  rawText: string;
  parsedData: string[][];
  typedData: string[];
}

const articles = ref<Article[]>([]);
const currentArticleIndex = ref(-1);
const displayedModal = ref('');

function handleSelect(option: string) {
  displayedModal.value = option;
}

function closeModels() {
  displayedModal.value = '';
}

function importText(text: string) {
  const rawText = text;
  const parsedData = parseText(rawText);
  const title = text.split('\n')[0] || "N/A";
  const creationDate = new Date();
  const article = {
    title,
    creationDate,
    rawText,
    parsedData,
    typedData: parsedData.map(_ => ""),
  }
  articles.value.push(article);
  currentArticleIndex.value = articles.value.length - 1;
  closeModels();
}

const multiNewlineRegex = /\n+/g;
const multiSpaceRegex = /\s+/g;
const headingRegex = /^==+(.+?)==+$/g;
const fullWidthRegex = /[^\x00-\xff]/;
const splitCharRegex = /[^a-zA-Z0-9!-#%-\x2A,-/:;\x3F@\x5B-\x5D_\x7B}\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
const maxLineLength = 80;

// computed property that updates the displayed text as the prop changes
function parseText(rawText: string) {
  const lines = rawText
    .replace(multiNewlineRegex, '\n')
    .split('\n')
    .map(x => {
      const trimmed = x.trim().replace(multiSpaceRegex, ' ');
      return trimmed.replace(headingRegex, '$1').trim();
    })
    .filter(x => x.length > 0);

  // Split lines by max character count
  const splitLines: string[] = [];
  for (const line of lines) {
    let currentLine = '';
    let currentLength = 0;
    for (const char of line) {
      const charLength = fullWidthRegex.test(char) ? 1.8 : 1;
      const isSplitChar = splitCharRegex.test(char);
      if (currentLength + charLength > maxLineLength && isSplitChar) {
        splitLines.push(currentLine.trimEnd());
        currentLine = '';
        currentLength = 0;
      }
      currentLength += charLength;
      currentLine += char;
    }
    if (currentLine.length > 0) {
      splitLines.push(currentLine.trimEnd());
    }
  }

  return splitLines.map(x => x.trim().split('')) as string[][];
};

function generateDefaultArticle(): Article {
  return {
    title: 'N/A',
    creationDate: undefined,
    rawText: '',
    parsedData: [],
    typedData: [],
  }
}

const currentArticle = computed(() => {
  const article = articles.value[currentArticleIndex.value];
  if (!article) return generateDefaultArticle();

  return article;
});

function selectArticle(index: number) {
  currentArticleIndex.value = index;
  closeModels();
}

function deleteArticle(index: number) {
  if (index < 0 || index >= articles.value.length) return;
  const article = articles.value[index];
  if (!article) return;

  const articleTitle = article.title;
  if (confirm(`Are you sure you want to delete the article "${articleTitle}"? This action cannot be undone.`)) {
    articles.value.splice(index, 1);
    if (currentArticleIndex.value === index) {
      currentArticleIndex.value = -1; // Deselect
    } else if (currentArticleIndex.value > index) {
      currentArticleIndex.value--; // Shift forward
    }
  }
}

const updateTypedData = (newTypedData: string[]) => {
  currentArticle.value.typedData = JSON.parse(JSON.stringify(newTypedData));
}

onMounted(() => {
  console.log('App mounted');
  const savedArticles = localStorage.getItem('articles');
  if (savedArticles) {
    const parsedArticles = JSON.parse(savedArticles);
    // Convert creationDate back to Date objects
    parsedArticles.forEach((article: Article) => {
      if (article.creationDate) {
        article.creationDate = new Date(article.creationDate);
      }
    });
    articles.value = parsedArticles;
  }
});

watch(articles, (newArticles) => {
  console.log('Articles updated:', newArticles);
  localStorage.setItem('articles', JSON.stringify(newArticles));
}, { deep: true });

</script>

<style scoped>
header {
  padding-bottom: 1rem;
}

main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: calc(100vh - 110px);
}

.top-bar {
  height: 30px;
}

.article-info {
  font-size: 0.9rem;
}

.typing-tab {
  overflow-y: scroll;
  flex-grow: 1;
  border: 2px solid black;
  border-radius: 8px;
  padding: 1rem;
}
</style>
