<template>
    <el-button @click="toggleList" class="pvp-button right" color="#F0AA0B" round>
        <img src="/images/PvpIcon.png">
    </el-button>
</template>

<style scoped>
.right {
  display: flex;
  align-items: center;
}

.pvp-button {
    margin-left: auto;
    margin-top: 21px;
    margin-right: 10px;
    margin-bottom: 24px;
}
</style>

<script setup lang="ts">
const emit = defineEmits(['toggleList'])

const toggleList = () => {
    emit('toggleList');
}
</script>