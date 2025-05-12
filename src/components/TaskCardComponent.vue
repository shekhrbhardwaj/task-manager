<template>
  <div class="task-lists grid sm:grid-cols-3 md:grid-cols-4 gap-8">
    <div
      class="task-card border-2 border-indigo-400 mb-4 p-5 rounded-2xl"
      v-for="(task, index) in tasks"
      :key="index"
    >
      <h4 class="font-bold">{{ task.name }}</h4>
      <p class="pb-3">{{ task.description }}</p>
      <div class="float-end justify-baseline">
        <input
          type="checkbox"
          name="completed"
          :checked="task.completed"
          @click="$emit('toggleEvent', task.id)"
        />
        {{ task.completed ? "Done" : "To-do" }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps(["tasks"]);
</script>

<style></style>
