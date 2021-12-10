<template>
  <div class="sum">
    <span class="sum-title">金额</span>
    <strong
      ><i>￥</i><span class="sum-num">{{ sum }}</span></strong
    >
  </div>
  <form>
    <div class="box">
      <label>选择颜色</label>
    </div>
    <div class="box">
      <label>姓名</label>
      <div class="input-div">
        <input class="input" placeholder="请填写姓名" type="text" />
      </div>
    </div>
    <div class="box">
      <label>手机号码</label>
      <div class="input-div">
        <input class="input" placeholder="请填写手机号码" type="text" />
      </div>
    </div>
    <div class="box">
      <label>所在地区</label>
      <div class="city-picker">
        <CityPicker />
      </div>
    </div>
    <div class="box">
      <label>详细地址</label>
      <div class="input-div">
        <input class="input" placeholder="请填写详细地址" type="text" />
      </div>
    </div>
    <div class="box">
      <label>留言</label>
      <div class="input-div">
        <textarea
          placeholder="选填，如备用手机、商品规格、配送时间、或者其它的需求，可以在此留言说明！"
        />
      </div>
    </div>
    <div class="box">
      <label><b>付款方式</b></label>
      <div class="input-div">
        <li class="huodao hover">
          货到付款
          <i class="gou"></i>
        </li>
      </div>
    </div>
  </form>
  <div class="tips">
    温馨提示：选择货到付款在家等快递公司送货上门，先验货后付款！
  </div>
  <div class="submit">填写好了，立即提交订单!</div>
  <div class="search">
    <dt>
      <input type="text" placeholder="请填写手机号码查询订单信息" />
    </dt>
    <span>查询</span>
  </div>
  <div class="foot-img">
    <img :src="footImg" />
  </div>
</template>
<script>
import CityPicker from "../components/CityPicker.vue";

export default {
  data() {
    return {
      sum: "1198.00",
      footImg:
        "http://xd5.gzbaiwei.cn/Uploads/Picture/2021-07-15/2021071514245315139.jpg",
    };
  },
  components: {
    CityPicker,
  },
};
</script>
<style scoped>
.sum {
  margin: 13px 0;
}
.sum-title {
  float: left;
  line-height: 35px;
  width: 40px;
  height: 35px;
  text-align: left;
  padding-left: 2%;
  font-weight: bold;
}
.sum strong {
  float: right;
  color: red;
  padding-right: 2%;
}
.sum strong i {
  font-size: 12px;
}
.sum-num {
  font-size: 20px;
}
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
  margin: 10px 0;
  clear: both;
  width: 100%;
  overflow: hidden;
}
.box label {
  float: left;
  line-height: 35px;
  width: 60px;
  height: 35px;
  text-align: right;
}
.box .input-div {
  min-height: 34px;
  margin-left: 70px;
  line-height: 35px;
}
.box .input {
  width: 94%;
  border-radius: 3px;
  border: 1px solid #ccc;
  line-height: 34px;
  height: 34px;
  padding: 0px 2%;
  font-size: 14px;
}
.tips {
  border-radius: 3px;
  border: 1px solid red;
  margin: 0px 2%;
  color: red;
  padding: 1% 2%;
}
.submit {
  width: 96%;
  background: red;
  font-size: 16px;
  overflow: hidden;
  border-radius: 3px;
  text-align: center;
  color: #fff;
  margin: 15px 2%;
  padding: 3% 0px;
  cursor: pointer;
}
.city-picker {
  min-height: 34px;
  margin-left: 70px;
  line-height: 35px;
}
form textarea {
  width: 94%;
  height: 74px;
  line-height: 20px;
  padding: 5px 2%;
  font-size: 14px;
  border-radius: 3px;
  border: 1px solid #ccc;
}
.box li {
  position: relative;
  float: left;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  list-style: none;
}
.box li.hover {
  border: 2px solid red !important;
  color: red;
}
.box li.huodao {
  border: 2px solid #ccc;
  border-radius: 3px;
  padding: 0px 10px 0px 32px;
  display: inline-block;
  background: url(http://xd5.gzbaiwei.cn/Public/Home/images/pay1.png) no-repeat
    5px center;
  background-size: 23px 23px;
}
.box i.gou {
  position: absolute;
  bottom: 0px;
  right: 0px;
  background: url(http://xd5.gzbaiwei.cn/Public/Home/images/gou-4.png) no-repeat
    center center;
  background-size: 15px 15px;
  width: 15px;
  height: 15px;
  display: block;
}
.search {
  width: 98%;
  margin: 10px 1%;
  overflow: hidden;
}
.search input {
  width: 96%;
  height: 35px;
  line-height: 35px;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 0px 2%;
}
.search span {
  width: 20%;
  float: right;
  border-radius: 3px;
  height: 35px;
  line-height: 35px;
  background: red;
  color: #fff;
  text-align: center;
  cursor: pointer;
}
.search dt {
  float: left;
  width: 78%;
}
.foot-img img {
  width: 100%;
}
</style>