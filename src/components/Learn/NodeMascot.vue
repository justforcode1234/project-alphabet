<script setup>
</script>

<template>
  <div class="mascot-container">
    <!-- Example simplified Duo mascot path -->
    <svg 
      class="duo" 
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Body -->
      <path 
        d="M100 20 
           C 140 20, 180 60, 160 100 
           C 180 140, 140 180, 100 180
           C 60 180, 20 140, 40 100 
           C 20 60, 60 20, 100 20 Z"
        fill="rgb(88, 204, 2)" 
      />
      <!-- Eyes -->
      <circle cx="75" cy="90" r="10" fill="white"/>
      <circle cx="125" cy="90" r="10" fill="white"/>
      <circle cx="75" cy="90" r="5" fill="black"/>
      <circle cx="125" cy="90" r="5" fill="black"/>
      <!-- Beak -->
      <polygon points="95,110 105,110 100,120" fill="orange"/>
    </svg>
  </div>
</template>

<style scoped>
.mascot-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.duo {
  width: 120px;
  height: 120px;
  animation: dance 1s infinite alternate ease-in-out;
}

@keyframes dance {
  0%   { transform: rotate(-5deg) translateY(0); }
  50%  { transform: rotate(5deg) translateY(-5px); }
  100% { transform: rotate(-5deg) translateY(0); }
}
</style>