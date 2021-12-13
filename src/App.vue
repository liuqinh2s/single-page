<template>
  <Home :price="price" />
  <Intro />
  <Review />
  <Form :price="price" :skuList="skuList" />
  <Footer />
</template>

<script>
import Home from "./views/home.vue";
import Intro from "./views/intro.vue";
import Form from "./views/form.vue";
import Footer from "./views/footer.vue";
import Review from "./views/review.vue";
import api from "@/api/api";

export default {
  name: "App",
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
      this.price = res[0].price;
      this.skuId = res[0].skuId;
      res.map((item) => {
        this.skuList.push(item.skuId);
      });
    });
  },
};
</script>

<style>
body {
  margin: 0px;
  font: 14px Microsoft YaHei, \5fae\8f6f\96c5\9ed1, SimSun, \5b8b\4f53, Arial,
    Verdana;
  font-family: "微软雅黑", Arial;
  color: #000;
}
</style>
