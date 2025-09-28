<script setup>
import CharacterPracticeView from './CharacterPracticeView.vue';
</script>

<template>
    <div class="practiceView-wrapper flex-column">
        <h2>JLPT Flash Cards</h2>
        <div class="practiceCard-wrapper card">
            <h3>Hiragana</h3>
            <p>Start a training session to practice your Hiragana characters</p>
        </div>
        <div class="practiceCard-wrapper card">
            <h3>Katakana</h3>
            <p>Start a training session to practice your Katakana characters</p>
        </div>
    </div>
    <CharacterPracticeView/>
</template>

<style scoped>
.practiceView-wrapper{
    gap:20px;
}

.practiceCard-wrapper{
    display:flex;
    flex-direction: column;
    gap:10px;
    cursor: pointer;
}

</style>