<template>
    <NuxtLayout>
        <div class="prose">
            <h1 v-if="error?.statusCode == 404"> 404 </h1>
            <p> Error
            </p>
            <p>
                <strong>{{ error?.message }}</strong>
            </p>
            <NuxtLink to="/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3">
            <button class="bg-blue-200 rounded p-3">
                Go home
            </button>
            </NuxtLink>
        </div>
    </NuxtLayout>
</template>

<script setup>
const error = useError()
</script>