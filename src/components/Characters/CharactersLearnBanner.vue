<script setup>
const props=defineProps({
    banner:{
        required:true
    }
})
</script>

<template>
    <div class="learnBanner-wrapper flex-column">
        <h2>{{ props.banner.title }}</h2>
        <h4>{{ props.banner.subTitle }}</h4>
        <div class="buttons-wrapper flex-column">
            <button>TIPS</button>
            <button class="second-style">LEARN THE CHARACTERS</button>
        </div>
    </div>
</template>

<style scoped>
.learnBanner-wrapper{
    align-items:center;
    justify-content: center;
    gap:20px;
}

.buttons-wrapper{
    gap:10px;
    height:120px;
    align-items: center;
    justify-content: flex-start;
}

.learnBanner-wrapper button{
    padding:10px 0 15px 0;
    border-radius: 15px;
    background-color: transparent;
    color:var(--primary-link-color);
    border:2px solid var(--primary-border-color);
    min-width:300px;
}

button.second-style{
    background-color: skyblue;
    color:black;
}
</style>