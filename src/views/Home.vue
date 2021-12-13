<template>
  <div class="banner">
    <img :src="banner" />
  </div>
  <div class="price-bg">
    <div class="price">
      <p>
        ￥<span class="new-price">{{ price }}</span
        >元
      </p>
      <span class="origin-price">原价¥{{ originPrice }}</span>
    </div>
    <span class="sale">{{ peopleNum }}人已抢购 剩余{{ goodsNum }}件</span>
  </div>
  <div class="time">
    <div class="time-label">距结束：</div>
    <div class="timer">
      <span>{{ hour }}</span
      >时 <span>{{ minute }}</span
      >分 <span>{{ second }}</span
      >秒
    </div>
  </div>
  <div class="description">
    大连干海生底播深海9年淡干海参干货250g辽刺参海渗生礼盒
  </div>
  <div class="goumai">
    <img :src="hd" />
    今日限购1000件,目前库存901件
  </div>
</template>
<script>
export default {
  props: {
    price: String,
  },
  data() {
    return {
      banner:
        "http://xd5.gzbaiwei.cn/Uploads/Picture/2021-07-14/2021071415125792692.jpg",
      peopleNum: 99,
      goodsNum: 901,
      originPrice: "1588.00",
      hour: 19,
      minute: 4,
      second: 51,
      hd: "http://xd5.gzbaiwei.cn/Public/Home/images/hd.png",
    };
  },
};
</script>
<style scoped>
.banner img {
  width: 100%;
  margin-bottom: -5px;
}
.price-bg {
  background: red;
  color: #fff;
  overflow: hidden;
  padding: 2%;
}
.price-bg .price {
  float: left;
  font-weight: bold;
  font-size: 16px;
}
.price-bg .price p {
  font-size: 12px;
  margin: 0;
}
.price-bg .price p .new-price {
  font-size: 26px;
  padding: 0px 3px;
}
.price-bg .price .origin-price {
  color: rgb(255, 164, 144);
  float: left;
  font-size: 14px;
  text-decoration: line-through;
}
.price-bg .sale {
  float: right;
  font-weight: bold;
  font-size: 16px;
  margin-top: 18px;
}
.time {
  color: #000;
  font-size: 16px;
  text-align: center;
  line-height: 25px;
  width: 250px;
  margin: 15px auto 0px auto;
  clear: both;
  overflow: hidden;
}
.time .time-label {
  float: left;
}
.time .timer span {
  background-color: red;
  color: #fff;
  padding: 0px 7px;
  border-radius: 2px;
  margin: 0px 3px;
  display: inline-block;
}
.description {
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  padding: 3% 0;
  color: #333;
}
.goumai {
  background: rgb(252, 237, 235);
  color: rgb(244, 75, 75);
  text-align: center;
  font-size: 18px;
  padding: 7% 0;
  font-weight: bold;
}
.goumai img {
  width: 22px;
  margin-right: 5px;
}
</style>