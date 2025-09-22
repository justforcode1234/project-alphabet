<script setup>
import SideQuest from './SideQuest.vue';

</script>
<template>
    <div class="side-quest-container card">
        <div class="side-quest-header">
            <h4>Daily Quests</h4>
            <h4><a href="">VIEW ALL</a></h4>
        </div>
        <ul>
            <li><SideQuest/></li>
            <li><SideQuest/></li>
            <li><SideQuest/></li>
            <li><SideQuest/></li>
        </ul>
    </div>
</template>
<style>
.side-quest-container{
    display:flex;
    flex-direction: column;
    gap:15px;
}

.side-quest-header{
    display:flex;
    align-items: center;
    justify-content: space-between;
}

.side-quest-container ul{
    display:flex;
    flex-direction: column;
    gap:10px;
}
</style>