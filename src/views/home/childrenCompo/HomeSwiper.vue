<template>
  <swiper>
    <swiper-item v-for="(b, index) in banners">
      <a :href="b.link">
        <img :src="b.image" :alt="b.title">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        },
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
