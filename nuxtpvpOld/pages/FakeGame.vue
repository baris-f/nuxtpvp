<template>
  <div class="bg">
    <div class="text-center">This is a fake game</div>
    <div class="center">
      <el-button type="success" @click="usePvp().matchEnd(playersResult)">P1 win</el-button>
      <el-button type="info">P2 win</el-button>
    </div>
    <PvpInGame />
  </div>
</template>
  
<script setup lang="ts">
import { Player } from "@/scripts/typesPvp"

const playersResult = new Array<Player>(
  {
    user_id: 0,
    score: 9999999
  },
  {
    user_id: usePvp().match.value.opponent?.id ?? 2,
    score: 12345467
  },
)
</script>

<style scoped lang="scss">

.bg {
  background-color: brown;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
}

.text-center {
  font-size: 50px;
  text-align: center;
}

.center {
  margin-left: auto;
  margin-right: auto;
  width: max-content;
}
</style>
