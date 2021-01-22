<template>
  <div>
    <TabBar>
      <TabBarItem v-for="(item, index) in tabBarItems" :key="item.id" :path="item.path" >
        <img slot="item-img" :src="item.src" :alt="item.alt">
        <img slot="item-img-active" :src="item.activeSrc" :alt="item.alt">
        <div slot="item-name">{{ item.name }}</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    data() {
      return {
        tabBarItems: [
          {
            id: 1,
            path: '/home',
            src: require("assets/img/tabbar/main.png"),
            activeSrc: require("assets/img/tabbar/main-active.png"),
            alt: "首页",
            name: "首页"
          },
          {
            id: 2,
            path: '/category',
            src: require("assets/img/tabbar/cate.png"),
            activeSrc: require("assets/img/tabbar/cate-active.png"),
            alt: "分类",
            name: "分类"
          },
          {
            id: 3,
            path: '/shopCart',
            src: require("assets/img/tabbar/car.png"),
            activeSrc: require("assets/img/tabbar/car-active.png"),
            alt: "购物车",
            name: "购物车"
          },
          {
            id: 4,
            path: '/profile',
            src: require("assets/img/tabbar/me.png"),
            activeSrc: require("assets/img/tabbar/me-active.png"),
            alt: "我的",
            name: "我的"
          }
        ]
      }
    },
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
