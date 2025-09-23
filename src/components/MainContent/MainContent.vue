<script setup>
import ChapterUnit from "./ChapterUnit.vue";
import TopNav from "./TopNav.vue"
</script>

<template>
<div class="main-container">
    <div class="content-container">
        <TopNav/>
        <ChapterUnit/>
    </div>
</div>
</template>

<style scoped>
.main-container{
    margin-right:50px;
}

.content-container{
    position: relative;
    max-width: 80%;
    margin-left: auto;
    height:100%;
    margin-top:20px;
}

</style>