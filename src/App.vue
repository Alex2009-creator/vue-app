<template>
  <div id="app" class="container">
    <Button
      class="container__button"
    >
      Начать игру
    </Button>    
  </div>  
</template>

<script setup>
  import Button from './components/Button.vue';    
</script>

<style scoped>
  .container {    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;        
  }

  .container__button {
    width: 335px;
    height: auto;
    margin: auto;
  }
</style>
