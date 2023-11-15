<template>
    <div>
        <div class="background-dark"></div>
        <div class="floating-center title">{{ title }}</div>
        <div class="player-card floating-center player">
            <div class="img skeleton-animation" v-if="pending"/>
            <img :src="playerOne?.picture" v-else/>
            <span class="name" v-if="pending">진행중...</span>
            <div class="info-container" v-else>
                <div class="name">{{ playerOne?.name }}</div>
                <div class="num">{{ numberWithCommas(match?.players[0].score ?? 0) }}</div>
            </div>
        </div>
        <div class="player-card floating-center opponent">
            <div class="img skeleton-animation" v-if="pending"/>
            <img :src="playerTwo?.picture" v-else/>
            <span class="name" v-if="pending">진행중...</span>
            <div class="info-container" v-else>
                <span class="name">{{ playerTwo?.name }}</span>
                <span class="num">{{ numberWithCommas(match?.players[1].score ?? 0) }}</span>
            </div>
        </div>
        <div class="floating-center versus">
            <span class="text-center">VS</span>
        </div>
        <!-- <el-button class="button floating-center" color="#FF7414">나가기</el-button> -->
    </div>
</template>

<script setup lang="ts">
import { numberWithCommas } from "@/scripts/utilsPvp"
import { Match, User } from "@/scripts/typesPvp"

const playerOne = ref(null)
const playerTwo = ref(null)

const props = defineProps({
    title: {
        type: String,
        default: "승리했습니다!"
    },
    match: Object as PropType<Match>,
    users: Array<User>,
    count: {
        type: Number,
        default: 5
    },
    pending: Boolean,
    nextState: Function
})

const getUser = (id: number | undefined): User | undefined | null => {
    if (id == undefined || !props.users)
        return null
    return props.users.find((elem: User) => elem.id == id)
}

const LoadLocalData = () => {
    playerOne.value = getUser(props.match?.players[0]?.user_id)
    playerTwo.value = getUser(props.match?.players[1]?.user_id)
}

onMounted(() => {
  LoadLocalData()
})

console.log(props.pending)
watch(
  () => props.pending,
  () => {
    LoadLocalData()
  }
)


var count = ref(props.count)

function countDown() {
    if (count.value > 0)
        setTimeout(() => {
            count.value = count.value - 1;
            console.log(count.value)
          }, 1000);
    else
        props.nextState ? props.nextState() : ""
}
countDown()

watch(count, () => {
    countDown();
});
</script>

<style scoped lang="scss">
.background-dark {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #121212 33.33%, #0E0E0E 66.67%, rgba(0, 0, 0, 0) 100%);
    width: 100vw;
    height: 80vh;
    position: fixed;
}

.info-container {
    display: flex; 
    flex-direction: column; 
    justify-content: space-evenly;
}

.title {
    font-family: Inter;
    font-size: 70px;
    font-weight: 700;
    line-height: 84px;
    letter-spacing: 0em;
    color: white;
    top: 25%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
}

.versus {
    width: 150px;
    height: 77px;
    border-radius: 10px;
    background-color: #FFFFFF4D;
    display: flex;
    box-shadow: 0px 4px 4px 0px #00000040;
    transform: translateX(-50%);
    top: 48%;
    span {
        margin: auto;
        font-family: Inter;
        font-size: 50px;
        font-weight: 700;
        line-height: 60px;
    }
}

.player {
    top: 44%;
    background-color: #FF7414;
}

.opponent {
    top: 58.5%;
    background-color: #5D5FFE;
}

.player-card {
    width: 850px;
    height: 150px;
    border-radius: 10px;
    padding: 17px 0 15px 49px;
    box-sizing: border-box;
    display: flex;
    transform: translate(-50%, -50%);
}

img, .img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: auto 26px auto 0;
}

.text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.name {
    font-family: Inter;
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0em;
    color: black;
}

.num {
    font-family: Inter;
    font-size: 50px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0em;
    color: white;
}

.button {
    width: 171px;
    height: 49px;
    border-radius: 5px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    color: white;
    top: 68%;
    transform: translateX(-50%);
}

@media all and (max-width: 768px) {
    .background-dark {
        height: 70vh;
    }

    .versus {
        width: 15%;
        height: 4%;
        border-radius: 5px;
        top: 47.5%;

        span {
            font-size: 24px;
            font-weight: 900;
            line-height: 20px;
        }
    }

    .player-card {
        width: 85%;
        height: 8.5%;
        padding: 16px 0 16px 20px;
        border-radius: 5px;
    }

    .player {
        top: 44%;
    }

    .opponent {
        top: 55%;
    }

    img, .img {
        border-radius: 50%;
        width: 42px;
        height: 42px;
        margin: auto 15px auto 0;
    }

    .title {
        font-size: 30px;
        line-height: 30px;
        top: 32%;
    }

    .name {
        font-size: 20px;
        line-height: 20px;
    }

    .num {
        font-size: 25px;
        line-height: 20px;
        font-weight: 700;
    }

    .button {
        width: 30%;
        height: 40px;
        top: 64%;
        font-weight: 400;
    }
}

@media all and (min-width: 480px) and (max-width: 767px) {
    .title {
        font-size: 50px;
    }

    .name {
        font-size: 25px;
    }

    .num {
        font-size: 30px;
    }

    img, .img {
        width: 60px;
        height: 60px;
    }
}
</style>