<template>
  <div class="container">
    <h1 class="container__title">Текущая дата</h1>
    <p class="container__text">{{ currentDate }}</p>    
  </div>  
</template>

<script setup>
  import { ref } from 'vue';

  const date = new Date();
  const currentDate = ref(date.toLocaleDateString());
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    border: 2px solid blue;
    margin: auto;
  }

  .container__title {
    font-size: 24px;
    color: blue;
  }

  .container__text {
    font-size: 20px;
    color: blueviolet;
  }
</style>
