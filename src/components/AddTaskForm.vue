<script setup>
const props = defineProps(["showPopup", "newTask", "fromError"]);
</script>
<template>
  <div :class="props.showPopup ? 'popup-overlay' : ''">
    <div id="myPopup" :class="['popup', props.showPopup ? 'show' : 'hidden']">
      <div class="popup-header font-bold">
        Add Task
        <span
          class="close toggle"
          @click="$emit('togglePopup')"
          data-target="myPopup"
          >close</span
        >
      </div>
      <div class="popup-body">
        <form @submit.prevent="handleForm">
          <div class="">
            <label for="title" class="block mb-2 font-bold text-gray-600"
              >Title</label
            >
            <input
              type="text"
              v-model="newTask.name"
              name="title"
              class="w-full p-2 border-2 border-indigo-300 rounded-sm"
              placeholder="Enter Title"
            />
          </div>
          <div>
            <label for="description" class="block mb-2 font-bold text-gray-600"
              >Description</label
            >
            <textarea
              placeholder="Enter Description"
              v-model="newTask.description"
              class="w-full p-2 border-2 border-indigo-300 rounded-sm"
            ></textarea>
          </div>
        </form>
      </div>
      <div class="popup-footer flex justify-items-start gap-4">
        <button
          type="submit"
          @click="$emit('saveTask')"
          class="p-3 bg-indigo-500 px-8 text-white rounded-2xl"
        >
          Add
        </button>
        <div class="my-auto">
          <p class="text-red-700 font-semibold">
            {{ props.fromError }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.hide {
  visibility: hidden;
  opacity: 0;
  transform: translateX(-50%) translateY(-50%) scale(0.8) !important;
  -moz-transform: translateX(-50%) translateY(-50%) scale(0.8) !important;
  -o-transform: translateX(-50%) translateY(-50%) scale(0.8) !important;
  -webkit-transform: translateX(-50%) translateY(-50%) scale(0.8) !important;
}

.close {
  position: absolute;
  right: 0;
  top: 0;
  width: 51px;
  height: 51px;
  font-size: 0;
  cursor: pointer;
}

.close:before,
.close:after {
  content: "";
  position: absolute;
  background: #767676;
  -moz-border-radius: 1px;
  -webkit-border-radius: 1px;
  -o-border-radius: 1px;
  border-radius: 1px;
  left: 14px;
  right: 14px;
  top: 30px;
  height: 3px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  transition: all 100ms ease-in;
  -moz-transition: all 100ms ease-in;
  -webkit-transition: all 100ms ease-in;
  -o-transition: all 100ms ease-in;
}

.close:after {
  -moz-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  background: #fafdff;
  -moz-border-radius: 5px;
  -o-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  width: 600px;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.09),
    0px 11px 12px 7px rgba(0, 0, 0, 0.02);
  -moz-transition: all 120ms;
  -webkit-transition: all 120ms;
  -o-transition: all 120ms;
  transition: all 120ms;
  z-index: 99;
  padding: 25px;
  color: #5e5e5e;
}

@media screen and (max-width: 1000px) {
  .popup {
    width: 80%;
  }
}

.popup-header {
  text-transform: uppercase;
  font-size: 18px;
}

.popup-body {
  padding: 25px 0;
}

.button {
  padding: 10px 15px;
  border: 1px solid #f5f5f5;
  text-transform: uppercase;
  box-shadow: 1px 2px 3px #f5f5f5;
  color: #5e5e5e;
  cursor: pointer;
  transition: all 120ms ease-in;
  outline: none;
}

.button:hover {
  box-shadow: 1px 3px 5px #e9e9e9;
  transform: translateY(-1px);
}

.button:active,
.button:visited {
  transform: translateY(1px);
  outline: none;
  box-shadow: 1px 2px 3px #f5f5f5;
}

.popup-overlay {
  position: fixed;
  inset: 0; /* top: 0; right: 0; bottom: 0; left: 0; shorthand */
  background: rgba(0, 0, 0, 0.5); /* semi-transparent black */
  z-index: 98; /* less than the popup itself */
}


</style>
