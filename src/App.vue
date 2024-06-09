<template>
  <div id="app">
    <div class="absolute sticky top-0 p-2 my-2 bg-white z-10">
      <h1 class="text-center text-2xl">Vue PWA To-Do List</h1>
    </div>
    <TodoList />
  </div>
</template>

<script setup>
import TodoList from '@/views/TodoList.vue';
</script>