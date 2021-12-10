<template>
  <div class="fixed-nav">
    <li>
      <a :href="`tel:${tel}`">
        <i class="fa fa-phone"></i>
        售前电话
      </a>
    </li>
    <li>
      <a :href="`tel:${tel}`">
        <i class="fa fa-phone"></i>
        立即抢购
      </a>
    </li>
    <li>
      <a :href="`tel:${tel}`">
        <i class="fa fa-phone"></i>
        微信客服
      </a>
    </li>
  </div>
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
.fixed-nav {
  width: 100%;
  left: 0px;
  margin-left: 0px;
  position: fixed;
  height: 45px;
  line-height: 45px;
  background: #fff;
  z-index: 99999;
  bottom: 0px;
}
.fixed-nav li {
  width: 33.3333%;
  float: left;
  list-style: none;
}
.fixed-nav li a {
  display: block;
  text-align: center;
  color: red;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "微软雅黑";
}
</style>