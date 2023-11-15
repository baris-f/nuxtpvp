<template>
    <a @click="game ? togglePlayers() : showProfile()" class="list-element">
        <img :src="game?.url_thumb || user?.picture" />
        <div>
            <div class="title">{{ game?.title || user?.name || '로딩' }}</div>
            <div class="desc">{{ game?.description }}</div>
        </div>
    </a>
</template>

<script setup lang="ts">
import  { User, Game } from "@/scripts/typesPvp"

const emit = defineEmits(['togglePlayers'])

const props = defineProps({
    user: {
        type: Object as PropType<User>
    },
    game: {
        type: Object as PropType<Game>
    }
})


const showProfile = () => {
    if (props.user) {
        usePvp().setMatchOpponent(props.user)
        usePvp().showUserProfile(props.user)
    }
}

const togglePlayers = () => {
    if (props.game)
        usePvp().setMatchGame(props.game)
    emit('togglePlayers');
}

</script>

<style scoped lang="scss">
a {
    text-decoration: none;
    color: black;
}

a:hover {
    cursor:pointer;
}

.title {
    margin-top: 4px;
    font-weight: bold;
}

.desc {
    vertical-align: top;
    font-size: 10px;
    color: gray;
    font-weight: bold;
}

img {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin: auto 6px auto 6px;
}

.list-element {
    display: flex;
    background-color: white;
    border-radius: 10px;
    height: 41px;
}
</style>