<template>
  <div class="tab-bar-item" @click="changeActive">
    <div v-show="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-show="isActive">
      <slot name="item-img-active"></slot>
    </div>
    <div :style="fontStyle">
      <slot name="item-name"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: {
        type: String,
        required: true
      },
      defaultColor: {
        type: String,
        default: "#bfbfbf"
      },
      activeColor: {
        type: String,
        default: "#515151"
      }
    },
    computed: {
      isActive: {
        set() {
        },
        get() {
          return this.$route.path === this.path
        }
      },
      fontStyle: {
        set() {},
        get() {
          return !this.isActive ? {color: this.defaultColor} : {color: this.activeColor}
        }
      }
    },
    methods: {
      changeActive() {
        this.isActive = !this.isActive
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;

    font-size: 12px;
    color: #bfbfbf;
  }
  .tab-bar-item img {
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-top: 3px;
  }
  .active {
    color: #515151
  }

</style>
