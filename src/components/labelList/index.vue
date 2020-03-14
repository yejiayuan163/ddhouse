<template>
  <div class="label-list">
    <div v-for="(item,index) in labelList" :class="{red:item.hot==='true'}" :key="index">
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
  div{
    display: inline-block;
    background-color: aliceblue;
  }
  .red {
    background-color: red;
  }
}
</style>
