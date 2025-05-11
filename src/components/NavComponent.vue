<template>
    <header class="w-full px-4 bg-indigo-500">
        <nav class="flex gap-4 text-white p-3">
            <router-link to="/" class="text-xl">Home</router-link>
            <router-link to="/about" class="text-xl">About</router-link>
        </nav>
    </header>
</template>
<script setup>

</script>

<style>
.nav-active{
    border-bottom: 2px solid white;
}
</style>