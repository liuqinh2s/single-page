<template>
  <Header title="我的订单" />
</template>
<script>
import Header from "../components/Header.vue";
import api from "@/api/api";

export default {
  data() {
    return {
      title: "我的订单",
    };
  },
  components: {
    Header,
  },
  mounted() {
    const phone = this.$route.query.phone;
    api.getOrder(phone).then((res) => {
      console.log(res);
    });
  },
};
</script>
<style scoped>
</style>