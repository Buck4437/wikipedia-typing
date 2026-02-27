<template>
  <BaseModal @close="$emit('close')">
      Select an imported article:
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Creation Date</th>
            <th>Progress</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(article, index) in articles" 
            :key="index">
            <td>{{ article.title }}</td>
            <td>
              <div v-if="article.creationDate">
                {{ article.creationDate.toLocaleDateString() }}
              </div>
              <div v-else>
                N/A
              </div>
            </td>
            <td>{{ calculateProgress(article) }}%</td>
            <td class="actions-cell">
              <button @click.stop="$emit('selectArticle', index)">Select</button>
              <button @click.stop="$emit('deleteArticle', index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  </BaseModal>
</template>

<script setup lang="ts">
type Article = {
  title: string;
  creationDate: Date | undefined;
  rawText: string;
  parsedData: string[][];
  typedData: string[];
}

import BaseModal from './BaseModal.vue';

defineProps<{ articles: Article[] }>();
const emit = defineEmits(['selectArticle', 'close', 'deleteArticle']);

const calculateProgress = (article: Article) => {
  if (!article.typedData || article.typedData.length === 0) return 0;
  const totalChars = article.parsedData.reduce((sum, line) => sum + line.length, 0);
  const typedChars = article.typedData.reduce((sum, line) => sum + line.length, 0);
  return Math.round((typedChars / totalChars * 100));
};

</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

table th, table td {
  border-collapse: collapse;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.actions-cell button {
  margin-right: 5px;
}
</style>
