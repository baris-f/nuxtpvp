<script lang="ts" setup></script>

<template>
  <iframe
    width="460"
    height="270s"
    :src="`https://player.vimeo.com/video/${props.videoId}`"
    title="Video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>


<script setup lang="ts">
const props = defineProps({
  videoId: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped></style>
