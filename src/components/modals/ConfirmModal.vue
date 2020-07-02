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
  name: "ConfirmModal",
  props: ["title"],
  components: { Modal },
  data: () => ({
    showModal: false
  }),
  methods: {
    answer(answer) {
      this.$emit("answer", answer);
      this.showModal = false;
    }
  }
};
</script>

<style scoped></style>
