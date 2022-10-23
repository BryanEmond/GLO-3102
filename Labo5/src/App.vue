<script>
import { ref } from "vue";
import {
  createIdUser,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "./api.js";
export default {
  setup() {
    let uid = ref(0);
    return {
      uid,
      getTasks,
      createTask,
      updateTask,
      deleteTask,
    };
  },
  data() {
    return {
      text: "",
      listTasks: [],
    };
  },
  async mounted() {
    this.uid = await createIdUser();
    await createTask(this.uid,"task exemple 1");
    await createTask(this.uid,"task exemple 2");
    await createTask(this.uid,"task exemple 3");
    this.listTasks = await getTasks(this.uid);
  },
};
</script>

<template>
  <textarea
    placeholder=" Create Task Name / Update Task Name"
    v-model="text"
  ></textarea>
  <button
    @click="
      async () => {
        await createTask(uid, text);
        this.listTasks = await getTasks(uid);
        text = '';
      }
    "
  >
    Create Task
  </button>
  <div v-for="item in listTasks">
    <div>
      {{ item.name }}
      <button
        @click="
          async () => {
            await deleteTask(uid, item.id);
            this.listTasks = await getTasks(uid);
          }
        "
      >
        Delete
      </button>
      <button
        @click="
          async () => {
            await updateTask(uid, item.id, text);
            this.listTasks = await getTasks(uid);
            text = '';
          }
        "
      >
        Update
      </button>
    </div>
  </div>
</template>
