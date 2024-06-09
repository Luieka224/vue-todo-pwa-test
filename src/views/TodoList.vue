<template>
  <div class="bg-green-500 p-2 rounded mx-4 lg:mx-auto lg:w-1/2">
    <input
      class="p-1 rounded w-full"
      v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new task" />
    <ul class="grid gap-4 my-2 overflow-y-auto">
      <li v-for="todo in todos" :key="todo.id" class="rounded p-1 bg-green-400 backdrop-blur-sm">
        <p>{{ todo.text }}</p>        
        <button @click="deleteTodo(todo.id)" class="bg-red-500 text-white p-1 rounded">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const newTodo = ref('');
const todos = ref([]);

const dbName = 'todoApp';
const storeName = 'todos';
let db;

const openDb = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);
    request.onerror = (event) => reject(event);
    request.onsuccess = (event) => resolve(event.target.result);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
    };
  });
};

const fetchTodos = () => {
  const transaction = db.transaction(storeName, 'readonly');
  const objectStore = transaction.objectStore(storeName);
  const request = objectStore.getAll();
  request.onsuccess = (event) => {
    todos.value = event.target.result;
  };
};

const addTodo = () => {
  if (newTodo.value.trim() === '') return;
  const transaction = db.transaction(storeName, 'readwrite');
  const objectStore = transaction.objectStore(storeName);
  const request = objectStore.add({ text: newTodo.value });
  request.onsuccess = () => {
    fetchTodos();
    newTodo.value = '';
  };
};

const deleteTodo = (id) => {
  const transaction = db.transaction(storeName, 'readwrite');
  const objectStore = transaction.objectStore(storeName);
  const request = objectStore.delete(id);
  request.onsuccess = () => {
    fetchTodos();
  };
};

onMounted(async () => {
  db = await openDb();
  fetchTodos();
});
</script>
