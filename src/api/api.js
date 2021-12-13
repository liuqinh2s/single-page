import request from "@/utils/request";

export default {
  // 获取商品信息
  getGoods(goodsId) {
    return request({
      url: "/goods",
      method: "get",
      data: { goodsId },
    });
  },
  // 提交表单
  submit(data) {
    return request({
      url: "/submit",
      method: "post",
      data,
    });
  },
};
