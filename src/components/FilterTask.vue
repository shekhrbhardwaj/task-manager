<script setup>
    const props = defineProps(['filterBy'])
    console.log(props.filterBy);
</script>
<template>
    <div class="p-2">
        <h3>Filter by status</h3>
        <div class="flex gap-4">
            <button @click="$emit('filterHandle','todo')" :class="['px-5  rounded-3xl font-bold', props.filterBy ==='todo'?'bg-amber-600 text-white':'bg-gray-300']">To-do</button>
            <button @click="$emit('filterHandle','done')" :class="['px-5 rounded-3xl font-bold', props.filterBy ==='done'?'bg-amber-600 text-white':'bg-gray-300']">Done</button>
            <span @click="$emit('filterHandle','')" v-if=(props.filterBy) class="text-red-800 underline cursor-pointer">x Clear</span>
        </div>
    </div>
</template>