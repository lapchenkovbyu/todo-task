<template>
  <div>
    <button id="show-modal" @click="showModal = true">{{ this.title }}</button>
    <Modal v-if="showModal" @close="showModal = false" @answer="answer">
      <h3 slot="header">custom header</h3>
    </Modal>
  </div>
</template>

<script>
import Modal from "../templates/Modal";
export default {
  name: "DeleteModal",
  props: ["title", "index", "todo"],
  components: { Modal },
  data: () => ({
    showModal: false
  }),
  methods: {
    answer(answer, index = this.index, todo = this.todo) {
      this.$emit("answer", { answer, index, todo });
      this.showModal = false;
    }
  }
};
</script>

<style scoped></style>
