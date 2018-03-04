<template>
  <div id="app">
    <myHeader :seller="seller"></myHeader>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">
          商品
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">
          评价
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">
          商家
        </router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript">
  import myHeader from "./components/header/header"
  import {urlParse} from "./common/js/util.js";
  const ERR_OK = 0;
export default {
  name: 'app',
  data () {
    return {
      seller:{
        id: (() => {
          let queryParam = urlParse();
          return 'queryParam.id';
        })()
      }
    }
  },
  created:function () {
    this.$http.get('/api/seller?id='+this.seller.id).then((res) => {
      if(res.body.errno === ERR_OK){
        this.seller =Object.assign({},this.seller,res.body.data);
      }
    },(err) => {
      console.log(err);
    })
  },
  components:{
    'myHeader': myHeader
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  @import "./common/stylus/index.less";
  .tab{
    display:flex;
    width:100%;
    height:40px;
    line-height:40px;
    text-align:center;
    .border-1px(rgba(7, 17, 27, 0.1));
    .tab-item{
      flex:1;
      text-align: center;
      &>a{
          display:block;
          font-size:14px;
          color:rgb(77,85,93);
          &.router-link-active{
          color:rgb(240,20,20);
          }
       } 
    }
  }
</style>
