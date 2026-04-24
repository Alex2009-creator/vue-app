<script setup>
  import { ref, onMounted, provide } from 'vue'
  import Score from './components/Score.vue'
  import Card from './components/Card.vue'
  import ButtonStart from './components/ButtonStart.vue'

  const textBtnStart = ref('Начать игру')
  const isVisibleBtnStart = ref(true)
  const gamePoints = ref(0)
  provide('gamePoints', gamePoints);

  const resultCard = ref('')

  const сhangeCardsStatus = (payload) => {
    return resultCard.value = payload
  }

  const words = ref([]);
  const isLoading = ref(true);
  const error = ref(null);

  const onRloadApp = (payload) => {
    return isVisibleBtnStart.value = payload
  }

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
  <div
    v-if="isVisibleBtnStart"
    class="box"
  >
    <ButtonStart
        :text-btn="textBtnStart"
        :btn-start="isVisibleBtnStart"
        @visible-page="onRloadApp"
        class="btn-start"
      />
  </div>
  <div v-else class="container">
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
    <div class="footer">
      <ButtonStart
        :text-btn="textBtnStart"
        :is-btn-start="isVisibleBtnStart "
        @visible-page="onRloadApp"
        class="btn-start btn-start--reload"
      />
    </div>   
  </div>
</template>

<style scoped>
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    width: 1440px;
    height: auto;
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

  .btn-start {
    min-width: 335px;
    min-height: 68px;
    border-radius: 100px;
    background-color: #008BFE;
    font-size: 24px;
    color: #FFFFFF;
  }

  .btn-start--reload {
    margin: 100px 0 60px;
  }
</style>
