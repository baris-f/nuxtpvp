<template>
  <div>
    <Profile :user="usePvp().profile.value.user" v-if="usePvp().profile.value.active" v-bind:pending="pending" />
    <ConfirmBig v-if="usePvp().match.value.isChallenged && usePvp().match.value.selectedGame?.description"/>
    <Confirm v-else-if="usePvp().match.value.isChallenged"/>
    <Refused v-if="usePvp().match.value.isRefused" :name="usePvp().match.value.opponent.name"/>
    <Searching v-if="usePvp().match.value.isSearching" />

    <PvpList :games="games" :players="players" v-bind:pending="pending"/>

<!--     
    <GameOver v-bind:pending="pending" v-if="gameOverActive" />
    <GameResult :match="match" :users="players" v-bind:pending="pending" v-if="gameResultActive" />
    <PointsResult :zem="30" :lp="1700" :newLp="23" v-bind:pending="pending" v-if="pointResultActive" />
    <LeftPanel :opponents="players" v-bind:pending="pending" /> -->



    <!-- <div style="right: 40%;bottom:10%; position: fixed;">
      <button @click="FetchData">Reload data</button>
      <button @click="switchGameOver">GameOver</button>
      <button @click="switchGameResult">GameResult</button>
      <button @click="switchPointResult">Point Result</button>
    </div> -->

  </div>
</template>

<script setup lang="ts">
import { fetchData } from "@/scripts/fetchData"
import { useCustomFetch } from "@/scripts/useCustomFetch"
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { sleep } from "@/scripts/utilsPvp"
const runtimeConfig = useRuntimeConfig();

// runtimeConfig.public.ENV
const header = {
  'method': 'get',
};
onMounted(() => {
});

const pending = ref(true)
const startingActive = useState('startingActive', () => false)

var user = ref(null);
var games = ref(null);
var players = ref(null);
var match = ref(null);


const FetchData = async () => {
  console.log("fetching")
  user.value = games.value = players.value = match.value = null
  pending.value = true
  await sleep(2000)
  user = await useCustomFetch("/user", header).then(res => { return res.result })
  games = await useCustomFetch("/games", header).then(res => { return res.result })
  players = await useCustomFetch("/users", header).then(res => { return res.result })
  match = await useCustomFetch("/match", header).then(res => { return res.result })
  pending.value = false
  console.log("fetched")
}

onMounted(() => {
  FetchData()
})


const gameOverActive = ref(false);
const gameResultActive = ref(false);
const pointResultActive = ref(false);

const switchGameOver = () => {
  gameOverActive.value = !gameOverActive.value
}
const switchGameResult= () => {
  gameResultActive.value = !gameResultActive.value
}
const switchPointResult = () => {
  pointResultActive.value = !pointResultActive.value
}

</script>


<style scoped lang="scss">
.floating-right {
  position: fixed;
  top: 74px;
  right: 0px;
}
</style>