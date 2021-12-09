<template>
  <div class="title"><span>在线提交订单</span></div>
  <form>
    <div class="box">
      <label><em>*</em>选择产品</label>
      <input />
    </div>
    <div class="box">
      <label><em>*</em>数量</label>
      <input />
    </div>
    <div class="box">
      <label><em>*</em>价格</label>
      <input />
    </div>
    <div class="box">
      <label><em>*</em>姓名</label>
      <input />
    </div>
    <div class="box">
      <label><em>*</em>手机号码</label>
      <input />
    </div>
    <div class="box">
      <label><em>*</em>所在地区</label>
      <input />
    </div>
    <div class="box">
      <label><em>*</em>详细地址</label>
      <input />
    </div>
    <div class="box">
      <label><em>*</em>付款方式</label>
      <input />
    </div>
    <div class="box">
      <label>留言</label>
      <input />
    </div>
    <button>提交表单</button>
  </form>
</template>
<script>
export default {};
</script>
<style scoped>
.title {
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  background: #e0e0e0;
}
.title span {
  display: block;
  float: left;
  width: 33%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  background-color: #a98b44;
}
em {
  font-style: normal;
  color: #f00;
  margin-right: 5px;
}
.box {
  float: left;
  width: 100%;
  margin-bottom: 8px;
}
.box label {
  float: left;
  display: inline;
  overflow: hidden;
  width: 22%;
  text-align: right;
  padding-top: 3px;
  padding-right: 3%;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}
</style>