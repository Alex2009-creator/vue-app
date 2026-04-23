<script setup>
  import { ref, onMounted, provide } from 'vue'
  import Score from './components/Score.vue'
  import Card from './components/Card.vue'

  const gamePoints = ref(0)
  provide('gamePoints', gamePoints);

  const resultCard = ref('')

  const сhangeCardsStatus = (payload) => {
    return resultCard.value = payload
  }

  const words = ref([]);
  const isLoading = ref(true);
  const error = ref(null);

  const fetchWords = async () => {
    try {
      isLoading.value = true;
      const response = await fetch('/api/random-words');
      
      if (!response.ok) throw new Error('Ошибка сети');
      
      // API возвращает массив объектов
      words.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  // Запускаем загрузку при монтировании
  onMounted(fetchWords);
</script>

<template>
  <div class="container">
    <div class="header">
      <h1 class="header__title">Запомни слово</h1>
      <Score
        :text-score="gamePoints"
        class="header__score"
      />
    </div>
    <div v-if="isLoading">Загрузка слов...</div>
    <div v-else-if="error">Ошибка: {{ error }}</div>    
    <div class="main">
      <Card
      v-for="(item, index) in words"
      :key="index"
      :word="item.word"
      :translation="item.translation"
      :result="resultCard"
      :cardnumber="index"
      class="main__score"
      @change-status="сhangeCardsStatus"
    />
    </div>    
  </div>
</template>

<style scoped>
  .container {
    width: 1440px;
    height: 100vh;
    background-color: #F0F4F8;
  }

  .header {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__title {
    font-family: Roboto;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    margin-left: 20px;
  }

  .header__score {
    width: 110px;
    height: 48px;
    margin-right: 20px;
  }

  .main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 20px;
  }

  .main__score {
    width: 250px;
    height: 376px;
  }
</style>
