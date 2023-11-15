<template>
    <div>
        <div class="background-dark"></div>
        <div class="card floating-center lp">
            <div style="display: flex;width:100%;justify-content: space-between;">
                <div class="text-white">LP</div>
                <div></div>
                <div class="text-white" v-if="pending">진행중...</div>
                <div style="display: flex;" v-else>
                    <vue3-autocounter :startAmount='0' :endAmount="newLp" :duration='0.5' :prefix="newLp >= 0 ? '+' : ''"
                        separator=',' :autoinit='true' class="text-yellow"></vue3-autocounter>
                    <vue3-autocounter :startAmount='lp' :endAmount="lp + newLp" :duration='1' separator=',' :autoinit='true'
                        class="text-white"></vue3-autocounter>
                </div>
            </div>
        </div>
        <div class="card floating-center zem">
            <div style="display: flex;width:100%;justify-content: space-between;">
                <div class="text-white">ZEM</div>
                <div></div>
                <div class="text-white" v-if="pending">진행중...</div>
                <div style="display: flex;" v-else>
                    <vue3-autocounter v-if="newZem != 0" :startAmount='0' :duration='0.5' :prefix="newZem > 0 ? '+' : ''"
                        separator=',' :autoinit='true' class="text-yellow"></vue3-autocounter>
                    <vue3-autocounter :startAmount='zem' :endAmount="zem + newZem" :duration='1' separator=','
                        :autoinit='true' class="text-white"></vue3-autocounter>
                </div>
                
            </div>
        </div>
        <nuxt-link to="/">
            <el-button @click="usePvp().matchReset(); props.nextState" class="button floating-center" color="#FF7414" style="top: 90%;">다음</el-button>
        </nuxt-link>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { numberWithCommas } from "@/scripts/utilsPvp"
import Vue3Autocounter from 'vue3-autocounter';
import { emitChangeFn } from 'element-plus';

var descActive = ref(false)

const props = defineProps({
    lp: {
        type: Number,
        default: 0
    },
    newLp: {
        type: Number,
        default: 0
    },
    zem: {
        type: Number,
        default: 0
    },
    newZem: {
        type: Number,
        default: 0
    },
    pending: Boolean,
    nextState: Function
})
</script>

<style scoped lang="scss">
.background-dark {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #121212 50%, rgba(0, 0, 0, 0) 100%);
    background-color: #3E3E3E;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0%;
}

.card {
    width: 941px;
    height: 150px;
    border-radius: 10px;
    padding: 17px 45px 15px 63px;
    background-color: #000000;
    box-sizing: border-box;
    display: flex;
    transform: translate(-50%, -50%);
}

.lp {
    top: 40%;
}

.zem {
    top: 55%;
}

.text-white {
    font-family: Inter;
    font-size: 50px;
    line-height: 50px;
    font-weight: 700;
    letter-spacing: 0em;
    color: white;
    margin: auto 0 auto 0;
}

.text-yellow {
    font-family: Inter;
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    letter-spacing: 0em;
    color: #FFF500;
    margin: auto 15px auto 0;
}

.button {
    width: 941px;
    height: 100px;
    border-radius: 10px;
    font-family: Inter;
    font-size: 40px;
    font-weight: 700;
    color: white;
    transform: translateX(-50%);
}

@media all and (max-width: 768px) {
    .background-dark {
        height: 70vh;
    }

    .card {
        width: 90%;
        height: 7.5%;
        padding: 16px 16px 16px 20px;
        border-radius: 5px;
    }

    .lp {
        top: 40%;
    }

    .zem {
        top: 50%;
    }

    .text-white {
        font-size: 20px;
        line-height: 20px;
        font-weight: 500;
    }

    .text-yellow {
        font-size: 15px;
        line-height: 20px;
    }

    img {
        border-radius: 50%;
        width: 42px;
        height: 42px;
        margin: auto 10px auto 0;
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
        width: 90%;
        height: 40px;
        font-size: 20px;
        font-weight: 400;
    }
}</style>