<template>
  <div>
    <Header />
    <van-sticky offset-top="50">
    <van-tabs>
      <van-tab v-for="(item,index) in topMenu" :title="item.name" :key="index">
      </van-tab>
    </van-tabs>
    </van-sticky>
    <van-pull-refresh class="list-item" v-model="state.refreshing" @refresh="onRefresh" >
      <van-list
        v-model:loading="state.loading"
        :finished="state.finished"
        finished-text="没有更多了"
        loading-text="加载中..."
        @load="onLoad"
      > 
        <div class="item-first" @click="goDetail()">
            <div class="item-img"><img src="/@/assets/images/test.jpeg" /></div>
            <div class="item-cont">
              <div class="item-title">
                <div class="item-vtime"><img src="/@/assets/images/videoPlay.png" /><span>10:30</span></div><div class="van-ellipsis name">这是一段最多显示两行的文字这是一段最多显示两行的文字</div>/<div>2021-04-28</div>
              </div>
            </div>
        </div>
        <div v-for="item in state.list" :key="item" class="item-home" @click="goDetail(item)">
          <div class="item-cont">
            <div class="van-multi-ellipsis--l2 item-title">
              这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略
            </div>
            <div class="item-tips">来源：<span>青葱汇金华运营中心</span>&nbsp;&nbsp;<span>2021-04-28 </span></div>
          </div>
          <div class="item-img"><img src="/@/assets/images/test.jpeg" /></div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import Header from "../components/Header.vue"
export default {
  name: 'Home',
  data() {
    return {
      keyWords:'',
      topMenu:[
        {name:'推荐'},
        {name:'最新'},
        {name:'科技'},
        {name:'顾问'},
        {name:'滴滴'},
        {name:'是的'},
        {name:'大的'},
        {name:'最后'},
        {name:'一个'}
      ],
      active:0,
      state:{
        list: [],
        loading: false,
        finished: false,
        refreshing: false,
      }
    }
  },
  components: {
    Header
  },
  mounted(){

  },
  methods:{
    goDetail(){
      this.$router.push({path: '/homedetail',query:{url:''}})
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        if (this.state.refreshing) {
          this.state.list = [];
          this.state.refreshing = false;
        }
        for (let i = 0; i < 10; i++) {
          this.state.list.push(this.state.list.length + 1);
        }

        // 加载状态结束
        this.state.loading = false;

        // 数据全部加载完成
        if (this.state.list.length >= 40) {
          this.state.finished = true;
        }
      }, 1000);
    },
    onRefresh(){
      // 清空列表数据
      this.state.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.state.loading = true;
      this.onLoad();
    }
  }
}
</script>
<style lang="less" scoped>
.item-first{
  position: relative;
  height: 58vw;
  margin-bottom: 3vw;
  .item-title {
    padding:0 5vw;
    display: flex;
    text-align: left;
    width: 100%;
    color:#fff;
    position: absolute;
    bottom: 0;
    height: 9vw;
    line-height: 9vw;
    background:linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%,rgba(0, 0, 0, 0.3) 50%,rgba(255, 255, 255, 0) 100%);
    background-size: 100% 100%;
    font-size: 4vw;
    .name{
      width: 50vw;
    }
    .item-vtime{
      width: 14vw;
      border-radius: 5px;
      font-size: 12px;
      background: #000000;
      height: 5.6vw;
      line-height: 5.6vw;
      margin-right: 2vw;
      margin-top:1.5vw;
      text-align: center;
      img{
        width: 2.4vw;
        margin-right: 2px;
        position: relative;
        top:2px
      }
      span{
        position: relative;
        top:1px
      }
    }
  }
  .item-img{
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.item-home{
  background: #fff;
  padding:5vw;
  display: flex;
  .item-img{
    width: 30vw;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .item-cont{
    text-align: left;
    width: 100%;
    .item-title {
      line-height: 6vw;
      margin-right:5px;
      font-weight: bold;
      font-size: 4vw;
    }
    .item-tips {
      color:#999;
      margin-top:5px;
      font-size:12px
    }
  }
}
</style>