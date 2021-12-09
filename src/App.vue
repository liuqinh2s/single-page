<template>
  <Home />
  <Intro />
  <Review />
  <Form />
  <Footer />
</template>

<script>
import Intro from "./views/intro.vue";
import Form from "./views/form.vue";
import Footer from "./views/footer.vue";
import Home from "./views/Home.vue";
import Review from "./views/review.vue";

export default {
  name: "App",
  components: {
    Intro,
    Review,
    Form,
    Footer,
    Home,
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
