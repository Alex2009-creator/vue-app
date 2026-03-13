<template>
    <button
        type="button"
        class="container-button"
    >
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style scoped>
    @import url('https://fonts.googleapis.com');

    .container-button {
        padding: 16px 10px;          
        color: var(--text-btn);
        background-color: var(--bg-btn);
        border-radius: 33px;
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
    }
</style>
