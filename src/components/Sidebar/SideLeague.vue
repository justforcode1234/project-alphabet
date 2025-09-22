<script script></script>
<template>
    <div class="container card">
        <div class="header">
            <h4>Gold League</h4>
            <a href="">VIEW LEAGUE</a>
        </div>
        <div class="content">
            <img src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/0e249b5f869b806da7406b815f4d60c6.svg" alt="">
            <h4>You’re ranked #19</h4>
            <p>You moved down to the demotion zone!</p>
        </div>
    </div>
</template>
<style scoped>
.container{
    display:flex;
    flex-direction: column;
    gap:20px;
    min-height: 150px;
}

.header{
    display:flex;
    justify-content: space-between;
}

.content{
    display:grid;
    grid-template-columns: auto 1fr;
    gap:10px;
}

.content img{
  grid-row:1/span 2;
  margin-right: 10px;
}

.content p{
    font-weight: bold;
    font-size: 1rem;
    max-width: 70%;
}
</style>