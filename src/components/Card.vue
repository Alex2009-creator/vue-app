<template>
    <div
        class="container-card"
        @click="flipСard"        
    >
        <div class="container-card__box">
            <span class="container-card__label">{{ cardnumber }}</span>
            <img
                v-if="isCompleted"
                :src="isLogoUrl"
                class="container-card__logo"
            />
            <h2 v-if="isCardFlipped" class="container-card__title">{{ word }}</h2>
            <h2 v-else-if="!isCardFlipped && !isCompleted" class="container-card__title">{{ translation }}</h2>
            <h2 v-else-if="isCompleted" class="container-card__title">{{ result }}</h2>
            <div
                class="container-card__description"
            >
                <div v-if="isCardFlipped" class="container-card__message">Перевернуть</div>
                <div v-else-if="!isCardFlipped && !isCompleted" class="container-card__btns">
                    <Button
                        :logoimg="logoUrl[1]"
                        alt = "Close"
                        class="container-card__btn"
                        @click="clickStatusCardClose"
                    />
                    <Button
                        :logoimg="logoUrl[0]"
                        alt="Ok"
                        class="container-card__btn"
                        @click="clickStatusCardOk"
                    />
                </div>
                <div v-else-if="isCompleted" class="container-card__message">Завершено</div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, inject } from 'vue'
    import Button from './Button.vue';

    const {
        word="Unadmitted",
        translation="Не допущенный",
        result="",
        cardnumber=1,        
    } = defineProps({
        word: String,
        translation: String,
        result: String,
        cardnumber: Number
    })

    const emit = defineEmits(["change-status"])
    
    const isCardFlipped = ref(true)

    const flipСard = () => {
        isCardFlipped.value = false
    }

    const logoUrl = ref([
        "../../public/img/ok-img.png",
        "../../public/img/close-img.png"
    ])

    const isCompleted = ref(false)
    const isLogoUrl = ref('')
    const gamePoints = inject('gamePoints')

    const clickStatusCardOk = () => {
        isCompleted.value = true
        isLogoUrl.value = logoUrl.value[0]
        gamePoints.value = gamePoints.value + 10
        emit("change-status", "Ответ верный")
    }

    const clickStatusCardClose = () => {
        isCompleted.value = true
        isLogoUrl.value = logoUrl.value[1]
        gamePoints.value = gamePoints.value - 4
        emit("change-status", "Неправильно")
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

    .container-card__logo {
        position: absolute;
        top: -18px; 
    }

    .container-card__img {
        width: 36px;
        height: 36px;
    }

    .container-card__description {
        position: absolute;
        top: 306px;
        background-color: #FFFFFF;
    }

    .container-card__btns {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .container-card__btn {
        margin: 0 16px;
        position: relative;
        top: 3px;
    }
</style>