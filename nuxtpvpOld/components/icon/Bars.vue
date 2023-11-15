<template>
  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="bars" width="20" height="20">
    <path :fill="color"
      d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z">
    </path>
  </svg>
</template>
<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: '#888'
  }
})
</script>
