<template>
  <div class="title" id="title">客户评价<span>参与评价</span></div>
  <ul class="review">
    <li v-for="comment in comments" :key="comment.id">{{ comment.content }}</li>
  </ul>
  <div class="title" id="buy">今日秒杀，限时抢购！</div>
</template>
<script>
export default {
  data() {
    return {
      comments: [
        {
          id: 0,
          content: "产品不错(170)",
        },
        {
          id: 1,
          content: "用着效果不错(165)",
        },
        {
          id: 2,
          content: "质量很好(372)",
        },
      ],
    };
  },
};
</script>
<style scoped>
#title {
  text-align: center;
  position: relative;
}
.title {
  height: 45px;
  line-height: 45px;
  color: #fff;
  font-size: 18px;
  background: red;
  font-weight: bold;
  padding-left: 15px;
}
.title span {
  font-size: 14px;
  position: absolute;
  right: 10px;
  font-weight: normal;
  cursor: pointer;
}
.review li {
  font-size: 11px;
  list-style: none;
  display: inline-block;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
  margin-right: 15px;
  text-align: center;
  height: 28px;
  line-height: 28px;
  border-radius: 30px;
  color: #ffffff;
  background-color: #ffa467;
}
.review {
  padding: 10px;
}
</style>