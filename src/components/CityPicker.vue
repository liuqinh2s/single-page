<template>
  <select id="province" @change="selectChange">
    <option>请选择省份</option>
    <option :id="code" v-for="(name, code) in area.province_list" :key="code">
      {{ name }}
    </option>
  </select>
  <select id="city" @change="selectChange">
    <option>请选择城市</option>
    <option :id="code" v-for="(name, code) in area['city_list']" :key="code">
      {{ name }}
    </option>
  </select>
  <select id="county" @change="selectChange">
    <option>请选择区县</option>
    <option :id="code" v-for="(name, code) in area['county_list']" :key="code">
      {{ name }}
    </option>
  </select>
</template>
<script>
import { areaList } from "@vant/area-data";

export default {
  data() {
    return {
      area: {
        province_list: areaList["province_list"],
        city_list: {},
        county_list: {},
      },
    };
  },
  created() {
    console.log(areaList);
  },
  methods: {
    selectChange(evt) {
      console.log(evt);
      const target = evt.target;
      switch (evt.target.id) {
        case "province": {
          if (target.value !== "请选择省份") {
            const provinceId = target.selectedOptions[0].id;
            const prefix = provinceId.slice(0, 2);
            let res = {};
            for (let [k, v] of Object.entries(areaList.city_list)) {
              if (k.startsWith(prefix)) {
                res[k] = v;
              }
            }
            console.log(res);
            this.area.city_list = res;
          } else {
            this.area.city_list = {};
            this.area.county_list = {};
          }
          break;
        }
        case "city": {
          if (target.value !== "请选择城市") {
            const cityId = target.selectedOptions[0].id;
            const prefix = cityId.slice(0, 4);
            let res = {};
            for (let [k, v] of Object.entries(areaList.county_list)) {
              if (k.startsWith(prefix)) {
                res[k] = v;
              }
            }
            console.log(res);
            this.area.county_list = res;
          } else {
            this.area.county_list = {};
          }
          break;
        }
        case "county": {
          break;
        }
        default: {
          break;
        }
      }
    },
  },
};
</script>
<style scoped>
select {
  float: left;
  width: 32%;
  margin-right: 1.2%;
  text-align: center;
  height: 35px;
  line-height: 35px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
</style>