<script setup>
import CharacterPracticeView from './CharacterPracticeView.vue';
</script>

<template>
    <div class="practiceView-wrapper flex-column">
        <h2>JLPT Flash Cards</h2>
        <router-link to="/character-practice">
            <div class="practiceCard-wrapper card">
                <h3>Hiragana</h3>
                <p>Start a training session to practice your Hiragana characters</p>
            </div>
        </router-link>
        
        <router-link to="/character-practice">
            <div class="practiceCard-wrapper card">
                <h3>Katakana</h3>
                <p>Start a training session to practice your Katakana characters</p>
            </div>
        </router-link>
    </div>
</template>

<style scoped>
.practiceView-wrapper{
    margin-top:50px;
    gap:20px;
}

.practiceCard-wrapper{
    display:flex;
    flex-direction: column;
    gap:10px;
    cursor: pointer;
}

</style>