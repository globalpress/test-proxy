<template>
  <div v-if="data">
    TODOS: {{ data }}
  </div>
</template>

<script setup>
// nuxt fetch https://jsonplaceholder.typicode.com/todos
const { data, error } = useFetch('/api/todos', {server: false})
</script>
