<template>
    <div
        class="container-card"
        @click="flipСard"        
    >
        <div class="container-card__box">
            <span class="container-card__label">01</span>
            <h2 class="container-card__title">Unadmitted</h2>
            <div
                class="container-card__description"
                @click="changeStatusCard"
            >
                <div v-if="isCardFlipped" class="container-card__message">Перевернуть</div>
                <div v-else-if="!isCardFlipped" class="container-card__btns">Кнопки</div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const emit = defineEmits(["turn-over", "change-status"])
    const flipСard = () => {
        emit("turn-over", "Карта перевернута")
    }
    const isCardFlipped = ref(true)
    const changeStatusCard = () => {
        emit("change-status", "Статус изменен"),
        isCardFlipped.value = false
    }
</script>

<style scoped>
    .container-card {
        background-color: #FFFFFF;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container-card:hover {
        border: 2px solid #CCE8FF;
        box-sizing: border-box;
    }

    .container-card__box {
        position: relative;
        width: 212px;
        height: 320px;
        border: 1px solid #CCE8FF;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container-card__label {
        position: absolute;
        left: 32px;
        top: -14px;
        background-color: #FFFFFF;
    }

    .container-card__description {
        position: absolute;
        top: 306px;
        background-color: #FFFFFF;
    }
</style>