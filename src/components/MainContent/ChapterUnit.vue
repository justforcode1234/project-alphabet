<script setup>
import ChapterNodes from './ChapterNodes.vue';

</script>
<template>
    <div class="container">
        <div class="header flex">
            <div class="bar"></div>
            <h3>Describe People</h3>
            <div class="bar"></div>
        </div>
        <ChapterNodes/>
    </div>
</template>
<style scoped>
.header{
    align-items: center;
    gap:10px;
}

.header h3{
    white-space: nowrap;
    color:var(--secondary-text-color)
}

.header .bar{
    background-color: var(--secondary-text-color);
}
</style>