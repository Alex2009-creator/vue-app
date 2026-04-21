<template>
    <div class="container-card__logo">
        <img
            :src="props.logoimg"
            :alt="logotext"
            class="container-card__img"
        />                    
    </div>
</template>

<script setup>
    const props = defineProps({
        logoimg: {
            type: String,
            default: "../../public/img/ok-img.png"
        },

        logotext: {
            type: String,
            default: "Ok"
        }
    })
</script>

<style scoped>
    .container-card__img {
        width: 20px;
        height: 20px;
    }
</style>