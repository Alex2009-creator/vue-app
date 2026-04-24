<template>
    <button
        type="button"
        @click="reloadApplication"
    >
        {{ textBtn }}
    </button>
</template>

<script setup>
    const {textBtn, btnStart} = defineProps({
        textBtn: {type: String, default: 'Начать заново'},
        btnStart: {type: Boolean}
    })

    const emit = defineEmits(["visible-page"])

    const reloadApplication = () => {
        if(btnStart==true) {
            emit("visible-page", false)
        } else {
            window.location.reload()
        }           
    }
</script>

<style scoped>
</style>