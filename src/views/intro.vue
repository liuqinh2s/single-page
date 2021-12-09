<template>
  <img v-for="img in imgs" :key="img.src" :src="img.src" />
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        {
          src: "http://xd5.gzbaiwei.cn/Uploads/ueditor/20210714/1626246760219886.jpg",
        },
        {
          src: "http://xd5.gzbaiwei.cn/Uploads/ueditor/20210714/1626246760154689.jpg",
        },
        {
          src: "http://xd5.gzbaiwei.cn/Uploads/ueditor/20210714/1626246760883497.jpg",
        },
        {
          src: "http://xd5.gzbaiwei.cn/Uploads/ueditor/20210714/1626246761766517.jpg",
        },
        {
          src: "http://xd5.gzbaiwei.cn/Uploads/ueditor/20210714/1626246761200324.jpg",
        },
        {
          src: "http://xd5.gzbaiwei.cn/Uploads/ueditor/20210714/1626246761705900.jpg",
        },
        {
          src: "http://xd5.gzbaiwei.cn/Uploads/ueditor/20210714/1626246761265283.jpg",
        },
        {
          src: "http://xd5.gzbaiwei.cn/Uploads/ueditor/20210714/1626246761321759.jpg",
        },
        {
          src: "http://xd5.gzbaiwei.cn/Uploads/ueditor/20210714/1626246761894807.jpg",
        },
        {
          src: "http://xd5.gzbaiwei.cn/Uploads/ueditor/20210714/1626246761853829.jpg",
        },
        {
          src: "http://xd5.gzbaiwei.cn/Uploads/ueditor/20210714/1626246761843070.jpg",
        },
        {
          src: "http://xd5.gzbaiwei.cn/Uploads/ueditor/20210714/1626246761546935.jpg",
        },
        {
          src: "http://xd5.gzbaiwei.cn/Uploads/ueditor/20210714/1626246761567270.jpg",
        },
      ],
    };
  },
};
</script>
<style>
img {
  width: 100%;
  margin-bottom: -5px;
}
</style>