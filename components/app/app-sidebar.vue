<script setup lang="ts">
const { pageMetadata } = usePageNavigation()

const availablePages = computed(() => Object.entries(pageMetadata).map(([path, metadata]) => ({ path, ...metadata })))
</script>

<template>
    <div>
        <div>
            <NuxtLink v-for="page in availablePages" :key="page.path" :to="page.path">
                <div flex items-center gap-8px>
                    <div :class="page.icon" />
                    <span>{{ page.title }}</span>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
