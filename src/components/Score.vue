<template>
    <div class="container-score">
        <span class="container-score__label"> {{ textScore }}</span>
        <span class="container-score__label">'♥'</span>
    </div>
</template>

<script setup>
    const {textScore} = defineProps({
        textScore: {type: Number, default: 0}
    })
</script>

<style scoped>
    .container-score {
        border-radius: 36px;
        background-color: #CCE8FF;
        color: #008BFE;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container-score__label {
        font-size: 16px;
        margin: 0 5px;
    }
</style>