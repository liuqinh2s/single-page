<template>
  <Home :price="price" />
  <Intro />
  <Review />
  <Form :title="title" :price="price" :skuList="skuList" />
  <Footer />
</template>
<script>
import Home from "@/components/home.vue";
import Intro from "@/components/intro.vue";
import Form from "@/components/form.vue";
import Footer from "@/components/footer.vue";
import Review from "@/components/review.vue";
import api from "@/api/api";

export default {
  data() {
    return {
      price: "1198.00",
      skuId: null,
      skuList: [],
    };
  },
  components: {
    Intro,
    Review,
    Form,
    Footer,
    Home,
  },
  mounted() {
    api.getGoods(110).then((res) => {
      console.log(res);
      this.title = res[0].title;
      this.price = res[0].price;
      this.skuId = res[0].skuId;
      res.map((item) => {
        this.skuList.push(item.skuId);
      });
    });
  },
};
</script>
<style scoped>
</style>