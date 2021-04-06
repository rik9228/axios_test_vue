<template>
  <div id="app">
    <Form
      @onSubmit="submit"
      :result="result"
      :inputNumValue="inputNumValue"
    >
    </Form>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import axios from "axios";

export default {
  name:'App',
  components: {
    Form,
  },
  data() {
    return {
      result: "",
      inputNumValue: "",
    };
  },
  methods: {
    submit: function (inputNumValue) {
      if (inputNumValue === "") {
        alert("値を入力してください。");
        return;
      }
      axios
        .get(`http://localhost:8888/api.php?num=${inputNumValue}`)
        .then((response) => {
          this.result = `${response.data.double}（${inputNumValue}* 2）`;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
