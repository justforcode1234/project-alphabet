<script setup>
import ChapterNode from './ChapterNode.vue';
import NodeMascot from './NodeMascot.vue';
</script>

<template>
  <div class="nodes-container flex-column">
    <ChapterNode/>
    <ChapterNode/>
    <ChapterNode/>
    <ChapterNode/>
    <ChapterNode/>
    <NodeMascot/>
  </div>
</template>

<style scoped>
.nodes-container{
    align-items: center;
    gap:20px;
    padding:20px 0;
    position: relative;
}

.mascot-container{
  position: absolute;
  top:50%;
  right:10%;
  transform: translateY(-50%);
}
</style>
