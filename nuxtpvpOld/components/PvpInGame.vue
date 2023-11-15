<template>
  <div>
    
    <GameOver :num="usePvp().match.value.match.players[0].score" v-if="gameOverState == GameOverStates.GameOver" v-bind:pending="pending" :nextState="nextGameOverState"/>
    <MatchResult  :match="usePvp().match.value.match" :users="players" v-if="gameOverState == GameOverStates.MatchResult" v-bind:pending="pending" :nextState="nextGameOverState"/>
    <PointsEarned :zem="30" :lp="1700" :newLp="23" v-bind:pending="pending" v-if="gameOverState == GameOverStates.Points" :nextState="nextGameOverState" />
    
    <LeftPanel :opponents="usePvp().getMatchOpponents()" v-bind:pending="pending" /> 

  </div>
</template>

<script setup lang="ts">
import { useCustomFetch } from "@/scripts/useCustomFetch"
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { sleep } from "@/scripts/utilsPvp"

enum GameOverStates {
  None,
  GameOver,
  MatchResult,
  Points,
}
const gameOverState = ref(GameOverStates.None)

const nextGameOverState = () => {
  gameOverState.value++
}

// runtimeConfig.public.ENV
const header = {
  'method': 'get',
};

const pending = ref(true)

var user = ref(null);
var players = ref(null);
var match = ref(null);

const FetchData = async () => {
  console.log("fetching")
  user.value = players.value = match.value = null
  pending.value = true
  await sleep(5000)
  user = await useCustomFetch("/user", header).then(res => { return res.result })
  players = await useCustomFetch("/users", header).then(res => { return res.result })
  match = await useCustomFetch("/match", header).then(res => { return res.result })
  pending.value = false
  console.log("fetched")
}

onMounted(() => {
  FetchData()
})

watch(
  () => usePvp().match.value.isOver,
  () => {
        if (gameOverState.value == GameOverStates.None)
          nextGameOverState()
  }
)

</script>


<style scoped lang="scss">
.floating-right {
  position: fixed;
  top: 74px;
  right: 0px;
}
</style>