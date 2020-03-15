<template>
  <div class="label-list">
    <div class="label-item" v-for="(item,index) in labelList" :class="{red:item.hot==='true'}" :key="index">
      {{item.label}}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: {
      labelList: {
        type: Array,
        require: true
      }
    },
    methods: {}
  };
</script>

<style lang="less" scoped>
.label-list{
  .label-item{
    display: inline-block;
    background-color: @theme-bg-garyEB-color;
    color: @theme-bg-gray-color-small;
    width: 49px;
    height:18px;
    line-height: 18px;
    text-align: center;
    font-size: @theme-font-mini2;
    border-radius: 3px;
    margin-right: 7px;
  }
  .red {
    /*background-color: red;*/
  }
}
</style>
