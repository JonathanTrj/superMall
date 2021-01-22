<template>
  <div id="home-recommend">
    <div v-for="(re, index) in recommends" class="recommend-item">
      <a :href="re.link">
        <img :src="re.image" :alt="re.title">
        <div>{{ re.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommends: {
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
  #home-recommend {
    display: flex;
    flex-direction: row;
    text-align: center;
    font-size: 12px;
    padding: 5px 0 20px;
    border-bottom: 8px solid #eeeeee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 80px;
    height: 80px;
    margin: 8px 0;
  }
</style>
