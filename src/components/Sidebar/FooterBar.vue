<script setup></script>
<template>
    <div class="container">
        <ul class="links">
            <li><a href="">ABOUT</a></li>
            <li><a href="">BLOG</a></li>
            <li><a href="">STORE</a></li>
            <li><a href="">EFFICACY</a></li>
            <li><a href="">CAREERS</a></li>
            <li><a href="">INVESTORS</a></li>
            <li><a href="">TERMS</a></li>
            <li><a href="">PRIVACY</a></li>
        </ul>
    </div>
</template>
<style scoped>

.links{
    display:flex;
    flex-wrap: wrap;
    gap:20px;
    justify-content: center;
    font-size: 0.7rem;
    margin-top: 10px;
}

.links a{
    color:gray;
}

.links a:hover{
    color:var(--primary-link-color)
}
</style>