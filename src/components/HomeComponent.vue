<template>
  <div class="w-full flex justify-end">
    <button
      type="button"
      @click="addTaskHandler"
      class="p-2 m-2 bg-indigo-500 rounded-2xl text-white px-6 py-4 cursor-pointer"
    >
      Add Task
    </button>
  </div>

  <div class="pt-3">
    <FilterTask @filterHandle="filterHandle" :filterBy="filterBy" />
    <TaskCard @toggleEvent="toggleEvent" :tasks="filterTasks" />
  </div>
  <div>
    <AddTaskForm
      :showPopup="showPopup"
      @togglePopup="togglePopup"
      :newTask="newTask"
      @saveTask="saveTask"
      :fromError="fromError"
    />
  </div>
</template>
<script setup>
import { ref, reactive, computed } from "vue";
import TaskCard from "./TaskCardComponent.vue";
import AddTaskForm from "./AddTaskForm.vue";
import FilterTask from "./FilterTask.vue";

const filterBy = ref("");
const showPopup = ref(false);
const fromError = ref("");

let newTask = reactive({
  completed: false,
  name: "",
  description: "",
  id: "",
});

const resetForm = () => {
  newTask = {
    completed: false,
    name: "",
    description: "",
    id: "",
  };
};

const toggleEvent = (id) => {
  tasks.map((task) => {
    if (task.id === id) {
      task.completed = !task.completed;
    }
  });
};

const filterHandle = (applyFilter) => {
  filterBy.value = applyFilter;
};

const filterTasks = computed(() => {
  if (filterBy.value == "") return tasks;
  if (filterBy.value === "done") return tasks.filter((task) => task.completed);
  if (filterBy.value === "todo") return tasks.filter((task) => !task.completed);
});

const addTaskHandler = () => {
  showPopup.value = true;
};

const togglePopup = () => {
  showPopup.value = false;
  resetForm();
  fromError.value = "";
};

const saveTask = () => {
  newTask.id = tasks.length + 1;
  if (newTask.name == "" && newTask.description == "") {
    fromError.value = "Task title and description can't be empty.";
  } else if (newTask.name == "") {
    fromError.value = "Task title can't be empty.";
  } else if (newTask.description == "") {
    fromError.value = "Task description can't be empty.";
  } else {
    fromError.value = "";
    tasks.push(newTask);
    resetForm();
    showPopup.value = false;
  }
};

const tasks = reactive([
  {
    name: "Task 1",
    description:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
    completed: true,
    id: 1,
  },
  {
    name: "Task 2",
    description:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. 2",
    completed: true,
    id: 2,
  },
  {
    name: "Task 3",
    description:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
    completed: false,
    id: 3,
  },
  {
    name: "Task 3",
    description:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
    completed: false,
    id: 4,
  },
]);
</script>
<style></style>
