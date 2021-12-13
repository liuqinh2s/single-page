<template>
  <div class="counter">
    <a @click="decrease">-</a>
    <input type="text" v-model="number" />
    <a @click="increase">+</a>
  </div>
</template>
<script>
export default {
  props: {
    num: Number,
  },
  emits: ["change"],
  data() {
    return {
      number: this.num,
    };
  },
  methods: {
    increase() {
      this.number++;
      this.$emit("change", this.number);
    },
    decrease() {
      this.number--;
      if (this.number < 1) {
        this.number = 1;
        alert("数量不能小于1件");
      }
      this.$emit("change", this.number);
    },
  },
};
</script>
<style scoped>
.counter {
  display: flex;
  align-items: center;
}
a {
  display: block;
  float: left;
  width: 24px;
  height: 24px;
  line-height: 35px;
  text-align: center;
  font: 16px Verdana;
  color: #000;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #e0e0e0;
}
input {
  border-width: 1px 0;
  width: 30px;
  height: 20px;
  text-align: center;
  float: left;
  line-height: 24px;
  font-size: 14px;
  color: #666;
  padding: 2px 5px;
  border: 1px solid #e0e0e0;
  background: #fcfcfc;
}
</style>