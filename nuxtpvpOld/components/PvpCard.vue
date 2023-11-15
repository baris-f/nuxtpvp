<template>
    <div class="pvp-card">
        <div>
            <div class="text-center card-title text-white box-border text-outline" style="background-color: #F0AA0B;">{{title}}</div>
        </div>
        <div class="list-container">
            <PvpListElement v-if="games && games?.length > 0 && !pending" @togglePlayers="togglePlayers" v-for="(elem, index) in games" :key="index" class="text item" :game="elem"/>
            <!-- TODO Replace check index 0 by check if logged in user -->
            <PvpListElement v-else-if="players && players?.length > 0 && !pending" v-for="(elem, index) in players.filter(elem => elem.id != 0)" class="text item" :user="elem"/>
            <PvpListElementSk v-else v-for="elem in [1,2,3,4]" class="text item"/>
        </div>
        <div class="flex-center" style="margin-top: 6px;margin-bottom: 10px;" v-if="players">
            <el-button v-if="usePvp().match.value.isSearching" @click="usePvp().matchCancel()" style="width: 100%; margin: 0 10px 0 10px;" class="text-white box-border" color="#F0AA0B">매칭 취소</el-button>
            <div v-else>
                <el-button @click="challengeRandomPlayer(true)" class="text-white box-border" color="#F0AA0B">랭크게임</el-button>
                <el-button @click="challengeRandomPlayer()" class="text-white box-border" color="#F0AA0B">친선게임</el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { User, Game } from "@/scripts/typesPvp"
import { getRandomInt } from "element-plus/es/utils";

const emit = defineEmits(['togglePlayers'])

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

const togglePlayers = () => {
    emit('togglePlayers');
}

const challengeRandomPlayer = (ranked = false) => {
    if (!props.players)
        return
    usePvp().setMatchOpponent(props.players[getRandomInt(props.players?.length)])
    usePvp().matchSearch()
}

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
    font-size: 20px;
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