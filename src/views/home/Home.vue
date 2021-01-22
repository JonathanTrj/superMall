<template>
  <div id="home">
    <nav-bar class="nav-bar">
<!--      <div slot="left">购物街</div>-->
      <div slot="center">购物街</div>
<!--      <div slot="right">icon</div>-->
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend :recommends="recommends" />
  </div>
</template>

<script>
  import NavBar from "components/common/navigationBar/NavBar";
  import HomeSwiper from "./childrenCompo/HomeSwiper";
  import HomeRecommend from "./childrenCompo/HomeRecommend";

  import {getHomeMultidata} from "network/home";


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      }).catch(err => {

      })
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
