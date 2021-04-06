<template>
  <div class="container">
    <h1>入力値が2倍になって返される処理</h1>
    <input
      type="number"
      class="input"
      :value="inputNumValue"
    />
    <button class="button" @click="onSubmit">送信</button>
    <div class="result">{{ result }}</div>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    inputNumValue: {
      require: true,
    },
    result: {
      require: true,
    },
  },
  methods: {
    onSubmit: function () {
      this.$emit("onSubmit", this.inputNumValue);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  margin-left: 16px;
}
</style>
