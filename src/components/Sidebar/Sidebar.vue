<script setup>
import AdBlock from './AdBlock.vue';
import SideDailyQuest from './SideDailyQuest.vue';
import SuperAds from './SuperAds.vue';
import SideLeague from './SideLeague.vue';
import FooterBar from './FooterBar.vue';
import StatsBar from './StatsBar/StatsBar.vue';

</script>

<template>
<div class="side-container">
    <StatsBar/>
    <SuperAds/>
    <SideLeague/>
    <SideDailyQuest/>
    <AdBlock/>
    <FooterBar/>
</div>
</template>

<style scoped>
.side-container{
    display:flex;
    flex-direction: column;
    gap:20px;
    padding:10px 0;
    background-color: transparent;
}
</style>