<template>
  <a :href="`tel:${tel}`">
    <span>电话咨询</span>
  </a>
  <a :href="`tel:${tel}`">
    <span>在线预订</span>
  </a>
</template>
<script>
export default {
  data() {
    return {
      tel: "18597945372",
    };
  },
};
</script>
<style scoped>
</style>