<template>
  <div class="sum">
    <span class="sum-title">金额</span>
    <strong
      ><i>￥</i><span class="sum-num">{{ sum() }}</span></strong
    >
  </div>
  <form>
    <div class="box">
      <label>选择SKU</label>
      <div class="input-div">
        <select @change="onSelect">
          <option v-for="sku in skuList" :key="sku">{{ sku }}</option>
        </select>
      </div>
    </div>
    <div class="box">
      <label>数量</label>
      <div class="input-div">
        <NumCounter :num="num" @change="(num) => (this.num = num)" />
      </div>
    </div>
    <div class="box">
      <label>姓名</label>
      <div class="input-div">
        <input
          class="input"
          placeholder="请填写姓名"
          type="text"
          v-model="name"
        />
      </div>
    </div>
    <div class="box">
      <label>手机号码</label>
      <div class="input-div">
        <input
          class="input"
          placeholder="请填写手机号码"
          type="text"
          v-model="phone"
        />
      </div>
    </div>
    <div class="box">
      <label>所在地区</label>
      <div class="city-picker">
        <CityPicker :area="area" @select-complete="selectComplete" />
      </div>
    </div>
    <div class="box">
      <label>详细地址</label>
      <div class="input-div">
        <input
          class="input"
          placeholder="请填写详细地址"
          type="text"
          v-model="address"
        />
      </div>
    </div>
    <div class="box">
      <label>留言</label>
      <div class="input-div">
        <textarea
          v-model="message"
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
  <div class="submit" @click="submit">填写好了，立即提交订单!</div>
  <div class="search">
    <dt>
      <input
        type="text"
        placeholder="请填写手机号码查询订单信息"
        v-model="searchPhone"
      />
    </dt>
    <span @click="searchOrder">查询</span>
  </div>
  <div class="foot-img">
    <img :src="footImg" />
  </div>
</template>
<script>
import CityPicker from "./CityPicker.vue";
import NumCounter from "./NumCounter.vue";

import api from "@/api/api";
import { getTime } from "@/utils/utils";
import { areaList } from "@vant/area-data";

export default {
  props: {
    title: String,
    price: String,
    skuList: Array,
  },
  data() {
    return {
      footImg:
        "http://xd5.gzbaiwei.cn/Uploads/Picture/2021-07-15/2021071514245315139.jpg",
      area: {
        provinceId: null,
        cityId: null,
        countyId: null,
      },
      num: 1,
      name: null,
      phone: null,
      address: null,
      message: null,
      sku: null,
      areaSelected: false,
      geoLocation: "",
      searchPhone: null,
    };
  },
  components: {
    CityPicker,
    NumCounter,
  },
  watch: {
    area(val) {
      console.log(val);
    },
  },
  computed: {},
  methods: {
    sum() {
      return (this.price * this.num).toFixed(2);
    },
    selectComplete(val) {
      this.area = val;
      this.areaSelected = true;
    },
    onSelect(evt) {
      const target = evt.target;
      this.sku = target.value;
    },
    submit() {
      if (!this.name) {
        alert("请填写姓名");
      } else if (!this.phone) {
        alert("请填写手机号");
      } else if (
        !/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(
          this.phone
        )
      ) {
        alert("手机号格式错误");
      } else if (!this.areaSelected) {
        alert("请选择地区");
      } else if (!this.address) {
        alert("请填写地址");
      } else {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.geoLocation =
              "纬度: " +
              position.coords.latitude +
              "经度: " +
              position.coords.longitude;
            this.post();
          });
        } else {
          this.post();
        }
      }
    },
    post() {
      console.log(this.title);
      api
        .submit({
          num: this.num,
          name: this.name,
          phone: this.phone,
          address: this.address,
          message: this.message,
          area:
            areaList.province_list[this.area.provinceId] +
            areaList.city_list[this.area.cityId] +
            areaList.county_list[this.area.countyId],
          sku: this.sku || this.skuList[0],
          sum: this.sum(),
          geoLocation: this.geoLocation,
          time: getTime(),
          orderId: Date.now().toString() + this.phone.slice(7, 11),
          goodsName: this.title,
        })
        .then((res) => {
          console.log(res);
        });
    },
    searchOrder() {
      this.$router.push({ name: "Order", query: { phone: this.searchPhone } });
    },
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
  display: flex;
  align-items: center;
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