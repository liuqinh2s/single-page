<template>
  <header>
    <a href="javascript:history.back(-1);">
      <font-awesome-icon icon="angle-left" />
    </a>
    {{ title }}
  </header>
</template>
<script>
export default {
  props: {
    title: String,
  },
};
</script>
<style scoped>
header {
  background: #f7262c;
  height: 50px;
  line-height: 50px;
  position: relative;
  color: #fff;
  font-size: 16px;
  text-align: center;
}
header a {
  width: 30px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  display: inline-block;
  position: absolute;
  left: 0px;
  text-decoration: none;
  font-family: "微软雅黑";
}
header i {
  font-size: 22px;
}
</style>