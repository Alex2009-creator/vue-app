<script setup>
import Score from './components/Score.vue'
import Card from './components/Card.vue'

const turnOverCard = (payload) => {
  return console.log('Событие 1:', payload)
}

const сhangeCardsStatus = (payload) => {
  return console.log('Событие 2:', payload)
}
</script>

<template>
  <div class="container">
    <div class="header">
      <h1 class="header__title">Запомни слово</h1>
      <Score
        text-score=110
        class="header__score"
      />
    </div>
    <div class="main">
      <Card
      class="main__score"
      @turn-over="turnOverCard"
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
