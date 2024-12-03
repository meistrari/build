<script lang="ts" setup>
import { animate } from 'motion'

onMounted(() => {
    animate('#container', {
        inset: ['0', '24px'],
        borderRadius: ['0', '24px'],
    }, { type: 'spring', stiffness: 100, damping: 10 }).then(() => {
        animate('#square', {
            opacity: [0, 0.3],
            transform: 'translateY(-130px) scale(1.5)',
        }, { type: 'spring', stiffness: 50, damping: 20 })
    })
})
</script>

<template>
    <div
        h-screen
        w-screen
        flex items-center justify-center
        bg-black
    >
        <div
            id="container"
            absolute
            bg-white p-24px
            inset-0
            flex="~ col" items-center justify-center
        >
            <div heading-h2-semibold relative z-2>
                <span>Tela</span> <span op-60>Build</span>
            </div>
            <div id="square" relative op-0 scale-100 z-1>
                <div bg-gradient-to-t from-white via-white to-transparent absolute inset-0 />
                <div w-128px aspect-square b="12px black" />
            </div>
        </div>
    </div>
</template>

<style>
body {
  overflow: hidden;
}
</style>
