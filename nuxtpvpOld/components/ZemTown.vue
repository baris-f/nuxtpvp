<template>
  <div>
    <img class="bg" src="/images/ZemTown.png"/>
    <div style="right: 30%;top:60%; position: fixed;">
      <el-button @click="usePvp().showUserProfile(user)" style="height: 50px; width: 120px;font-size: x-large;" color='red'>Florent</el-button>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { useCustomFetch } from '~/scripts/useCustomFetch';

var user = ref(null);
const header = {
  'method': 'get',
};

const FetchData = async () => {
  user = await useCustomFetch("/user", header).then(res => { return res.result })
}
onMounted(() => {
  FetchData()
})
</script>

<style scoped lang="scss">
.bg {
  margin-top: 50px;
  height: 95vh;
  width: 100%;
  object-fit: cover;
}

</style>
