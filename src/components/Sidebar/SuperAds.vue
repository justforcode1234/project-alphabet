<script setup></script>
<template>
    <div class="super-container card">
        <img class="super-mascot" src="https://d35aaqx5ub95lt.cloudfront.net/images/super/fb7130289a205fadd2e196b9cc866555.svg" alt="">
        <img class="super-logo" src="https://d35aaqx5ub95lt.cloudfront.net/images/super/2e50c3e8358914df5285dc8cf45d0b4c.svg" alt="">
        <h3>Try Super for free</h3>
        <p>No ads, personalized practice, and unlimited Legendary!</p>
        <button>Try 2 Weeks FREE</button>
    </div>
</template>
<style>
.super-container{
    display:flex;
    flex-direction: column;
    align-items: self-start;
    gap:10px;
    position: relative;
}

.super-container button{
    border-radius: 10px;
    background-color: blue;
    color:white;
    width:100%;
    padding:15px 0;
    border:none;
    margin-top:10px;
}

.super-container .super-logo{
    max-width:80px;
}

.super-container p{
    max-width:70%;
}

.super-container .super-mascot{
    max-height: 80px;
    max-width: auto;
    position: absolute;
    top:0;
    right:0;
    margin:20px;
}
</style>