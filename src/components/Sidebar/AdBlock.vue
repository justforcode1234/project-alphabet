<script setup></script>
<template>
<div class="adBlock-container">
    <img src="https://d35aaqx5ub95lt.cloudfront.net/images/super/2b5fd4af60c95dbc639bebff2c405648.svg" alt="">
    <h2>Using an ad blocker?</h2>
    <p>Support education with Super Duolingo and we will remove ads for you</p>
    <button>TRY SUPER FOR FREE</button>
    <a href="">DISABLE AD BLOCKER</a>
</div>
</template>
<style>
.adBlock-container{
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding:0 10px 20px;
    gap:10px;
    border-radius: 10px;
    background: radial-gradient(216% 106% at 6% 3%, 
    rgb(38, 246, 99, .3) 0, 
    rgb(38, 138, 255, .3) 52%, 
    rgb(252, 85, 255, .3) 100%), 
    rgb(0, 4, 55);
}

.adBlock-container button{
    padding:10px 40px;
    border-radius: 10px;
    color:black;
    background-color: white;
}
</style>