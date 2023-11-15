<template>
    <div class="floating-right">
      <PvpButton @toggleList="toggleList" />
      <PvpCard @togglePlayers="togglePlayers" title="게임 리스트" :games='games' v-bind:pending="pending" v-if="listState == ListState.Games"/>
      <PvpCard :title="usePvp().match.value.selectedGame?.title" :players='players' v-bind:pending="pending" v-if="listState == ListState.Players"/>
    </div>
</template>

<script setup lang="ts">
import { User, Game } from "@/scripts/typesPvp"

enum ListState {
  Off,
  Games,
  Players,
}

const listState = ref(ListState.Off)

const props = defineProps({
    title: {
        type: String,
        default: "로딩"
    },
    players: Array<User>,
    games: Array<Game>,
    pending: {
        type: Boolean,
        default: false
    }
})

const toggleList = () => { listState.value = listState.value == ListState.Off ? ListState.Games : ListState.Off }

const togglePlayers = () => { listState.value = ListState.Players; }

</script>

<style scoped lang="scss">

.pvp-card {
    width: 300px;
    border-radius: 5px;
    padding: 4px;
    background-color: white;
    box-sizing: border-box;
}

.card-title {
    width: 200px;
    margin: auto;
    margin-bottom: 5px;
}

.box-border {
    height: 28px;
    border-color:black;
    border: solid;
    border-width: 1px;
    border-radius: 0;
}

.list-container {
    background-color: #F0AA0B;
    padding: 10px;
    border-radius: 5px;
}

.text-white {
    font-size: 18spx;
    font-weight: bolder;
    letter-spacing: 0em;
    color: white;
    border-color: black;
}
.text {
    font-size: 15px;
}

.item {
    margin-bottom: 3px;
}

@supports (-webkit-text-stroke: 1px black) {
  .text-outline {
    -webkit-text-stroke: 1px black;
  }
}

</style>