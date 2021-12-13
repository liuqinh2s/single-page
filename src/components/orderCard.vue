<template>
  <div class="order">
    <div class="order-title">{{ title }}</div>
    <ul>
      <li>
        <em>订单号：</em>
        {{ id }}
      </li>
      <li>
        <em>下单时间：</em>
        {{ time }}
      </li>
      <li>
        <em>订购产品：</em>
        {{ goodsName }}
      </li>
      <li>
        <em>订单总额：</em>
        {{ sum }}
      </li>
      <li>
        <em>付款方式：</em>
        货到付款
      </li>
    </ul>
    <dl>
      <dd>
        <a href="">订单详情</a>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    id: String,
    time: String,
    goodsName: String,
    sum: String,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.order {
  overflow: hidden;
  padding-bottom: 15px;
}
.order-title {
  font-size: 14px;
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #e2e2e2;
  padding: 0px 2%;
}
.order ul {
  padding: 2%;
  overflow: hidden;
  line-height: 30px;
  color: #333;
  margin: 0;
}
li {
  list-style: none;
}
.order ul li em {
  width: 70px;
  text-align: right;
  display: inline-block;
  font-style: normal;
}
.order dl {
  float: right;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.order dl dd {
  float: left;
  margin-right: 15px;
  margin: 0;
  padding: 0;
}
.order dl a {
  border-radius: 10px;
  border: 1px solid #777;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  padding: 0px 15px;
  color: #777;
}
a {
  text-decoration: none;
  font-family: "微软雅黑";
}
</style>