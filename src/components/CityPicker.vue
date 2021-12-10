<template>
  <select id="province" @change="selectChange">
    <option>请选择省份</option>
    <option
      :id="code"
      v-for="(name, code) in areaList.province_list"
      :key="code"
    >
      {{ name }}
    </option>
  </select>
  <select id="city" @change="selectChange">
    <option>请选择城市</option>
    <option
      :id="code"
      v-for="(name, code) in areaList['city_list']"
      :key="code"
    >
      {{ name }}
    </option>
  </select>
  <select id="county" @change="selectChange">
    <option>请选择区县</option>
    <option
      :id="code"
      v-for="(name, code) in areaList['county_list']"
      :key="code"
    >
      {{ name }}
    </option>
  </select>
</template>
<script>
import { areaList } from "@vant/area-data";

export default {
  props: {
    area: Object,
  },
  data() {
    return {
      areaList: {
        province_list: areaList["province_list"],
        city_list: {},
        county_list: {},
      },
    };
  },
  emits: ["select-complete"],
  methods: {
    selectChange(evt) {
      const target = evt.target;
      switch (evt.target.id) {
        case "province": {
          if (target.value !== "请选择省份") {
            this.provinceId = target.selectedOptions[0].id;
            const prefix = this.provinceId.slice(0, 2);
            let res = {};
            for (let [k, v] of Object.entries(areaList.city_list)) {
              if (k.startsWith(prefix)) {
                res[k] = v;
              }
            }
            this.areaList.city_list = res;
            this.areaList.county_list = {};
          } else {
            this.areaList.city_list = {};
            this.areaList.county_list = {};
          }
          break;
        }
        case "city": {
          if (target.value !== "请选择城市") {
            this.cityId = target.selectedOptions[0].id;
            const prefix = this.cityId.slice(0, 4);
            let res = {};
            for (let [k, v] of Object.entries(areaList.county_list)) {
              if (k.startsWith(prefix)) {
                res[k] = v;
              }
            }
            this.areaList.county_list = res;
          } else {
            this.areaList.county_list = {};
          }
          break;
        }
        case "county": {
          if (target.value !== "请选择区县") {
            this.countyId = target.selectedOptions[0].id;
            this.$emit("select-complete", {
              provinceId: this.provinceId,
              cityId: this.cityId,
              countyId: this.countyId,
            });
          } else {
            this.areaList.county_list = {};
          }
          break;
        }
        default: {
          break;
        }
      }
    },
  },
  mounted() {
    console.log(this.area);
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