<script setup>
import AdBlock from './AdBlock.vue';
import SideDailyQuest from './SideDailyQuest.vue';
import StatsBar from './StatsBar.vue';
import SuperAds from './SuperAds.vue';
import SideLeague from './SideLeague.vue';
import FooterBar from './FooterBar.vue';

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

<style>
.side-container{
    display:flex;
    flex-direction: column;
    gap:20px;
    padding:10px 0;
    background-color: transparent;
}
</style>